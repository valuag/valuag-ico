import { Component } from "@stencil/core";

@Component({
  tag: 'app-features-area',

  styleUrl: 'app-features-area.scss'
})
export class AppFeaturesArea {
  render() {
    return [
      <section class="features section-padding-100">

        <div class="section-heading text-center">
          <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          </div>
          <h2 class="wow fadeInUp" data-wow-delay="0.3s">Meet your new grocery store</h2>
          <p class="wow fadeInUp" data-wow-delay="0.4s">Discover nearby farms. Check their farm page and learn about their products. You can order online your next meal directly from nearby farms to you. Get deliveries or pick-up from the nearby farmers market.</p>
        </div>

        <div class="container-fluid">
          <div class="row">
            <div class="services-column col-lg-5 col-lg-offset-1 col-md-10 offset-md-1 col-xs-10 offset-xs-1">
              <div class="services-block-four">
                <div class="inner-box">
                  <div class="icon-box">
                    <span class="icon ti ti-mobile"></span>
                  </div>
                  <h3><a href="#">Powerfull Mobile and Online App</a></h3>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae provident non hic eum dolores natus, vitae, quae, facere perferendis quas tempore. Consequuntur commodi facilis sed similique.</div>

                </div>
              </div>

              <div class="services-block-four">
                <div class="inner-box">
                  <div class="icon-box">
                    <span class="icon ti ti-widget"></span>
                  </div>
                  <h3><a href="#">Brings more Transparency and Speed</a></h3>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aut repudiandae harum, fugit, necessitatibus veritatis molestias a eligendi distinctio. Nostrum expedita deserunt maiores adipisci.</div>
                </div>
              </div>

              <div class="services-block-four" style={{ marginBottom: '0' }}>
                <div class="inner-box">
                  <div class="icon-box">
                    <span class="icon ti ti-settings"></span>
                  </div>
                  <h3><a href="#">Special for Multiple Use Capabilities</a></h3>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores, ducimus animi a. Nulla ab dolor doloribus, aperiam, quam dolorum dicta vitae tempora, vero at quod error alias incidunt quidem.</div>
                </div>
              </div>

            </div>
            <div class="service-img-wrapper col-lg-6 col-md-12 col-sm-12">
              <div class="image-box">
                <img src="/assets/img/phone.png" class="center-block img-responsive phone-img" alt="" />
                <img src="/assets/img/core-img/rings-bg.png" class="center-block img-responsive rings " alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    ];
  }
}
