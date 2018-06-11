import { Component } from '@stencil/core';
import firebase from 'firebase';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  componentWillLoad() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyAKZoAyFVar3MM260goBsZ8COdbMcbgIAE",
      authDomain: "valuag-ico.firebaseapp.com",
      databaseURL: "https://valuag-ico.firebaseio.com",
      projectId: "valuag-ico",
      storageBucket: "valuag-ico.appspot.com",
      messagingSenderId: "994045621453"
    });
  }
  render() {
    return [
      <app-preloader />,
      <stencil-router>
        <stencil-route url='/' component='app-home' exact={true}>
        </stencil-route>

        <stencil-route url='/profile/:name' component='app-profile'>
        </stencil-route>
        <stencil-route url='/dashboard' component='app-dashboard'>
        </stencil-route>
      </stencil-router>
    ];
  }
}
