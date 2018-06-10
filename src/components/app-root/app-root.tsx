import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return [
      //<app-preloader />,
      <app-header />,
      <app-welcome />,
      <app-about-us />,
      <app-video-area />,
      <app-vertical-social />,
      <app-trust-area />,
      <app-services-area />,
      <app-roadmap-area />,
      <app-features-area />,
      <app-subscribe-area />,
      <app-faq-area />,
      <app-token-distribution-area />,
      <app-mission-area />,
      <app-team-area />,
      <app-blog-area />,
      <app-footer />
    ];
  }
}
