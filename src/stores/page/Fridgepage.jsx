import Navbar from "../component/Navbar";
import { fridgeData } from "../data/fridge";

const Fridgepage = () => {
  return (
    <>
    
    <Navbar/>
    <div className="pageSection">
    {fridgeData.map((item,index)=>{
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

export default Fridgepage