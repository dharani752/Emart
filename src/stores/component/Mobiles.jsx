import {mobileData} from '../data/mobiles';
const Mobiles = () => {
    let firstfive=mobileData.slice(0,6);
  return (
   
    <>
    
    <div className="Product-data">
    <h2>Mobiles</h2>
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

export default Mobiles