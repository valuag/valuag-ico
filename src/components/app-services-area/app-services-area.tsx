import { Component } from '@stencil/core';


@Component({
  tag: 'app-services-area',
  styleUrl: 'app-services-area.scss'
})
export class AppServicesArea {

  render() {
    return [
      <section class="our_services_area section-padding-0-0 clearfix" id="services">
        <div class="container">

          <div class="section-heading text-center">
            <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
              <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <h2 class="wow fadeInUp" data-wow-delay="0.3s">Our Core Services</h2>
            <p class="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          </div>


          <div class="row">
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.2s">
                <div class="service_icon">
                  <img src="/assets/img/services/1.svg" alt="" />
                </div>
                <h6>Smart Trading Modules</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="service_single_content text-center mb-100 wow wow fadeInUp" data-wow-delay="0.3s">
                <div class="service_icon">
                  <img src="/assets/img/services/2.svg" alt="" />
                </div>
                <h6>Adaptive Social Assistant</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.4s">
                <div class="service_icon">
                  <img src="/assets/img/services/3.svg" alt="" />
                </div>
                <h6>Analyzer of the News </h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.5s">
                <div class="service_icon">
                  <img src="/assets/img/services/4.svg" alt="" />
                </div>
                <h6>Exchange Order Management</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.6s">
                <div class="service_icon">
                  <img src="/assets/img/services/5.svg" alt="" />
                </div>
                <h6>Module of Price Notification</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.7s">
                <div class="service_icon">
                  <img src="/assets/img/services/6.svg" alt="" />
                </div>
                <h6>Crypto Trading Platform</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    ];
  }
}
