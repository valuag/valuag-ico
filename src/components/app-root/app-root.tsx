import { Component, Prop } from '@stencil/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'wowjs';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  @Prop({ context: 'isServer' }) private isServer: boolean;
  async componentWillLoad() {
    if (!this.isServer) {
      const WOW = window['WOW'];
      new WOW().init();
      // Initialize Firebase
      const response = await fetch('/__/firebase/init.json');
      const config = await response.json();
      firebase.initializeApp(config);
    }
  }
  render() {
    return [
      <app-preloader />,
      <stencil-router>
        <stencil-route url='/' component='app-home' exact={true}>
        </stencil-route>
        <stencil-route url='/login' component='app-login'>
        </stencil-route>
        <stencil-route url='/profile/:name' component='app-profile'>
        </stencil-route>
        <stencil-route url='/dashboard' component='app-dashboard'>
        </stencil-route>
      </stencil-router>
    ];
  }
}
