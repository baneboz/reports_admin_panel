import { Link } from "react-router-dom";

export default function Copmany() {
  return (
    <>
      <h1>Select Copmany</h1>;
      <Link to="/details" className="btn btn--link">
        Fill Report Details
      </Link>
    </>
  );
}
