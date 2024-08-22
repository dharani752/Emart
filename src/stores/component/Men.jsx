
import {menData} from '../data/men'
const Men = () => {
    let firstfive=menData.slice(0,6);
  return (
    <>
    
    <div className="Product-data">
    <h2>Men</h2>
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

export default Men