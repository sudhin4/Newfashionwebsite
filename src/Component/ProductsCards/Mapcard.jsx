import imagedata from "../../Data";
import imageee from "../../Data";

import ProductCard from "./Productcard";
import '../ProductsCards/Productcard.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Mapcard({Data , getimage}){

    const value = Data;
    
    console.log(value,"the vlaue")
 const [isimage,setimage] = useState([imageee.mens])

 console.log(imageee.mens,"the image data")


 useEffect(()=>{
    if(value=="Mens"){
        setimage(imageee.mens)
    }else if(value=="Womens"){
        setimage(imageee.women)
    }
    else if(value=="Kids"){
        setimage(imageee.kids)
    }

 },[Data])

 const naviagate = useNavigate();

 function productclick(value){
    getimage(value)
    naviagate("/productpage")
 }
    
    return(
        <>
        <div className="mappingcard" >
                {isimage?.map((item,index)=>{
                return(
                    <div key={index} className="mapcarddivsectin" onClick={()=>productclick(item)}>
                        <ProductCard image={item} />
                    </div>
                    
                )
            })}
        </div>
        
       
        
        </>
    )
}
export default Mapcard;