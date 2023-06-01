const Card = (props) => {
  return (
    <div className={`card ${props.bg} ${props.container}`}>
      {props.children}
    </div>
  );
};
export default Card;
