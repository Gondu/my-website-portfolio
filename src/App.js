import TestChildComponent from "./TestChildComponent";
import TestChildOfChildComponent from "./TestChildOfChildComponent";

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <TestChildComponent>
        <TestChildOfChildComponent />
      </TestChildComponent>
    </div>
  );
}

export default App;
