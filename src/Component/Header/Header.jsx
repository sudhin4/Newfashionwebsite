import { IoBagHandleOutline } from "react-icons/io5";
import '../Header/Header.css'


function Header(){

    
    return (
        <>
        <div className="fullheadersectiondivv">
            <h1 className="logoheading" >Fashion</h1>
            <div className="Linkdivv">
                <h2 className="linkheading">About</h2>
                <h2 className="linkheading">Contact</h2>
                <IoBagHandleOutline className="handbagicon" />
            </div>
        </div>
        
        </>
    )
}
export default Header;