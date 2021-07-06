import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">MY PROJECT</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-2 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<video autoplay="" muted loop="" class="img-responsive" ><source src="images/petlover.mp4" type="video/mp4"/></video>
						<div className="desc">
							<span><small>2019 </small> | <small> UI app by Adobe Xd </small></span>
							<h3>PETLOVER - Specialized projects</h3>
						</div>
					</div>
					</div>

					<div className="col-md-2 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<video autoplay="" muted loop="" class="img-responsive" ><source src="images/JobscapeUI_1.mp4" type="video/mp4"/></video>
						<div className="desc">
							<span><small>2021 </small> | <small> UI app by Adobe Xd </small></span>
							<h3>JOBSCAPE - The Google Sollution Challenge (contest)</h3>
						</div>
					</div>
					</div>

					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<video autoplay="" muted loop="" class="img-responsive" ><source src="images/REshare_1.mp4" type="video/mp4"/></video>
						<div className="desc">
							<span><small>2021 </small> | <small> Web design by Adobe Xd </small></span>
							<h3>RESHARE - New life for old stuff <a href="https://reshare.vn/">   -   https://reshare.vn/ </a></h3>
						</div>
					</div>
					</div>

					
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<video autoplay="" muted loop="" class="img-responsive" ><source src="images/Satsco.mp4" type="video/mp4"/></video>
						<div className="desc">
							<span><small>2021 </small> | <small> Web design by Adobe Xd </small></span>
							<h3>SATSCO - Book website <a href="https://web-prod.vila.vn">   -   https://web-prod.vila.vn/ </a></h3>
						</div>
					</div>
					</div>
				</div>
			</div>
			</section>
      </div>
    )
  }
}
