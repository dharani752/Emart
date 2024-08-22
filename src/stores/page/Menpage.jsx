import Navbar from "../component/Navbar";
import { menData } from "../data/men";

const Menpage = () => {
  return (
    <>
    
    <Navbar/>
    <div className="pageSection">
    {menData.map((item,index)=>{
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

export default Menpage