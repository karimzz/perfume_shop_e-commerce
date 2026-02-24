import "./NavBar.css"
import "./NavBar1.css"
import { CiHeart, CiSearch } from "react-icons/ci";
import logo from "./../../../assets/logo.png"
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";





const NavBar = () => {
  return (
    <nav>
      <div className="top">
          <div className="search-bar">
            <input type="text" placeholder="Hey, what are you looking for?" />
            <button className="search-icon">
              <CiSearch />
            </button>
          </div>
          <div className="logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>

          <div className="links">
            <a href="#" className="link">
              <CiUser />
              <p>My Account</p>
            </a>
            <a href="#" className="link">
              <CiHeart />

              <p>Wishlist</p>
            </a>
            <a href="#" className='link' >
              <IoBagOutline />
              <p>3 items</p>
            </a>
          </div>
          
      </div>
      
      <div className="bottom">
        <div className="container">
          <div className="sub-sections">
            <a href="" className="section">PERFUMES</a>
            <a href="" className="section">BRANDS</a>
            <a href="" className="section">SKINCARE</a>
            <a href="" className="section">MAKEUP</a>
            <a href="" className="section">HAIRCARE</a>
            <a href="" className="section"> AROMATHERAPY</a>
            <a href="" className="section"> CANDLES</a>
            <a href="" className="section"> GIFTS</a>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default NavBar
