import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Student of University of Information Technology (UIT) - VNUHCM <span>2017 - present</span></h2>
                        <p>Faculty of Computer Networks and Communications.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at VNG Corporation <span>04/2019 - 10/2019</span></h2>
                        <p>I recently have joined the VNG Corporation as a Graphic Designer.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Freelance Designer and Video Editor <span>2020 - present</span></h2>
                        <p>I get a lot of freelance work through friends, former colleagues and sometimes on online job search platforms.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at KGP Group <span>09/2020 - present</span></h2>
                        <p>I recently have joined the VNG Corporation as a UI/UX Designer.
                        <br />To design the UI architecture, interface and interaction flow applications.
                        <br />Testing UI elements such as banners, page layouts, page designs, page flows, and target links for landing pages.
                        <br />Research and conduct user interviews and prepare material in support of contributing insights for the project discussion and ideation.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>The 2021 Google Solution Challenge (contest) <span>01/2021 - 04/2021</span></h2>
                        <p>I recently have joined my team as a UI/UX Designer - Jobscape team.
                        <br />To design the UI architecture, interface and interaction flow applications.
                        <br />Testing UI elements such as banners, page layouts, page designs, page flows, and target links for landing pages.</p> 
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
