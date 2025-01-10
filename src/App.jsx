import { useState } from "react";

import Header from "./components/Header.jsx";
import JobDisplay from "./components/JobDisplay.jsx";
import Search from "./components/Search.jsx";
import data from "../data.json";

import "./App.css";

function App() {
  const [jobListing, setJobListing] = useState(data);

  function FrontendListHandler() {
    const frontendFilteredList = jobListing.filter((skill) =>
      skill.role.includes("Frontend")
    );
    setJobListing(frontendFilteredList);
  }
  function cssJavascriptHandler(interest) {
    const cssJavascript = jobListing.filter((skill) =>
      skill.languages.includes(interest)
    );
    setJobListing(cssJavascript);
  }
  function clearHandler() {
    setJobListing(data);
  }
  return (
    <div className="parent_Container">
      <Header
        onFrontendFilter={FrontendListHandler}
        onCssJavasriptFilter={cssJavascriptHandler}
        onClearFilter={clearHandler}
      />
      <Search
        onFrontend={FrontendListHandler}
        onCssJavasript={cssJavascriptHandler}
        onClear={clearHandler}
      />
      <JobDisplay jobListing={jobListing} />
    </div>
  );
}

export default App;
