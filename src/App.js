import "./App.css";
import { createStore } from "redux";
//reducer must have 2 params
//reducer has 2 params state and action

const reducer = (state = {}, action) => {
  if (action.type === "A") {
    return { ...state, A: "i am 'A'" };
  }
  if (action.type === "B") {
    return { ...state, B: "i am B" };
  }

  return { ...state };
};
//creating store
const store = createStore(reducer);

store.subscribe(() => {
  console.log("print 1", store.getState());
});

store.subscribe(() => {
  console.log("print 2", store.getState().A);
});

//without dispatching we'll not be able to print anything
//how many time it'll dispatch those number of time subscriber
//will got notified also able to print
store.dispatch({ type: "A" });
store.dispatch({ type: "something" });
store.dispatch({ type: "B" });

function App() {
  return <div className="App"></div>;
}

export default App;
