function Button(props) {
  console.log("button rendering");
  return <button>{props.title}</button>;
}

function SmallButton({ title, color }) {
  let style_obj = {
    color: "yellow",
    backgroundColor: "red",
  };
  //   return <button>{"small"}</button>;
  return (
    <button className={color} style={style_obj}>
      {title}
    </button>
  );
}
function BigButton(props) {
  return <button>{"big"}</button>;
}

export default Button;
export { SmallButton, BigButton };
