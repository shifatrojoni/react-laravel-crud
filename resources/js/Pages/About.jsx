import Nav from '@/Components/Nav'
import React from 'react'

export default function About() {
  return (
    <>
      <Nav/>
  {/* search area */}
  <div className="search-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <span className="close-btn"><i className="fas fa-window-close" /></span>
          <div className="search-bar">
            <div className="search-bar-tablecell">
              <h3>Search For:</h3>
              <input type="text" placeholder="Keywords" />
              <button type="submit">Search <i className="fas fa-search" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end search arewa */}
  {/* breadcrumb-section */}
  <div className="breadcrumb-section breadcrumb-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <div className="breadcrumb-text">
            <p>We sale fresh fruits</p>
            <h1>About Us</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end breadcrumb section */}
  {/* featured section */}
  <div className="feature-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="featured-text">
            <h2 className="pb-3">Why <span className="orange-text">Fruitkha</span></h2>
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                <div className="list-box d-flex">
                  <div className="list-icon">
                    <i className="fas fa-shipping-fast" />
                  </div>
                  <div className="content">
                    <h3>Home Delivery</h3>
                    <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                <div className="list-box d-flex">
                  <div className="list-icon">
                    <i className="fas fa-money-bill-alt" />
                  </div>
                  <div className="content">
                    <h3>Best Price</h3>
                    <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                <div className="list-box d-flex">
                  <div className="list-icon">
                    <i className="fas fa-briefcase" />
                  </div>
                  <div className="content">
                    <h3>Custom Box</h3>
                    <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="list-box d-flex">
                  <div className="list-icon">
                    <i className="fas fa-sync-alt" />
                  </div>
                  <div className="content">
                    <h3>Quick Refund</h3>
                    <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end featured section */}
  {/* shop banner */}
  <section className="shop-banner">
    <div className="container">
      <h3>December sale is on! <br /> with big <span className="orange-text">Discount...</span></h3>
      <div className="sale-percent"><span>Sale! <br /> Upto</span>50% <span>off</span></div>
      <a href="shop.html" className="cart-btn btn-lg">Shop Now</a>
    </div>
  </section>
  {/* end shop banner */}
  {/* team section */}
  <div className="mt-150">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <div className="section-title">
            <h3>Our <span className="orange-text">Team</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-team-item">
            <div className="team-bg team-bg-1" />
            <h4>Jimmy Doe <span>Farmer</span></h4>
            <ul className="social-link-team">
              <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-team-item">
            <div className="team-bg team-bg-2" />
            <h4>Marry Doe <span>Farmer</span></h4>
            <ul className="social-link-team">
              <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
          <div className="single-team-item">
            <div className="team-bg team-bg-3" />
            <h4>Simon Joe <span>Farmer</span></h4>
            <ul className="social-link-team">
              <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end team section */}
  {/* testimonail-section */}
  <div className="testimonail-section mt-80 mb-150">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1 text-center">
          <div className="testimonial-sliders">
            <div className="single-testimonial-slider">
              <div className="client-avater">
                <img src="assets/img/avaters/avatar1.png" alt />
              </div>
              <div className="client-meta">
                <h3>Saira Hakim <span>Local shop owner</span></h3>
                <p className="testimonial-body">
                  " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                </p>
                <div className="last-icon">
                  <i className="fas fa-quote-right" />
                </div>
              </div>
            </div>
            <div className="single-testimonial-slider">
              <div className="client-avater">
                <img src="assets/img/avaters/avatar2.png" alt />
              </div>
              <div className="client-meta">
                <h3>David Niph <span>Local shop owner</span></h3>
                <p className="testimonial-body">
                  " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                </p>
                <div className="last-icon">
                  <i className="fas fa-quote-right" />
                </div>
              </div>
            </div>
            <div className="single-testimonial-slider">
              <div className="client-avater">
                <img src="assets/img/avaters/avatar3.png" alt />
              </div>
              <div className="client-meta">
                <h3>Jacob Sikim <span>Local shop owner</span></h3>
                <p className="testimonial-body">
                  " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                </p>
                <div className="last-icon">
                  <i className="fas fa-quote-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end testimonail-section */}
  {/* logo carousel */}
  <div className="logo-carousel-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="logo-carousel-inner">
            <div className="single-logo-item">
              <img src="assets/img/company-logos/1.png" alt />
            </div>
            <div className="single-logo-item">
              <img src="assets/img/company-logos/2.png" alt />
            </div>
            <div className="single-logo-item">
              <img src="assets/img/company-logos/3.png" alt />
            </div>
            <div className="single-logo-item">
              <img src="assets/img/company-logos/4.png" alt />
            </div>
            <div className="single-logo-item">
              <img src="assets/img/company-logos/5.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end logo carousel */}
  {/* footer */}
  <div className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="footer-box about-widget">
            <h2 className="widget-title">About us</h2>
            <p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-box get-in-touch">
            <h2 className="widget-title">Get in Touch</h2>
            <ul>
              <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
              <li>support@fruitkha.com</li>
              <li>+00 111 222 3333</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-box pages">
            <h2 className="widget-title">Pages</h2>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Shop</a></li>
              <li><a href="news.html">News</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-box subscribe">
            <h2 className="widget-title">Subscribe</h2>
            <p>Subscribe to our mailing list to get the latest updates.</p>
            <form action="index.html">
              <input type="email" placeholder="Email" />
              <button type="submit"><i className="fas fa-paper-plane" /></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end footer */}
  {/* copyright */}
  <div className="copyright">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <p>Copyrights © 2019 - <a href="https://imransdesign.com/">Imran Hossain</a>,  All Rights Reserved.<br />
            Distributed By - <a href="https://themewagon.com/">Themewagon</a>
          </p>
        </div>
        <div className="col-lg-6 text-right col-md-12">
          <div className="social-icons">
            <ul>
              <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-linkedin" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-dribbble" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end copyright */}


    </>
  )
}
