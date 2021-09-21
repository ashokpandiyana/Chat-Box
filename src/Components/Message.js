import "./Message.scss";
const Message = ({ index, message }) => {
  return (
    <div className={`message ${index % 2 ? "odd" : "even"}`}>{message}</div>
  );
};

export default Message;
