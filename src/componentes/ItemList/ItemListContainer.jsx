import Item from "./Item";
import Img1 from "../../img/goldenTeacher.webp"
import Img2 from "../../img/b+.webp"

function ItemListContainer(props) {
  return (
    <div>
      <h1>{props.greeting}</h1>
      <Item
        img= {Img1}
        title="Golden Teacher"
        time={10}
      />
      <Item
        img= {Img2}
        title="B+"
        time={6}
      />
    </div>
  );
}

export default ItemListContainer;
