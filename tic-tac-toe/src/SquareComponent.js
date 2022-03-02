import "./App.css";

function SquareComponent(props) {
  const classes = props.className ? `${props.className}square` : "square";
  return <span className={classes}>x</span>;
}

export default SquareComponent;
