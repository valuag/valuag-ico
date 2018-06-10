import { Component } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss'
})
export class AppHeader {
  render() {
    return [
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


                  <a href="#" class="btn login-btn ml-50">Log in</a>
                </div>

              </div>
            </nav>
          </div>
        </div>
      </header>
    ]
  }
}
