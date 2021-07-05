import React, { Component } from 'react'
import { ImEnlarge2, ImMagicWand, ImFilm } from "react-icons/im";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p></p>
                    <p></p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i><ImEnlarge2></ImEnlarge2></i>
                </span>
                <div className="desc">
                    <h3>UI/UX DESIGNER</h3>
                    <p>I use Adobe XD, Figma for my Web/Mobile projects!</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i><ImMagicWand></ImMagicWand></i>
                </span>
                <div className="desc">
                    <h3>GRAPHIC DESIGNER</h3>
                    <p>As coming from a designer, I'm good at Photoshop, Illustrator</p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i><ImFilm></ImFilm></i>
                </span>
                <div className="desc">
                    <h3>VIDEO EDITOR</h3>
                    <p>I am proficient in Adobe Premiere Pro, Adobe After Effect!</p>
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
