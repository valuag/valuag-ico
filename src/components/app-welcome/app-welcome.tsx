import { Component } from "@stencil/core";

@Component({
  tag: 'app-welcome',
  styleUrl: 'app-welcome.scss'
})
export class AppWelcome {
  render() {
    return [
      <section class="welcome_area clearfix dzsparallaxer auto-init ico fullwidth" data-options='{direction: "normal"}' id="home">
        <div class="divimage dzsparallaxer--target" style={{ width: '101%', height: '130%', backgroundImage: ' url(/assets/img/bg-img/bg-2.jpg)' }}></div>

        <div class="hero-content dark-blue">
          <div class="dream-blip blip1"></div>
          <div class="dream-blip blip2"></div>
          <div class="dream-blip blip3"></div>
          <div class="dream-blip blip4"></div>

          <div class="container h-100">
            <div class="row h-100 align-items-center">
              <div class="col-12 col-lg-7 col-md-12">
                <div class="welcome-content">
                  <div class="promo-section">
                    <div class="integration-link">
                      <span class="integration-icon">
                        <img src="/assets/img/svg/img-dollar.svg" width="24" height="24" alt="" />
                      </span>
                      <span class="integration-text">Discover new ways to enjoy your World!</span>
                    </div>
                  </div>
                  <h1 class="wow fadeInUp" data-wow-delay="0.2s">Agricultural Crypto Revolution</h1>
                  <p class="wow fadeInUp" data-wow-delay="0.3s">We have over 15 year experience in business marketplace arena.</p>
                  <div class="dream-btn-group wow fadeInUp" data-wow-delay="0.4s">
                    <a href="#" class="btn dream-btn mr-3">Whitepaper</a>
                    <a href="https://github.com/valuag" target="blank" class="btn dream-btn">GitHub</a>
                  </div>
                </div>
              </div>
              <div class="service-img-wrapper col-lg-5 col-md-12 col-sm-12">
                <div class="image-box">
                  <div class="ico-counter">
                    <div class="counter-down">

                      <div class="content">
                        <div class="conuter-header">
                          <h3 class="text-center">TOKEN SALE ENDS IN</h3>
                        </div>
                        <div class="counterdown-content">
                          <div class="ico-sales-status mb-15 o-hidden">
                            <div class="pull-left">
                              <h3 class="dollar-earning">$7,575,357</h3>
                              <p style={{ paddingLeft: '10px' }}>Worth of DREAM tokens</p>
                            </div>
                            <div class="pull-right">
                              <h3 class="btc-earning">9.764 <span>BTC</span></h3>
                              <p>BTC Raised</p>
                            </div>
                          </div>
                          <div class="count-down titled circled text-center">
                            <div class="simple_timer syotimer timer">
                              <div class="timer-head-block" />
                              <div class="timer-body-block">
                                <div class="table-cell day">
                                  <div class="tab-val">90</div>
                                  <div class="tab-metr tab-unit">days</div>
                                </div>
                                <div class="table-cell hour">
                                  <div class="tab-val">90</div>
                                  <div class="tab-metr tab-unit">hours</div>
                                </div>
                                <div class="table-cell minute">
                                  <div class="tab-val">90</div>
                                  <div class="tab-metr tab-unit">minutes</div>
                                </div>
                                <div class="table-cell second">
                                  <div class="tab-val">90</div>
                                  <div class="tab-metr tab-unit">seconds</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="ico-progress">
                            <ul class="list-unstyled list-inline clearfix mb-10">
                              <li class="title">33m</li>
                              <li class="strength">75m</li>
                            </ul>
                            <div class="current-progress">
                              <div class="progress-bar has-gradient" style={{ width: '75%' }}></div>
                            </div>
                            <span class="pull-left">Softcap in 103 days</span>
                            <span class="pull-right">Token Hardcap</span>
                          </div>
                          <div class="text-center">
                            <a href="#" class="button mt-30">Buy More Tokens</a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <img src="/assets/img/core-img/rings-bg.png" class="center-block img-responsive rings " alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ];
  }
}
