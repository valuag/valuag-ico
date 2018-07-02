import { Component, Element, Prop } from '@stencil/core';


@Component({
  tag: 'app-preloader',
  styleUrl: 'app-preloader.scss'
})
export class AppPreloader {
  @Element() element: HTMLAppPreloaderElement;
  @Prop({ context: 'isServer' }) isServer: boolean;
  componentDidLoad() {
    if (!this.isServer) {
      setTimeout(() => {
        this.element.remove();
      }, 1000);
    }
  }
  render() {
    return (
      <div id="preloader">
        <div class="preload-content">
          <div id="dream-load" />
        </div>
      </div>
    );
  }
}
