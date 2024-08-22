import {watchData} from '../data/watch'

const Watch = () => {
    let firstfive=watchData.slice(0,6);
  return (
    <>
    
    <div className="Product-data">
    <h2>Watch</h2>
    
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

export default Watch