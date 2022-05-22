import React from 'react'
import { Link } from 'react-router-dom'

export default class NavbarProject extends React.Component {
  // Makes sure that page starts from the top
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <nav className='navbar navbar-default mu-navbar' sticky='top'>
        <div className='container-fluid'>
          {/*  Brand and toggle get grouped for better mobile display */}
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
              aria-expanded='false'
            >
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>

            {/* Text Logo */}
            <Link className='navbar-brand' to='/'>
              Edward
            </Link>

            {/* Image Logo */}
            {/* <a className="navbar-brand" href="#"><img src="assets/images/logo.png"></a> */}
          </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav mu-menu navbar-right'>
              <li>
                <Link to='/'>HOME</Link>
              </li>
              <li>
                <Link to='/'>ABOUT ME</Link>
              </li>
              <li>
                <Link to='/#mu-portfolio'>PROJECTS</Link>
              </li>
              <li>
                <Link to='/#mu-contact'>CONTACT</Link>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </div>
        {/* /.container-fluid */}
      </nav>
    )
  }
}
