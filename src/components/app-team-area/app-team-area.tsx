import { Component } from "@stencil/core";

@Component({
  tag: 'app-team-area',
  styleUrl: 'app-team-area.scss'
})
export class AppTeamArea {
  render() {
    return [
      <section class="our_team_area section-padding-100-0 clearfix" id="team">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-heading text-center">
                <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h2 class="wow fadeInUp" data-wow-delay="0.3s">Awesome Team</h2>
                <p class="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo. </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="single-team-member wow fadeInUp" data-wow-delay="0.2s">
                <div class="team-member-thumb">
                  <img src="/assets/img/team-img/1.png" class="center-block" alt="" />
                </div>
                <div class="team-info">
                  <h5>Sunny khan</h5>
                  <p>Executive Officer</p>
                </div>
                <div class="team-social-icon">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-skype"></i></a>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <div class="single-team-member wow fadeInUp" data-wow-delay="0.3s">
                <div class="team-member-thumb">
                  <img src="/assets/img/team-img/2.png" class="center-block" alt="" />
                </div>
                <div class="team-info">
                  <h5>Ajoy Das</h5>
                  <p>Business Development</p>
                </div>
                <div class="team-social-icon">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-skype"></i></a>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <div class="single-team-member wow fadeInUp" data-wow-delay="0.4s">
                <div class="team-member-thumb">
                  <img src="/assets/img/team-img/3.png" class="center-block" alt="" />
                </div>
                <div class="team-info">
                  <h5>Afroza Mou</h5>
                  <p>UX/UI Designer</p>
                </div>
                <div class="team-social-icon">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-skype"></i></a>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <div class="single-team-member wow fadeInUp" data-wow-delay="0.5s">
                <div class="team-member-thumb">
                  <img src="/assets/img/team-img/4.png" class="center-block" alt="" />
                </div>
                <div class="team-info">
                  <h5>Lim Sarah</h5>
                  <p>Head of Marketing</p>
                </div>
                <div class="team-social-icon">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-skype"></i></a>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <div class="single-team-member wow fadeInUp" data-wow-delay="0.2s">
                <div class="team-member-thumb">
                  <img src="/assets/img/team-img/1.png" class="center-block" alt="" />
                </div>
                <div class="team-info">
                  <h5>Sunny khan</h5>
                  <p>Executive Officer</p>
                </div>
                <div class="team-social-icon">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-skype"></i></a>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <div class="single-team-member wow fadeInUp" data-wow-delay="0.3s">
                <div class="team-member-thumb">
                  <img src="/assets/img/team-img/2.png" class="center-block" alt="" />
                </div>
                <div class="team-info">
                  <h5>Ajoy Das</h5>
                  <p>Business Development</p>
                </div>
                <div class="team-social-icon">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-skype"></i></a>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <div class="single-team-member wow fadeInUp" data-wow-delay="0.4s">
                <div class="team-member-thumb">
                  <img src="/assets/img/team-img/3.png" class="center-block" alt="" />
                </div>
                <div class="team-info">
                  <h5>Afroza Mou</h5>
                  <p>UX/UI Designer</p>
                </div>
                <div class="team-social-icon">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-skype"></i></a>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <div class="single-team-member wow fadeInUp" data-wow-delay="0.5s">
                <div class="team-member-thumb">
                  <img src="/assets/img/team-img/4.png" class="center-block" alt="" />
                </div>
                <div class="team-info">
                  <h5>Lim Sarah</h5>
                  <p>Head of Marketing</p>
                </div>
                <div class="team-social-icon">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-skype"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    ]
  }
}
