
import Navbar from "../component/Navbar";
import { computerData } from "../data/computers";

const Computerspage = () => {
  return (
    <>
    
    <Navbar/>
    <div className="pageSection">
    {computerData.map((item,index)=>{
        return(
            <div key={index}>
                <div className="pageImg" >
                    <img src={item.image}alt=''/>
                    <div className="prodMobile">
                    Model :{item.model} <br/>
                    Company :{item.company}
                </div>
                </div>
                
            </div>
        )
    })}
    </div>
    </>
  )
}

export default Computerspage