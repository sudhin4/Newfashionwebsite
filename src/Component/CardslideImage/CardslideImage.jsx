// import FrontpageImage from '../../assets/Images/Frontendpage1.png'
// import Hoodie1image from '../../assets/Images/Threehoddie.png'
import '../CardslideImage/CardslideImage.css'

function CardslideImage({image,para,heading}){
    return(
        <>
        <div className="fullpagesectiondiv">
            <img src={image} alt="" className='imageforcardslideeIMage' />
        </div>
        
        
        </>
    )
}

export default CardslideImage;