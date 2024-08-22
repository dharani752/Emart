
import Navbar from "../component/Navbar"

import { booksData } from "../data/books";
const Bookspage = () => {
  return (
    <>
    
    <Navbar/>
    <div className="pageSection">
    {booksData.map((item,index)=>{
        return(
            <div key={index}>
                <div className="pageImg" >
                    <img src={item.image}alt=''/>
                    <div className="prodMobile">
                    Name :{item.title} <br/>
                    Author :{item.author}
                </div>
                </div>
                
            </div>
        )
    })}
    </div>
    </>
  )
}

export default Bookspage