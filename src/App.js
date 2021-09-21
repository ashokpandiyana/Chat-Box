import "./App.scss";
import Message from "./Components/Message";
const App = () => {
  const array_values = [
    "Hello",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    "Hi , How R U?",
    "Mmm",
    "Hmm",
    "Eating",
    "Mmm",
    "Watching",
    "Mmm",
    "Sleeping",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
    "Mmm",
  ];
  return (
    <div className="container">
      {array_values.map((message, index) => (
        <Message index={index} message={message} />
      ))}
    </div>
  );
};

export default App;
