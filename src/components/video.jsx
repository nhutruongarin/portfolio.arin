import React, { Component } from 'react'

export default class Video extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
                        <video autoplay="" muted loop="" class="img-responsive" ><source src="images/teaser1_1.mp4" type="video/mp4"/></video>
						<br/>
                        <div className="desc">
							<h3>TEASER M/V PSYCHO</h3>
							<p>Teaser MV dance cover, được thiết kế bằng Premiere Pro.<br />Link full: <a href="https://www.facebook.com/Lossless.club/videos/2547029972178328/">ở đây</a></p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
                        <video autoplay="" muted loop="" class="img-responsive" ><source src="images/Jobscapee.mp4" type="video/mp4"/></video>
						<br/>
                        <div className="desc">
							<h3>JOBSCAPE - APP PROMOTION</h3>
							<p>Video giới thiệu mobile app để nộp dự thi Google Sollution<br />Link full: <a href="https://www.youtube.com/watch?v=T1e8-JKh9Ok">ở đây</a></p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
                        <video autoplay="" muted loop="" class="img-responsive" ><source src="images/vid-baucu.mp4" type="video/mp4"/></video>
						<br/>
                        <div className="desc">
							<h3>MOTION GRAPHIC VIDEO</h3>
							<p>Đây là job freelance dựng video mà em nhận bên ngoài.<br />Link full: <a href="https://www.facebook.com/144429315663250/videos/513372026711608">ở đây</a></p>
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