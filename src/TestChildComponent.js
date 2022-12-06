import "./TestChildComponent.scss";

const TestChildComponent = ({children}) => {
  return (
    <div className="TestChildComponent">
      <h2>TestChildComponent Children: {children}</h2>
    </div>
  );
};

export default TestChildComponent;
