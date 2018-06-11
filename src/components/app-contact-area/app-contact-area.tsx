import { Component } from "@stencil/core";

@Component({
  tag: 'app-contact-area',
  styleUrl: 'app-contact-area.scss'
})
export class AppContactArea {
  render() {
    return [
      <div class="contact_us_area" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-heading text-center">
                <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                  <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </div>
                <h2 class="wow fadeInUp" data-wow-delay="0.3s">Contact With Us</h2>
                <p class="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8">
              <div class="contact_form">
                <form action="#" method="post" id="main_contact_form" novalidate>
                  <div class="row">
                    <div class="col-12">
                      <div id="success_fail_info"></div>
                    </div>

                    <div class="col-12 col-md-6">
                      <div class="group wow fadeInUp" data-wow-delay="0.2s">
                        <input type="text" name="name" id="name" required autocomplete='name' />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Name</label>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="group wow fadeInUp" data-wow-delay="0.3s">
                        <input type="text" name="email" id="email" required autocomplete='email' />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Email</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="group wow fadeInUp" data-wow-delay="0.4s">
                        <input type="text" name="subject" id="subject" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Subject</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="group wow fadeInUp" data-wow-delay="0.5s">
                        <textarea name="message" id="message" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Message</label>
                      </div>
                    </div>
                    <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.6s">
                      <button type="submit" class="btn dream-btn">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    ]
  }
}
