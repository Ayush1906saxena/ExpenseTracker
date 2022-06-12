import "./Card.css";

function Card(props) {
  // here we are adding two classes to our component, one is card class and then its own class
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
