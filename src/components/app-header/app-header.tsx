import { Component } from '@stencil/core';
import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss'
})
export class AppHeader {
  loginDialog: HTMLDialogElement;
  isLoggedIn: boolean;
  componentWillLoad() {

  }
  openLoginDialog() {
    // FirebaseUI config.
    const uiConfig = {
      callbacks: {
        uiShown: () => {
          this.loginDialog.showModal();
        }
      },
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: '/tos',
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    };

    // Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
  }
  render() {
    return [
      <dialog id='firebaseui-auth-container' ref={el => this.loginDialog = el as HTMLDialogElement} />,
      <header class="header-area wow fadeInDown" data-wow-delay="0.2s">
        <div class="classy-nav-container breakpoint-off">
          <div class="container">

            <nav class="classy-navbar justify-content-between" id="dreamNav">

              <a class="nav-brand" href="index-2.html"><img src="/assets/img/core-img/logo.png" alt="logo" /> ValuAg ICO.</a>


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
                    <a href="#" class="btn login-btn ml-50" onClick={() => this.openLoginDialog()}>Log in</a>}
                </div>

              </div>
            </nav>
          </div>
        </div>
      </header>
    ]
  }
}
