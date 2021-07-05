import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
          <br />
          <br />
          <br />
          <br />
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/ava.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Trương Võ <br /> Trúc Như</a></h1>           
              <br />
              <span className="email"> Faculty of Computer Networks and Communications <br />University of Information Technology (UIT) - VNUHCM</span>
            </div>
            <br />
            <br />
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/nhutrg.arin/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/nhutrg.arinn/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
              </ul>
            </nav>
            <br />
            <br />
            <div className="colorlib-footer">
              <p><small>
                  "Cũng giống như bóng đèn, nếu bạn không có cách tỏa sáng cho riêng mình, bạn sẽ bị vứt bỏ..."
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
