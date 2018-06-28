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
            <h2 class="wow fadeInUp" data-wow-delay="0.3s">Our Services</h2>
            <p class="wow fadeInUp" data-wow-delay="0.4s">A comprehensive local food supply platform</p>
          </div>


          <div class="row">
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.2s">
                <div class="service_icon">
                  <img src="/assets/img/services/1.svg" alt="" />
                </div>
                <h6>Customized Cuisines</h6>
                <p>Find out best products depending on your cuisine.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="service_single_content text-center mb-100 wow wow fadeInUp" data-wow-delay="0.3s">
                <div class="service_icon">
                  <img src="/assets/img/services/2.svg" alt="" />
                </div>
                <h6>Customized Diets</h6>
                <p>Let us prepare weekly box of what your body needs.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.4s">
                <div class="service_icon">
                  <img src="/assets/img/services/3.svg" alt="" />
                </div>
                <h6>Future Contracts</h6>
                <p>Sign contracts to get paid before you grow.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.5s">
                <div class="service_icon">
                  <img src="/assets/img/services/4.svg" alt="" />
                </div>
                <h6>Smart Predictions</h6>
                <p>Get predictions for what to grow depending on analysis of most demanded products near you.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.6s">
                <div class="service_icon">
                  <img src="/assets/img/services/5.svg" alt="" />
                </div>
                <h6>Planting Calendar</h6>
                <p>Learn when is the best time to grow your veggies.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.7s">
                <div class="service_icon">
                  <img src="/assets/img/services/6.svg" alt="" />
                </div>
                <h6>Only Fresh Food</h6>
                <p>You can have it in less than 12 hours in your plate after cropped.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    ];
  }
}
