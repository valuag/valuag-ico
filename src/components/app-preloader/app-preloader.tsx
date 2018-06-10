import { Component } from '@stencil/core';


@Component({
  tag: 'app-preloader',
  styleUrl: 'app-preloader.scss'
})
export class AppPreloader {

  render() {
    return (
      <div id="preloader">
        <div class="preload-content">
          <div id="dream-load"></div>
        </div>
      </div>
    );
  }
}
