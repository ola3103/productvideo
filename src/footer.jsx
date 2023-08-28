const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer--box">
        <div className="footer--side--1">
          <img src="logo.png" className="footer--side--1--1" />
          <p className="footer--side--1--2">
            Learn from more than 100+ carefully selected videos of companies
            that creat engaging, shareable videos that not only boost brand
            awareness but also convert customers.
          </p>
          <img src="top-post-badge.svg" className="footer--side--1--3" />
          <p className="footer--side--1--4">
            Made with <span>&hearts;</span> by Ola
          </p>
        </div>
        <ul className="footer--side--2 single--footer--box">
          <li className="footer--list--head">Company</li>
          <li className="single--footer--list">
            <a href="#">Features</a>
          </li>
          <li className="single--footer--list">
            <a href="#">Pricing</a>
          </li>
          <li className="single--footer--list">
            <a href="#">Terms</a>
          </li>
          <li className="single--footer--list">
            <a href="#">Privacy</a>
          </li>
        </ul>
        <ul className="footer--side--3 single--footer--box">
          <li className="footer--list--head">Support</li>
          <li className="single--footer--list">
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <ul className="footer--side--4 single--footer--box">
          <li className="footer--list--head">About</li>
          <li className="single--footer--list">+234 80 0000 0000</li>
          <li className="single--footer--list">Lagos, Nigeria</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
