
import Navbar from '../component/Navbar';
import { kitchenData } from '../data/kitchen';
const Kitchenpage = () => {
  return (
    <>
    
    <Navbar/>
    <div className="pageSection">
    {kitchenData.map((item,index)=>{
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

export default Kitchenpage