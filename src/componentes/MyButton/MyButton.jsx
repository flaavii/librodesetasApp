import "./mybutton.css";

function MyButton(props) {
    console.log(props);
  
    return (
      <button className="button">
        {props.children}
      </button>
    );
  }
  
  export default MyButton;