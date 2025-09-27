import '../ProductPage/ProductPage.css'
import imageff from '../../assets/Images/Women6.jpg'
import { useState } from 'react';
import { BsTruck } from "react-icons/bs";

function ProductPage({imagee}){

    const [iss,sets] = useState(true);
    const [ism,setm] = useState(false);
    const [isx,setx] = useState(false);
    const [isxl,setxl] = useState(false);

    function sizeclick(value){
        if(value=='s'){
            sets(true)
            setm(false)
            setx(false)
            setxl(false)
        }
        else if(value=='m'){
            sets(false)
            setm(true)
            setx(false)
            setxl(false)
        }
        else if(value=='x'){
            sets(false)
            setm(false)
            setx(true)
            setxl(false)
        }
        else if(value=='xl'){
            sets(false)
            setm(false)
            setx(false)
            setxl(true)
        }
    }
    return(
        <>
        <div className='ProductpagecomponentDivv'>
            <div className='imagesectionandfirstdivv'>
                <img src={imagee} className='imageforproductpageee' alt="" />
            </div>
            <div className='productpagecontentsection'>
                <h2 className='nameforproductpagesectionname'>Cotton Dress</h2>
                <h3 className='priceforproductsection'>₹450.99</h3>
                <div className='freedeliverydivv'>
                    <BsTruck className='iconfordelivery'/>
                    <h3 className='freedeliveryforfree'>All over India Delivery available</h3>
                </div>
                <div className='sizechartproductpage'>
                    <h2 className={iss? "btnforsize click" :'btnforsize normal'} onClick={()=>sizeclick('s')}>S</h2>
                    <h2 className={ism? "btnforsize click" :'btnforsize normal'} onClick={()=>sizeclick('m')} >M</h2>
                    <h2 className={isx? "btnforsize click" :'btnforsize normal'} onClick={()=>sizeclick('x')}>L</h2>
                    <h2 className={isxl? "btnforsize click" :'btnforsize normal'} onClick={()=>sizeclick('xl')}>XL</h2>
                </div>
                <div className='buttonsectionforproductpage'>
                    <button className='addtobagbtnproductpage addtobag'>Add to Bag</button>
                    <button className='addtobagbtnproductpage ordernow'>Order Now</button>
                </div>

                <div className='discriptiondivvsection'>
                    <div className='firstdiscription'>
                        <h2 className='labelforheadingg'>Fit</h2>
                        <h2 className='contentforlabell lelele'>Regular Fit </h2>
                    </div>
                    <div className='firstdiscription'>
                        <h2 className='labelforheadingg'>Dress code</h2>
                        <h2 className='contentforlabell anana'>#348849G443 </h2>
                    </div>
                    <div className='firstdiscription'>
                        <h2 className='labelforheadingg'>Material</h2>
                        <h2 className='contentforlabell leleel'>Cotton  </h2>
                    </div>
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default ProductPage;