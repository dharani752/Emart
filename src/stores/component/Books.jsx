import {booksData} from '../data/books';

const Books = () => {
    let firstfive=booksData.slice(0,6);
  return (
    <>
     
    <div className="Product-data">
    <h2>Books</h2>
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

export default Books