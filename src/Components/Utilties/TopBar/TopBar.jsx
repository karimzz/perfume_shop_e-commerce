
import "./tobar.css"

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="languages">
        <div className="concurancy">
            <p>USD</p>
            <span><i className="fa-solid fa-angle-down"></i></span>
        </div>
        <div className="lang">
            <p>English</p>
            <span><i className="fa-solid fa-angle-down"></i></span>
        </div>
      </div>

      <div className="titles">
        <h5>🔥 Only 11 days left until VALENTINE'S DAY! 🔥</h5>
      </div>

      <div className="contactus">
        <p><a href="#">Help & Information</a></p>
        <p><a href="#">Connect with us</a></p>
      </div>
    </div>
  )
}

export default TopBar
