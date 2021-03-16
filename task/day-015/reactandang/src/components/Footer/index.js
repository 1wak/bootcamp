import "./Footer.css";

function Footer() {
  return (
    <footer className="mt-4">
      <nav>
        <div className="row">
          <ul className="col-6 col-md-3">
            <h3>About</h3>
            <li>
              <a href="/">How Lakerja Works</a>
            </li>
            <li>
              <a href="/">Interview Tips</a>
            </li>
            <li>
              <a href="/">Lakerja Plus</a>
            </li>
            <li>
              <a href="/">Lakerja Now</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">About Lakerja</a>
            </li>
          </ul>
          <ul className="col-6 col-md-3">
            <h3>About</h3>
            <li>
              <a href="/">How Lakerja Works</a>
            </li>
            <li>
              <a href="/">Interview Tips</a>
            </li>
            <li>
              <a href="/">Lakerja Plus</a>
            </li>
            <li>
              <a href="/">Lakerja Now</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">About Lakerja</a>
            </li>
          </ul>
          <ul className="col-6 col-md-3">
            <h3>About</h3>
            <li>
              <a href="/">How Lakerja Works</a>
            </li>
            <li>
              <a href="/">Interview Tips</a>
            </li>
            <li>
              <a href="/">Lakerja Plus</a>
            </li>
            <li>
              <a href="/">Lakerja Now</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">About Lakerja</a>
            </li>
          </ul>
          <ul className="col-6 col-md-3">
            <h3>About</h3>
            <li>
              <a href="/">How Lakerja Works</a>
            </li>
            <li>
              <a href="/">Interview Tips</a>
            </li>
            <li>
              <a href="/">Lakerja Plus</a>
            </li>
            <li>
              <a href="/">Lakerja Now</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">About Lakerja</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="d-flex justify-content-between align-content-center">
        <div>
          <span>&copy; 2021 Lakerja.com | All Right Reserved</span>
        </div>
        <div className="d-flex">
          <div className="btn-group dropup">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Language
            </button>
            <div className="dropdown-menu">
              <p>
                <a href="/">English</a>
              </p>
              <p>
                <a href="/">Indonesia</a>
              </p>
              <p>
                <a href="/">Filipino</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
