import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__title">
          <h1>
            Reports <br />
            Administration
          </h1>
          <Link to="/" className="btn btn--link">
            Reports
          </Link>
          <Link to="/candidate" className="btn btn--link">
            Create reports
          </Link>
        </div>
      </div>
    </header>
  );
}
