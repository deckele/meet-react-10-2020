import React, { useState } from "react";
import "./App.css";
import { Counter } from "./components/counter/counter";

// function App() {
//   const [showCounter, setShowCounter] = useState(true);
//   const [counterVisibility, setCounterVisibility] = useState(true);
//   return (
//     <div className="App">
//       <h1>Welcom to my counter app!</h1>
//       <button onClick={() => setShowCounter((prev) => !prev)}>
//         toggle show counter
//       </button>
//       <button onClick={() => setCounterVisibility((prev) => !prev)}>
//         toggle counter visibility
//       </button>
//       {showCounter ? (
//         <Counter className={counterVisibility ? "" : "hidden"} />
//       ) : null}
//       <footer>My Footer!</footer>
//     </div>
//   );
// }
interface AppProps {}
interface AppState {
  showCounter: boolean;
  counterVisibility: boolean;
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showCounter: true,
      counterVisibility: true,
    };
    this.handleCounterVisibilityToggled = this.handleCounterVisibilityToggled.bind(
      this
    );
  }
  // arrow function - bind this behind the scenes.
  handleShowCounterToggled = () => {
    this.setState({ showCounter: !this.state.showCounter });
  };
  // no arrow function - bind this in constructor.
  handleCounterVisibilityToggled() {
    this.setState({ counterVisibility: !this.state.counterVisibility });
  }
  componentDidMount?(): void {
    console.log("App mount");
  }
  componentDidUpdate?(prevProps: AppProps, prevState: AppState): void {
    if (prevState.counterVisibility !== this.state.counterVisibility) {
    }
  }
  componentWillUnmount?(): void {
    console.log("App will unmount");
  }
  render() {
    return (
      <div className="App">
        <h1>Welcom to my counter app!</h1>
        <button onClick={this.handleShowCounterToggled}>
          toggle show counter
        </button>
        <button onClick={this.handleCounterVisibilityToggled}>
          toggle counter visibility
        </button>
        {this.state.showCounter ? (
          <Counter className={this.state.counterVisibility ? "" : "hidden"} />
        ) : null}
        <footer>My Footer!</footer>
      </div>
    );
  }
}
export default App;
