// Write your code here
import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button
          type="button"
          className="button"
          data-testid="hamburgerIconButton"
        >
          .<GiHamburgerMenu className="icon" />
        </button>
      }
      overlayStyle={overlayStyles}
      className="popup-content"
    >
      {close => (
        <>
          <ul className="bg-container">
            <li>
              <Link to="/" className="nav-link">
                <AiFillHome />
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                <BsInfoCircleFill />
                <p>About</p>
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            .<IoMdClose />
          </button>
        </>
      )}
    </Popup>
  </div>
)
export default Header
