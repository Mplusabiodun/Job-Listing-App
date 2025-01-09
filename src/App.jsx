import Header from "./components/Header.jsx";
import "./App.css";
import JobDisplay from "./components/JobDisplay.jsx";
import Search from "./components/Search.jsx";

function App() {
  return (
    <div className="parent_Container">
      <Header />
      <Search />
      <JobDisplay />
    </div>
  );
}

export default App;
