import { Component } from "@stencil/core";

@Component({
  tag: 'app-mission-area'
})
export class AppMissionArea {
  render() {
    return [
      <section class="our-mission-area  clearfix" id="feature">
        <div class="divimage dzsparallaxer--target " style={{ width: '101%', height: '130%', backgroundImage: 'url(/assets/img/bg-img/bg-3.jpg)' }}></div>

        <div class="our-mission-content">
          <div class="container h-100">
            <div class="row h-100 align-items-center">
              <div class="col-12 col-md-4">
                <div class="single-mission wow fadeInUp" data-wow-delay="0.2s">
                  <i class="ti-shine"></i>
                  <h6>Quality</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, illo, cumque. Fuga neque similique quibusdam animi ipsam obcaecati.</p>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="single-mission wow fadeInUp" data-wow-delay="0.3s">
                  <i class="ti-ruler-pencil"></i>
                  <h6>Creativity</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, illo, cumque. Fuga neque similique quibusdam animi ipsam obcaecati.</p>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="single-mission wow fadeInUp" data-wow-delay="0.4s">
                  <i class="ti-heart"></i>
                  <h6>Reliability</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, illo, cumque. Fuga neque similique quibusdam animi ipsam obcaecati.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ]
  }
}
