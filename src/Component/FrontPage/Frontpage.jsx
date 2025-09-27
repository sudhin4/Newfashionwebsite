import Image1 from '../../assets/Images/Image21.jpg'
import Image2 from '../../assets/Images/Image22.jpg'
import Image3 from '../../assets/Images/Image28.jpg'
import Image4 from '../../assets/Images/Image26.jpg'
import Image5 from '../../assets/Images/Image25.jpg'
import '../FrontPage/Frontpage.css'


function Frontpage(){
    return (
        <>
        <div className='fullfrontapgedivvv'>
            <div className='contentforfrontpage'>
                <h2 className='headingforfrontpageheading'>Step into elegance with designs that inspire <b className='boldd'>"Confidence"</b> every day</h2>
            </div>

            <div className="fullimagesectionforfrontpage">
            <img src={Image1} alt="" className='imagfrofrontpagee image001' />
            <img src={Image2} alt="" className='imagfrofrontpagee image002' />
            <div className='centerimagefrontpage'>
                
                <img src={Image3} alt="" className='imagfrofrontpagee image003' />
                <button className='shopnowbtnfrontpagee'>Shop Now</button>
            </div>
            
            <img src={Image4} alt="" className='imagfrofrontpagee image004' />
            <img src={Image5} alt="" className='imagfrofrontpagee image005' />
        </div>
        </div>
        
        
        </>
    )
}

export default Frontpage;