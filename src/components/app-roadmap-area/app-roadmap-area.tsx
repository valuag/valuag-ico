import { Component } from "@stencil/core";

@Component({
  tag: 'app-roadmap-area',
  styleUrl: 'app-roadmap-area.scss'
})
export class AppRoadmapArea {
  render() {
    return [
      <section class="roadmap section-padding-100" style={{ background: "url('/assets/img/bg-img/bg-roadmap.png') no-repeat center center", backgroundSize: 'cover' }} id="roadmap">
        <div class="section-heading text-center">
          <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          </div>
          <h2 class="wow fadeInUp" data-wow-delay="0.3s">Our ICO Roadmap</h2>
          <p class="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="section_5-content">
              <div class="section_5-slider-trumb"></div>
              <div id="section_5-slider-circle">
                <div style={{ left: '10%' }} class="data_cir cir_0" data-date="Q2 2017">
                  <div class="data_cir-content">
                    <span><span class="roadmap_content_info">Emergence and design of the idea</span><span class="roadmap_img"><img src="/assets/img/roadmap-icons/1.svg" alt="" /></span></span>
                  </div>
                </div>
                <div style={{ left: '20%' }} class="data_cir cir_1" data-date="Q3 2017">
                  <div class="data_cir-content">
                    <span><span class="roadmap_content_info"><ul><li><span>built our team</span></li>
                      <li><span>company establishment</span></li>
                      <li><span>legal issues setting</span></li>
                      <li><span> concept development</span></li>
                    </ul>
                    </span><span class="roadmap_img"><img src="/assets/img/roadmap-icons/2.svg" alt="" /></span></span>
                  </div>
                </div>
                <div style={{ left: '30%' }} class="data_cir cir_2" data-date="Q4 2017">
                  <div class="data_cir-content">
                    <span><span class="roadmap_content_info"><ul><li><span> start development of the ealier version and crypto wallet version</span></li>
                      <li><span>negotiations on partnerships</span></li>
                    </ul>
                    </span><span class="roadmap_img"><img src="/assets/img/roadmap-icons/3.svg" alt="" /></span></span>
                  </div>
                </div>
                <div style={{ left: '40%' }} class="data_cir cir_3" data-date="Q1 2018">
                  <div class="data_cir-content">
                    <span><span class="roadmap_content_info"><ul><li><span>website launch</span></li>
                      <li><span>White Paper published</span></li>
                      <li><span>Private and Pre-sale start</span></li>
                    </ul>
                    </span><span class="roadmap_img"><img src="/assets/img/roadmap-icons/4.svg" alt="" /></span></span>
                  </div>
                </div>
                <div style={{ left: '50%' }} class="data_cir cir_4 red_crc" data-date="Q2 2018">
                  <div class="data_cir-content">
                    <span><span class="roadmap_content_info"><ul><li><span>Crowdsale</span></li>
                      <li><span>marketing campaign</span></li>
                      <li><span>listing to the major exchanges</span></li>
                    </ul>
                    </span><span class="roadmap_img"><img src="/assets/img/roadmap-icons/5.svg" alt="" /></span></span>
                  </div>
                </div>
                <div style={{ left: '60%' }} class="data_cir cir_5 next" data-date="Q3 2018">
                  <div class="data_cir-content">
                    <span><span class="roadmap_content_info"><ul><li><span>Crypto Wallet version release</span></li>
                      <li><span>Testnet launch</span></li>
                      <li><span> Platform ealier version development</span></li>
                    </ul>
                    </span><span class="roadmap_img"><img src="/assets/img/roadmap-icons/6.svg" alt="" /></span></span>
                  </div>
                </div>
                <div style={{ left: '70%' }} class="data_cir cir_6 next" data-date="Q4 2018">
                  <div class="data_cir-content">
                    <span><span class="roadmap_content_info"><ul><li><span>Mobile App</span></li>
                      <li><span>Explorer</span></li>
                      <li><span>new partnerships and new marketplace support</span></li>
                    </ul>
                    </span><span class="roadmap_img"><img src="/assets/img/roadmap-icons/7.svg" alt="" /></span></span>
                  </div>
                </div>
                <div style={{ left: '80%' }} class="data_cir cir_7 next" data-date="Q1 2019">
                  <div class="data_cir-content">
                    <span><span class="roadmap_content_info"><ul><li><span>Mainnet launch</span></li>
                      <li><span>Wallet beta-version release</span></li>
                      <li><span>Masternodes implementation</span></li>
                    </ul>
                    </span><span class="roadmap_img"><img src="/assets/img/roadmap-icons/8.svg" alt="" /></span></span>
                  </div>
                </div>
                <div style={{ left: '90%' }} class="data_cir cir_8 next" data-date="Q2 2019">
                  <div class="data_cir-content">
                    <span><span class="roadmap_content_info"><ul><li><span> Platform integration to electronic marketplaces</span></li>
                      <li><span>Zero Fee</span></li>
                    </ul>
                    </span><span class="roadmap_img"><img src="/assets/img/roadmap-icons/9.svg" alt="" /></span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ];
  }
}
