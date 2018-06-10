import { Component } from "@stencil/core";

@Component({
  tag: 'app-blog-area',
  styleUrl: 'app-blog-area.scss'
})
export class AppBlogArea {
  render() {
    return [
      <section class="our_blog_area clearfix" id="blog">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-heading text-center">
                <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                  <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </div>
                <h2 class="wow fadeInUp" data-wow-delay="0.3s">Latest News</h2>
                <p class="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo. </p>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">


            <div class="col-12 col-md-6 col-lg-4">
              <div class="single-blog-area wow fadeInUp" data-wow-delay="0.2s">
                <div class="blog_thumbnail">
                  <img src="/assets/img/blog-img/1.jpg" alt="" />
                </div>
                <div class="blog-content">

                  <div class="post-meta mt-20">
                    <p>By <a href="#" class="post-author">ADMIN</a> <a href="#">Apr 10, 2018</a> <a href="#" class="post-comments">7 comments</a></p>
                  </div>
                  <a href="index-single-blog.html" class="post-title">
                    <h4>How to become a successful businessman.</h4>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat at vitae, ratione sapiente repellat.</p>
                  <a href="index-single-blog.html" class="btn dream-btn mt-15">Read Details</a>
                </div>
              </div>
            </div>


            <div class="col-12 col-md-6 col-lg-4">
              <div class="single-blog-area wow fadeInUp" data-wow-delay="0.3s">
                <div class="blog_thumbnail">
                  <img src="/assets/img/blog-img/2.jpg" alt="" />
                </div>

                <div class="blog-content">


                  <div class="post-meta mt-20">
                    <p>By <a href="#" class="post-author">ADMIN</a> <a href="#">Apr 10, 2018</a> <a href="#" class="post-comments">7 comments</a></p>
                  </div>
                  <a href="index-single-blog.html" class="post-title">
                    <h4>How to become a successful businessman.</h4>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat at vitae, ratione sapiente repellat.</p>
                  <a href="index-single-blog.html" class="btn dream-btn mt-15">Read Details</a>
                </div>
              </div>
            </div>


            <div class="col-12 col-md-6 col-lg-4">
              <div class="single-blog-area wow fadeInUp" data-wow-delay="0.4s">
                <div class="blog_thumbnail">
                  <img src="/assets/img/blog-img/3.jpg" alt="" />
                </div>

                <div class="blog-content">


                  <div class="post-meta mt-20">
                    <p>By <a href="#" class="post-author">ADMIN</a> <a href="#">Apr 10, 2018</a> <a href="#" class="post-comments">7 comments</a></p>
                  </div>
                  <a href="index-single-blog.html" class="post-title">
                    <h4>How to become a successful businessman.</h4>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat at vitae, ratione sapiente repellat.</p>
                  <a href="index-single-blog.html" class="btn dream-btn mt-15">Read Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ]
  }
}
