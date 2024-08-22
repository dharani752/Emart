import Navbar from "../component/Navbar";
import { womanData } from "../data/woman";

const Womenpage = () => {
  return (
    <>
    
    <Navbar/>
    <div className="pageSection">
    {womanData.map((item,index)=>{
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

export default Womenpage