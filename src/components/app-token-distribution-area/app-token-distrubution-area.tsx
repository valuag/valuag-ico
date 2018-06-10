import { Component } from "@stencil/core";

@Component({
  tag: 'app-token-distribution-area'
})
export class AppTokenDistributionArea {
  render() {
    return [
      <section class="token-distribution">
        <div class="container">

          <div class="section-heading text-center">
            <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
              <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <h2 class="wow fadeInUp" data-wow-delay="0.3s">Our ICO Distribution</h2>
            <p class="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-12">
            <h2 class="text-center mb-30">Token Allocation</h2>
            <div class="token-allocation">
              <img src="/assets/img/core-img/allocation.png" class="center-block" alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="token-info-wapper"></div>
            <h2 class="text-center mb-30">More Token Info</h2>
            <div class="token-info">
              <div class="info-wrapper">
                <div class="token-icon" style={{ backgroundImage: "url('/assets/img/svg/token-icon-1.svg')" }}></div>
                <div class="token-descr">Lorem ipsum dolor sit amet, conse ctetur elit</div>
              </div>
            </div>
            <div class="token-info">
              <div class="info-wrapper">
                <div class="token-icon" style={{ backgroundImage: "url('/assets/img/svg/token-icon-2.svg')" }}></div>
                <div class="token-descr">Sed quis accumsan nisi Ut ut felis</div>
              </div>
            </div>
            <div class="token-info">
              <div class="info-wrapper">
                <div class="token-icon" style={{ backgroundImage: "url('/assets/img/svg/token-icon-3.svg')" }}></div>
                <div class="token-descr">felis congue nisl hendrerit commodo</div>
              </div>
            </div>
            <div class="token-info" style={{ marginBottom: '0' }}>
              <div class="info-wrapper">
                <div class="token-icon" style={{ backgroundImage: "url('/assets/img/svg/token-icon-4.svg')" }}></div>
                <div class="token-descr">arch nemo sequi rem saepe ad quasi ullam.</div>
              </div>
            </div>
          </div>
        </div>

      </section>
    ]
  }
}
