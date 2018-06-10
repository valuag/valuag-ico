import { Component } from "@stencil/core";

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss'
})
export class AppFooter {
  render() {
    return [

      <footer class="footer-area bg-img" style={{ backgroundImage: 'url(/assets/img/core-img/pattern.png)' }}>
        <app-contact-area />

        <div class="footer-content-area " style={{ backgroundImage: 'url((/assets/img/core-img/footer-bg1.png)' }}>
          <div class="container">
            <div class="row align-items-end">
              <div class="col-12 col-md-5">
                <div class="footer-copywrite-info">
                  <div class="copywrite_text wow fadeInUp" data-wow-delay="0.2s">
                    <div class="footer-logo">
                      <a href="#"><img src="/assets/img/core-img/logo.png" alt="logo" /> ValuAg ICO.</a>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad, a eaque officiis eligendi blanditiis odio necessitatibus.</p>
                  </div>
                  <div class="footer-social-info wow fadeInUp" data-wow-delay="0.4s">
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"> <i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-7">
                <div class="contact_info_area d-sm-flex justify-content-between">
                  <div class="contact_info text-center wow fadeInUp" data-wow-delay="0.2s">
                    <h5>NAVIGATE</h5>
                    <a href=""><p>Advertisers</p></a>
                    <a href=""><p>Developers</p></a>
                    <a href=""><p>Resources</p></a>
                    <a href=""><p>Company</p></a>
                    <a href=""><p>Connect</p></a>
                  </div>
                  <div class="contact_info text-center wow fadeInUp" data-wow-delay="0.3s">
                    <h5>PRIVACY & TOS</h5>
                    <a href=""><p>Advertiser Agreement</p></a>
                    <a href=""><p>Acceptable Use Policy</p></a>
                    <a href=""><p>Privacy Policy</p></a>
                    <a href=""><p>Technology Privacy</p></a>
                    <a href=""><p>Developer Agreement</p></a>
                  </div>
                  <div class="contact_info text-center wow fadeInUp" data-wow-delay="0.4s">
                    <h5>Phone</h5>
                    <p>Mailing Address:xx00 E. Union Ave</p>
                    <p>Suite 1100. Denver, CO 80237</p>
                    <p>+999 90932 627</p>
                    <p>support@yourdomain.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    ]
  }
}
