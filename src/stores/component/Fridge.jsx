import { fridgeData } from "../data/fridge";

const Fridge = () => {
    let firstfive=fridgeData.slice(0,6);
  return (
    <>
    
    <div className="Product-data">
    <h2>Fridge</h2>
        {firstfive.map((item,index)=>{
            return(
               <div className="image-box"key={index}>
                <img  src={item.image} alt='computer-image'/>
               </div> 
            )
        }) }
    
    </div>
    </>
  )
}

export default Fridge