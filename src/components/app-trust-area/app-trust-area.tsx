import { Component } from "@stencil/core";

@Component({
  tag: 'app-trust-area',
  styleUrl: 'app-trust-area.scss'
})
export class AppTrustArea {
  render() {
    return [
      <div class="trust-section section-padding-100">
        <div class="section-heading text-center">
          <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          </div>
          <h2 class="wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>We are trusted</h2>
          <p class="wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-3 col-lg-2">
              <div class="trust-item text-center wow fadeInUp" data-wow-delay="0.2s">
                <div class="ico-platform-logo">
                  <img src="/assets/img/ico-platforms/1.png" alt="" />
                </div>
                <div class="check">
                  <div class="value">8.9</div>
                  <div class="check-icon"></div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-3 col-lg-2">
              <div class="trust-item text-center wow fadeInUp" data-wow-delay="0.3s">
                <div class="ico-platform-logo">
                  <img src="/assets/img/ico-platforms/2.png" alt="" />
                </div>
                <div class="check">
                  <div class="value">8.9</div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-3 col-lg-2">
              <div class="trust-item text-center wow fadeInUp" data-wow-delay="0.4s">
                <div class="ico-platform-logo">
                  <img src="/assets/img/ico-platforms/3.png" alt="" />
                </div>
                <div class="check">
                  <div class="value">8.9</div>
                  <div class="check-icon"></div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-3 col-lg-2">
              <div class="trust-item text-center wow fadeInUp" data-wow-delay="0.5s">
                <div class="ico-platform-logo">
                  <img src="/assets/img/ico-platforms/4.png" alt="" />
                </div>
                <div class="check">
                  <div class="value">8.9</div>
                  <div class="check-icon"></div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-3 col-lg-2">
              <div class="trust-item text-center wow fadeInUp" data-wow-delay="0.6s">
                <div class="ico-platform-logo">
                  <img src="/assets/img/ico-platforms/5.png" alt="" />
                </div>
                <div class="check">
                  <div class="value">7.4</div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-3 col-lg-2">
              <div class="trust-item text-center wow fadeInUp" data-wow-delay="0.7s">
                <div class="ico-platform-logo">
                  <img src="/assets/img/ico-platforms/6.png" alt="" />
                </div>
                <div class="check">
                  <div class="value">8.9</div>
                  <div class="check-icon"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    ];
  }
}
