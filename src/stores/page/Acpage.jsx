
import Navbar from "../component/Navbar"
import { acData } from "../data/ac"
const Acpage = () => {
  return (
    <>
    
    <Navbar/>
    <div className="pageSection">
    {acData.map((item,index)=>{
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
   

export default Acpage