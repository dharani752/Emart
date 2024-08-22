import {kitchenData} from '../data/kitchen'

const Kitchen = () => {
  let firstfive=kitchenData.slice(0,6);
  return (
    <>
   
    <div className="Product-data">
    <h2>Kitchen</h2>
        {firstfive.map((item,index)=>{
            return(
               <div className="image-box"key={index}>
                <img  src={item.image} alt='mobile-image'/>
               </div> 
            )
        }) }
    
    </div>
    </>
    
  )
  
}

export default Kitchen;