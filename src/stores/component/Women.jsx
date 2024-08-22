import {womanData} from '../data/woman';

const Women = () => {
    let firstfive=womanData.slice(0,6);
  return (

    <>
    
    <div className="Product-data">
    <h2>Women</h2>
    
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

export default Women