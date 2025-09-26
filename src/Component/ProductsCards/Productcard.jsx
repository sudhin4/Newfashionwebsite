import image from '../../assets/Images/Women1.jpg'
import { CiHeart } from "react-icons/ci";
import '../ProductsCards/Productcard.css'
import imagedata from '../../Data';
import { useState } from 'react';
import { FaHeart } from "react-icons/fa";

function ProductCard({image}){

    const [islike ,setlike] = useState(false);
    
    return(
        <>
        <div className="fullcontentdivproductcard">
            <div className="imagesection"> 
                <img src={image} alt=""  className='imagefroproductcard'/>
                
            </div>
            <div className='detailssectionproductcardd'>
                <div className='priceandcontent'>
                    <h2 className='headingforproductcardd'>Dress</h2>
                <h3 className='priceforproductcardd'>₹450.99</h3>
                </div>
                <div className='likebuttondivv' onClick={()=>setlike(!islike)}>
                    {islike?<FaHeart className='iconfroproductcard isredd' /> :<CiHeart className='iconfroproductcard isnormal' />}
                    
                </div>
                
            </div>
        </div>
        
        
        </>
    )
}

export default ProductCard;