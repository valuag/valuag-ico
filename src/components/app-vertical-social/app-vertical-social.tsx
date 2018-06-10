import { Component } from "@stencil/core";

@Component({
  tag: 'app-vertical-social',
  styleUrl: 'app-vertical-social.scss'
})
export class AppVerticalSocial {
  render() {
    return [
      <div class="vertical-social">
        <ul>
          <li><a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-medium" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"> <i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-github" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>

        </ul>
      </div>
    ]
  }
}
