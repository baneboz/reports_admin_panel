import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Wizzard from "../components/Wizzard.js";
import Spinner from "../components/Spinner.js";
import Error from "../components/Error.js";
import Card from "../components/Card.js";
import Selected from "../components/Selected.js";

export default function Candidate() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState();
  const [candidates, setCandidates] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then(res => res.json())
      .then(candidates => {
        setIsLoaded(true);
        setCandidates(candidates);
        setFilteredResults(candidates);
      })
      .catch(e => {
        setIsLoaded(true);
        setError(
          `Error occured in fetching data. Please check your connection!`
        );
      });
  }, []);

  // function searchItems(e) {
  //   const query = e.target.value;
  //   setSearchInput(query);

  //   let filteredCandidates = filteredResults.filter(d => {
  //     let searchValue = d.name.toLowerCase();
  //     return searchValue.indexOf(e.target.value) !== -1;
  //   });

  //   setCandidates(filteredCandidates);
  // }

  function selectCard(e) {
    console.log("Div clicked", e.target.closest(".card"));
  }

  const cards = candidates.map(candidate => {
    return (
      <Card card={candidate} key={candidate.id} handleClick={selectCard} />
    );
  });

  return (
    <div className="container">
      <Wizzard />
      <Selected />

      <section className="wizzard">
        <input
          type="search"
          placeholder="Search"
          // value={searchInput}
          // onChange={searchItems}
        />

        <div className="cards">{cards}</div>

        <Link to="/company" className="btn btn--link">
          Next
        </Link>
      </section>
    </div>
  );
}
