import {acData} from '../data/ac';
import '../../App.css';
const Ac = () => {
    let firstfive=acData.slice(0,6);
  return (
    <>
    
    <div className="Product-data">
    <h2>Ac</h2>
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

export default Ac