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
                <h4 class="wow fadeInUp" data-wow-delay="0.3s">What does ValuAg offer?</h4>
                <p class="wow fadeInUp" data-wow-delay="0.4s">ValuAg's online network connects ag/farm/food producers with buyers of anytime/anywhere transactions for seasonal products.</p>
                <p class="wow fadeInUp" data-wow-delay="0.5s">ValuAg creates marketplace for you to access fresh, organic and healthy food around your local area.</p>
                <p class="wow fadeInUp" data-wow-delay="0.6s">ValuAg only works with organic and GMO-free farms who can take their responsibility to the consumer seriously.</p>
                <p class="wow fadeInUp" data-wow-delay="0.7s">ValuAg products work great for any scale of food consumers - individuals, restourants, grocery stores, schools...</p>
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
                <h4 class="wow fadeInUp" data-wow-delay="0.3s">Target Market</h4>
                <p class="wow fadeInUp" data-wow-delay="0.4s">Initially, our services will be targeted toward AFF industry producers and those that buy from them. Providing our geo-ERP, supply chain management, and food-hub concept, we'll evolve to include everyday consumers.</p>
                <p class="wow fadeInUp" data-wow-delay="0.5s">Today, NY alone realizes over $131 billion & over 200,000 jobs of the $1 trillion US AFF extended industry revenue(2011:NY Farm Viability/Cornell U. report). Our goal is to capture another 1% of the AFF related industry revenue in 5 years resulting in $1.3 billion in new economic activity & thousands of AFF+ high-tech/salaried jobs & carreers.</p>
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
