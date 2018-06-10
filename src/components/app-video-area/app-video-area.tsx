import { Component } from "@stencil/core";

@Component({
  tag: 'app-video-area',
  styleUrl: 'app-video-area.scss'
})
export class AppVideoArea {
  render() {
    return [
      <section class="demo-video section-before section-padding-100">
        <div class="container">
          <div class="section-heading text-center">
            <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
              <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <h2 class="wow fadeInUp" data-wow-delay="0.3s">Watch our demo video</h2>
            <p class="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          </div>
          <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
            <div class="welcome-video-area wow fadeInUp" data-wow-delay="0.5s">
              <div class="welcome-thumb">
                <img src="/assets/img/bg-img/bg-4.jpg" alt="" />
              </div>
              <div class="video-icon">
                <a href="https://www.youtube.com/watch?v=gbXEPHsTkgU" class="btn dream-btn video-btn" id="videobtn"><i class="fa fa-play"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>,
      <div class="clearfix"></div>

    ];
  }
}
