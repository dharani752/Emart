import {computerData} from '../data/computers';
const Computers = () => {
    let firstfive=computerData.slice(0,6);
  return (
   
    <>
    
    <div className="Product-data">
    <h2>Computer</h2>
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

export default Computers;