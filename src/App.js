import axios from "axios";
import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import NavBar from "./components/nav-bar/nav-bar";
// import { robots } from "./utils/robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const data = response.data;
      this.setState({
        robots: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <NavBar searchChange={this.onSearchChange} />
        <main>
          <CardList robots={filteredRobots} />
        </main>
      </div>
    );
  }
}

export default App;
