import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/png-title.png'
import facebook from '../img/social/facebook-blue.svg'
import officialLogo from '../img/logo_white.svg'


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent has-background-black has-text-white-ter"
        role="navigation"
        aria-label="main-navigation"
        style ={{ backgroundColor: '#080808', width: '100%'}}
        //style ={{ backgroundColor: 'white', width: '100%'}}
      >
        <div className="container">
          <div className="navbar-brand">
          <Link to="/" title="Logo">
          <img src={officialLogo} alt="Kaldi" style={{ width: '80px', height: '80px' }} />
          </Link>
            <Link to="/" className="navbar-item" title="Home">
              <h1 style={{fontSize:`12px`, textAlign: `center`, paddingRight:`50px`, textDecorationColor: 'white'}}>
                Canterbury PNG <br/>Wantoks Community Ltd
              </h1>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass} has-background-black has-text-white-ter`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                Who We Are
              </Link>
              <Link className="navbar-item" to="/committee">
                Our Committee
              </Link>
              <Link className="navbar-item" to="/resources">
                Resources
              </Link>
              <Link className="navbar-item" to="/blog">
                Latest News
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact Us
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
            <a
                className="navbar-item"
                href="https://www.facebook.com/groups/1009188782514248/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={facebook} alt="Facebook" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
