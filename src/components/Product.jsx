import Button from "./Button";
import {BsFillCartPlusFill} from "react-icons/bs"
import {AiFillEdit, AiFillDelete } from "react-icons/ai"

export default function Product({
  id,
  name,
  image,
  price,
  category,
  setEditedProduct,
}) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <section>
        <h3>
          {"(" + id + ")"} {name}
        </h3>
        <p>
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          })}{" "}
          <br />
          {"(" + category + ")"}
        </p>
        <div>
          <button className="button">
            <BsFillCartPlusFill />
            
          </button>
          <button className="button">
            <AiFillEdit />
          </button>
          <button className="button">
            <AiFillDelete />
          </button>
        </div>
      </section>
    </div>
  );
}
