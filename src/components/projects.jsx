import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-2 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/MITM.jpg)'}}>
								</div>
							</div>
							<div className="col-lg-2 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/casting.jpg)'}}>
								</div>
							</div>
							<div className="col-lg-2 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/acoustic.png)'}}>
								</div>
							</div>
							<div className="col-lg-3 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/posterBOY.png)'}}>
								</div>
							</div>
							<div className="col-lg-2 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/splashscreen.png)'}}>
								</div>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
