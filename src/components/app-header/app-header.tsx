import { Component, State, Listen, ComponentWillLoad, ComponentDidUnload, Prop } from '@stencil/core';
import firebase from 'firebase/app';
import 'firebase/functions';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss'
})
export class AppHeader implements ComponentWillLoad, ComponentDidUnload {

  @Prop({ context: 'isServer' }) private isServer: boolean;

  loginDialog: HTMLDialogElement;
  loginForm: HTMLFormElement;
  @State() loginStatus: string;
  @State() loginError: string;

  onAuthStateChangedUnsubscribe: firebase.Unsubscribe;
  @State() isLoggedIn: boolean;

  registerDialog: HTMLDialogElement;
  registerForm: HTMLFormElement;
  @State() registerStatus: string;
  @State() registerError: string;
  @State() qrcodeDataUrl: string;

  headerArea: HTMLElement;

  componentWillLoad() {
    if (!this.isServer) {
      this.onAuthStateChangedUnsubscribe = firebase.auth().onAuthStateChanged(user => {
        this.isLoggedIn = !!user
      });
    }
  }
  closeDialog(dialog: HTMLDialogElement) {
    dialog.classList.add('hide');
    const eventListener = function () {
      dialog.classList.remove('hide');
      dialog.close();
      dialog.removeEventListener('webkitAnimationEnd', eventListener, false);
    };
    dialog.addEventListener('webkitAnimationEnd', eventListener, false);
  }
  componentDidUnload() {
    if (this.onAuthStateChangedUnsubscribe) {
      this.onAuthStateChangedUnsubscribe();
    }
  }
  private async handleLogin(e: Event) {
    e.preventDefault();
    this.loginStatus = 'Logging in...';
    this.loginError = '';
    try {
      const { value: email } = this.loginForm.elements.namedItem('email') as HTMLInputElement;
      const { value: password } = this.loginForm.elements.namedItem('password') as HTMLInputElement;
      const { value: token } = this.loginForm.elements.namedItem('token') as HTMLInputElement;

      const { data: { loginToken } } = await firebase.functions().httpsCallable('createLoginToken')({
        email,
        password,
        token
      });

      await firebase.auth().signInWithCustomToken(loginToken);
      this.loginStatus = '';
      this.loginForm.reset();
      this.closeDialog(this.loginDialog);
    } catch (e) {
      this.loginStatus = '';
      this.loginError = JSON.parse(e.message).message;
    }
  }
  private async handleRegister(e: Event) {
    e.preventDefault();
    this.registerStatus = 'Creating your account...';
    this.registerError = '';
    try {
      const { value: displayName } = this.registerForm.elements.namedItem('displayName') as HTMLInputElement;
      const { value: phoneNumber } = this.registerForm.elements.namedItem('phoneNumber') as HTMLInputElement;
      const { value: email } = this.registerForm.elements.namedItem('email') as HTMLInputElement;
      const { value: password } = this.registerForm.elements.namedItem('password') as HTMLInputElement;

      const { data: { qrcodeDataUrl } } = await firebase.functions().httpsCallable('createAccount')({
        displayName,
        email,
        phoneNumber,
        password
      });

      this.qrcodeDataUrl = qrcodeDataUrl;
      this.registerStatus = '';
      this.registerForm.reset();
    } catch (e) {
      this.registerStatus = '';
      this.registerError = JSON.parse(e.message).message;
    }
  }
  @Listen('window:scroll')
  onScroll() {
    if (scrollY > 0) {
      this.headerArea.classList.add('sticky');
    } else {
      this.headerArea.classList.remove('sticky');
    }
  }
  render() {
    return [
      <dialog ref={el => this.loginDialog = el as HTMLDialogElement}>
        <h3>Login</h3>
        {this.loginError && (
          <div class="alert alert-danger" role="alert">
            Error: {this.loginError}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() => this.loginError = ''}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        {this.loginStatus && (
          <div class="alert alert-info" role="alert">
            {this.loginStatus}
          </div>
        )}
        <form onSubmit={e => this.handleLogin(e)} ref={el => this.loginForm = el as HTMLFormElement}>
          <div class="group">
            <input type="email" name="email" required />
            <span class="bar" />
            <span class="highlight" />
            <label htmlFor="email">E-Mail</label>
          </div>
          <div class="group">
            <input type="password" name="password" required />
            <span class="bar" />
            <span class="highlight" />
            <label htmlFor="password">Password</label>
          </div>
          <div class="group">
            <input type="token" name="token" required />
            <span class="bar" />
            <span class="highlight" />
            <label htmlFor="token">Token</label>
          </div>
          <div class="dream-btn-group">
            <button type="submit" class="btn dream-btn mr-3">Login</button>
            <button type="reset" class="btn dream-btn" onClick={() => this.closeDialog(this.loginDialog)}>Close</button>
          </div>
        </form>
      </dialog>,
      <dialog ref={el => this.registerDialog = el as HTMLDialogElement}>
        <h3>Create New Account</h3>
        <small class="form-text text-light">We'll never share your personal information with anyone else.</small>
        {this.registerError && (
          <div class="alert alert-danger" role="alert">
            Error: {this.registerError}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() => this.registerError = ''}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        {this.registerStatus && (
          <div class="alert alert-info" role="alert">
            {this.registerStatus}
          </div>
        )}
        {this.qrcodeDataUrl && [
          <div class="alert alert-success" role="alert">
            Your registration is successful!
            <br />
            Please keep this QRCode safe!
          </div>,
          <img src={this.qrcodeDataUrl} />,
          <div class='dream-btn-group'>
            <button class="btn dream-btn" onClick={() => this.closeDialog(this.registerDialog)}>Close</button>
          </div>
        ]}
        <form onSubmit={e => this.handleRegister(e)} ref={el => this.registerForm = el as HTMLFormElement} hidden={!!this.qrcodeDataUrl}>
          <div class="group">
            <input type="displayName" name="displayName" required />
            <span class="bar" />
            <span class="highlight" />
            <label htmlFor="displayName">Display Name</label>
          </div>
          <div class="group">
            <input type="email" name="email" required />
            <span class="bar" />
            <span class="highlight" />
            <label htmlFor="email">E-Mail</label>
          </div>
          <div class="group">
            <input type="tel" name="phoneNumber" required />
            <span class="bar" />
            <span class="highlight" />
            <label htmlFor="phoneNumber">Phone</label>
          </div>
          <div class="group">
            <input type="password" name="password" required />
            <span class="bar" />
            <span class="highlight" />
            <label htmlFor="password">Password</label>
          </div>
          <div class="dream-btn-group">
            <button type="submit" class="btn dream-btn mr-3">Register</button>
            <button type="reset" class="btn dream-btn" onClick={() => this.registerDialog.close()}>Close</button>
          </div>
        </form>
      </dialog>,
      <header class="header-area wow fadeInDown" data-wow-delay="0.2s" ref={el => this.headerArea = el}>
        <div class="classy-nav-container breakpoint-off dark left">
          <div class="container">

            <nav class="classy-navbar justify-content-between" id="dreamNav">

              <a class="nav-brand" href="#top"><img src="/assets/img/core-img/logo.png" alt="logo" /> ValuAg ICO.</a>


              <div class="classy-navbar-toggler">
                <span class="navbarToggler"><span></span><span></span><span></span></span>
              </div>


              <div class="classy-menu">


                <div class="classycloseIcon">
                  <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                </div>


                <div class="classynav">
                  <ul id="nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#roadmap">Roadmap</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>


                  {this.isLoggedIn ?
                    <a href="/my-account" class="btn login-btn ml-50">My Account</a>
                    :
                    [
                      <a href="#" class="btn login-btn ml-50" onClick={() => this.loginDialog.showModal()}>Log in</a>,
                      <a href="#" class="btn login-btn ml-50" onClick={() => this.registerDialog.showModal()}>Register</a>
                    ]}
                </div>

              </div>
            </nav>
          </div>
        </div>
      </header>
    ]
  }
}
