function Header() {
  return (
    <header>
      <div className="logo">
        <img src="./src/assets/icons/mountain.svg" className="mountain" alt="Mountain logo" />
        <span>YOO</span>PIN
      </div>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Extensions</a></li>
          <li><a href="#">Tutorials</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>

      <div className="social">
        <img src="./src/assets/icons/twitter.svg" className="twitter" alt="Twitter" />
        <img src="./src/assets/icons/facebook.svg" className="facebook" alt="Facebook" />
        <img src="./src/assets/icons/google-plus.svg" className="googleplus" alt="Google Plus" />
        <img src="./src/assets/icons/pinterest.svg" className="pinterest" alt="Pinterest" />
      </div>
    </header>
  );
}

export default Header;
