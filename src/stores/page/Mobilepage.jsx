import Navbar from "../component/Navbar";
import { mobileData } from "../data/mobiles";
import { Link } from 'react-router-dom';
import {useState} from 'react-router-dom'

const Mobilepage = () => {
  const [selectedProduct,setSelectedProduct]=useState([]);
  function handlefliter(data){

  }
  return (
    <>
      <Navbar />
      <div className="flierss">
        {mobileData.map((phone,index)=>{
          return (
            <input type='checkbox' key={index}checked={selectedProduct.includes(phone.company)} 
            onChange={()=>{handlefliter(phone.company)}}/>

          )

        })}
      </div>
      <div className="pageSection">
        {mobileData.map((item, index) => {
          return (
            <div key={index}>
              <div className="pageImg">
                <Link to={`/mobile/${item.id}`}>
                  <img src={item.image} alt='' />
                </Link>
                <div className="prodMobile">
                  Model: {item.model} <br />
                  Company: {item.company}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Mobilepage;
