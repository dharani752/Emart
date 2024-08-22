import Navbar from "../component/Navbar";
import { watchData } from "../data/watch";

const Watchpage = () => {
  return (
    <>
    
    <Navbar/>
    <div className="pageSection">
    {watchData.map((item,index)=>{
        return(
            <div key={index}>
                <div className="pageImg" >
                    <img src={item.image}alt=''/>
                    <div className="prodMobile">
                    Model :{item.model} <br/>
                    Brand :{item.brand}
                </div>
                </div>
                
            </div>
        )
    })}
    </div>
    </>
  )
}

export default Watchpage