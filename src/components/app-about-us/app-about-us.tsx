import { Component } from "@stencil/core";

@Component({
  tag: 'app-about-us',
  styleUrl: 'app-about-us.scss'
})
export class AppAboutUs {
  render() {
    return [
      <section class="about-us-area section-padding-100 clearfix" id="about">
        <div class="container">
          <div class="row align-items-center">

            <div class="col-12 col-lg-6">
              <div class="welcome-meter wow fadeInUp" data-wow-delay="0.7s">
                <img src="/assets/img/svg/about1.svg" class="img-responsive center-block" alt="" />
                <div class="growing-company text-center mt-30 wow fadeInUp" data-wow-delay="0.8s">
                  <p>* Already growing up <span class="counter">5236</span> company</p>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-6">
              <div class="who-we-contant">
                <div class="dream-dots wow fadeInUp" data-wow-delay="0.2s">
                  <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </div>
                <h4 class="wow fadeInUp" data-wow-delay="0.3s">We complete every project with extra care as customer need.</h4>
                <p class="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                <p class="wow fadeInUp" data-wow-delay="0.5s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!</p>
                <a class="btn dream-btn mt-30 wow fadeInUp" data-wow-delay="0.6s" href="#">Read More</a>
              </div>
            </div>

          </div>
        </div>
      </section>,

      <section class="about-us-area section-padding-0-100 clearfix">
        <div class="container">
          <div class="row align-items-center">

            <div class="col-12 col-lg-6">
              <div class="who-we-contant">
                <div class="dream-dots wow fadeInUp" data-wow-delay="0.2s">
                  <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </div>
                <h4 class="wow fadeInUp" data-wow-delay="0.3s">We complete every project with extra care as customer need.</h4>
                <p class="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                <p class="wow fadeInUp" data-wow-delay="0.5s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus similique aliquam consequuntur saepe numquam suscipit praesentium fuga eveniet error assumenda eos quasi doloribus ullam autem, quisquam aliquam consequuntur saepe numquam suscipit similique!</p>
                <a class="btn dream-btn mt-30 wow fadeInUp" data-wow-delay="0.6s" href="#">Read More</a>
              </div>
            </div>

            <div class="col-12 col-lg-6">
              <div class="welcome-meter wow fadeInUp" data-wow-delay="0.7s">
                <img src="/assets/img/solution.png" class="center-block" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    ];
  }
}
