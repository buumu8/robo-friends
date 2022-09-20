import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import CardList from "./components/card-list/card-list";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import NavBar from "./components/nav-bar/nav-bar";
import { setSearchField, requestRobots } from "./actions";

function App(props) {
  const { searchField = "", setSearchField, robots, setRobots, loading } = props;

  useEffect(() => {
    setRobots();
  }, []);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <NavBar searchChange={(event) => setSearchField(event.target.value)} />
      <main>
        <ErrorBoundary>
          <CardList robots={filteredRobots} loading={loading} />
        </ErrorBoundary>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchField: state.search.searchField,
  robots: state.robots.robots,
  loading: state.robots.isPending,
});
const mapDispatchToProps = (dispatch) => ({
  setSearchField: (event) => dispatch(setSearchField(event)),
  setRobots: () => dispatch(requestRobots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
