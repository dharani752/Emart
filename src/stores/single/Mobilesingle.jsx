
import Navbar from "../component/Navbar";
import { mobileData } from "../data/mobiles";
import { useParams } from "react-router-dom";

const Mobilesingle = () => {
  const { id } = useParams(); // Destructure the id parameter from useParams
  const product = mobileData.find(item => item.id === id); // Ensure correct comparison

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
     <Navbar/>
      <div className="ind-page">
       <div className="ind-image">
            <img src={product.image} alt=''/>
       </div>
       <div className="ind-Section">
       <div className="ind-model">
        <h3>{product.model}</h3>
       </div>
       <div className="ind-company">
        <h3>{product.company}</h3>
       </div>
       <div className="ind-price">
        <h1>{product.price}</h1>
       </div>
        <div className="ind-des">
            <h3>{product.description}</h3>
        </div>
        <button>Add to cart</button>
      </div></div>
      
    </>
  );
}

export default Mobilesingle;
