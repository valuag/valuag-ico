import { Component, State, Prop } from "@stencil/core";
import 'rss-parser/dist/rss-parser.min';

declare global {
  interface Window {
    RSSParser: any;
  }
}

interface BlogPost {
  title: string;
  creator: string;
  link: string;
  'content:encoded': string;
  isoDate: string;
}

@Component({
  tag: 'app-blog-area',
  styleUrl: 'app-blog-area.scss'
})
export class AppBlogArea {
  @State() blogPosts: BlogPost[];
  @Prop({ context: 'isServer' }) isServer: boolean;
  async componentWillLoad() {
    if (!this.isServer) {
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
      const parser = new window.RSSParser();
      const feed: {
        title: string,
        items: BlogPost[]
      } = await parser.parseURL(CORS_PROXY + 'https://medium.com/feed/valuag');
      this.blogPosts = feed.items;
    }
  }
  decodeContent(contentEncoded: string) {
    return contentEncoded.replace('<![CDATA[', '').replace(']]>', '');
  }
  getDescriptionAndImage(content: string) {
    const domParser = new DOMParser();
    const doc = domParser.parseFromString(content, 'text/html');
    const firstParagraph = doc.getElementsByTagName('p').item(0).innerHTML;
    const description = firstParagraph.substr(0, 250) + '...';
    const firstImage = doc.getElementsByTagName('img').item(0).src;
    return {
      description,
      image: firstImage
    };
  }
  formatDate(isoDate: string) {
    const date = new Date(isoDate);
    return date.toLocaleDateString();
  }
  renderBlogPosts() {
    return this.blogPosts.map(blogPost => {
      const { description, image } = this.getDescriptionAndImage(this.decodeContent(blogPost["content:encoded"]));
      return <div class="col-12 col-md-6 col-lg-4">
        <div class="single-blog-area wow fadeInUp" data-wow-delay="0.2s">
          <div class="blog_thumbnail">
            <img src={image} alt="" />
          </div>
          <div class="blog-content">

            <div class="post-meta mt-20">
              <p>By <a href="#" class="post-author">{blogPost.creator}</a> <a href="#">{this.formatDate(blogPost.isoDate)}</a> <a href="#" class="post-comments">7 comments</a></p>
            </div>
            <a href="index-single-blog.html" class="post-title">
              <h4>{blogPost.title}</h4>
            </a>
            <p>{description}</p>
            <a href={blogPost.link} class="btn dream-btn mt-15" target="blank">Read Details</a>
          </div>
        </div>
      </div>
    })
  }
  render() {
    return this.blogPosts && (
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

            {this.renderBlogPosts()}

          </div>
        </div>
      </section>
    )
  }
}
