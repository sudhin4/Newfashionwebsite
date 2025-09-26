import { MdOutlineEmail } from "react-icons/md";

import '../Footer/Footer.css'

function Footer(){
    return(
        <>
        <div className="footersecitondiv">
            <div className="firstcontentforfooter">
                <h2 className="Logoforfooter">Fashion</h2>
                <div className="contactsectionfooter">
                  <MdOutlineEmail className="emailfontsizee"/>
                <h3 className="emailforfootercontact">sudhinnaveen38@gmail.com</h3>  
                </div>
                
            </div>
            <div className="secondcontentfooter">
                <h2 className="ourservicefooter">Our Services</h2>
                <h3 className="footerserviceheading">Return Policy</h3>
                <h3 className="footerserviceheading">Delivery terms</h3>
                <h3 className="footerserviceheading">Contacts</h3>
                <h3 className="footerserviceheading">Terms & conditions</h3>
            </div>
        </div>
        <h2 className="copyrightsclain">All rights are received</h2>
        
        </>
    )
}
export default Footer;