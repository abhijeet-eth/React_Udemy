import classes from "./Card.module.css";

function Card(props) {
  return (
    <>
      <div className={classes.card}>{props.children}</div>
    </>
  );
}

export default Card;

//PROPS.CHILDREN
// props.children is a special type of props that every component receive by default. In children
// always holds the content which is between opening and closing tag, as seen in MeetupItem.js
