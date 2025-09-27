import Men from '../../assets/Images/Image28.jpg'
import Women from '../../assets/Images/women5.png'
import Kids from '../../assets/Images/Kids4.png'
import '../ChooseDress/ChooseDress.css'


function ChooseDress({isclickfn}){
    return(
        <>
        <div className="choosedresssectiondiv">
            <div className="mendress" onClick={()=>isclickfn("Mens")}>
                <img src={Men} alt="" className="imagfordresssection" />
                <h3 className="headingfordresssection">Men</h3>
            </div>
             <div className="mendress" onClick={()=>isclickfn("Womens")}>
                <img src={Women} alt="" className="imagfordresssection" />
                <h3 className="headingfordresssection">Women</h3>
            </div>
             <div className="mendress" onClick={()=>isclickfn("Kids")}>
                <img src={Kids} alt="" className="imagfordresssection" />
                <h3 className="headingfordresssection">Kid</h3>
            </div>
            
        </div>
        
        </>
    )
}
export default ChooseDress