import { Component, Prop, ComponentWillLoad } from '@stencil/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import 'wowjs';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot implements ComponentWillLoad {
  @Prop({ context: 'isServer' }) private isServer: boolean;
  componentWillLoad() {
    if (!this.isServer) {
      const WOW = window['WOW'];
      new WOW().init();
      // Initialize Firebase
      const config = {
        apiKey: "AIzaSyAKZoAyFVar3MM260goBsZ8COdbMcbgIAE",
        authDomain: "valuag-ico.firebaseapp.com",
        databaseURL: "https://valuag-ico.firebaseio.com",
        projectId: "valuag-ico",
        storageBucket: "valuag-ico.appspot.com",
        messagingSenderId: "994045621453"
      };
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
