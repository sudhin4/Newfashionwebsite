import React, { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Randomanimation.css";

 import Mainimage from '../../assets/Images/CoupleImage.jpg'
 import Image2 from '../../assets/Images/Women1.jpg'
 import Image3 from '../../assets/Images/women2.jpg'
 import Image4 from '../../assets/Images/Women3.png'
 import Image5 from '../../assets/Images/Women4.png'
 import Image6 from '../../assets/Images/Image21.jpg'
 import Image7 from '../../assets/Images/Image22.jpg'
 import Image8 from '../../assets/Images/Image23.jpeg'
 import Image9 from '../../assets/Images/Image28.jpg'
 import Image10 from '../../assets/Images/Image27.jpg'
 import Image11 from '../../assets/Images/Image222.jpg'
 import Image12 from '../../assets/Images/Image333.jpg'
 import Image13 from '../../assets/Images/Image444.jpg'
 import Image14 from '../../assets/Images/Image555.jpeg'
 import Image15 from '../../assets/Images/Image555.jpeg'
 import Mainimage2 from '../../assets/Images/Frontt.jpg'

gsap.registerPlugin(ScrollTrigger);

export default function Randomanimation() {
  useEffect(() => {
    let scalerTl, layersTl;

    const hasScrollSupport = CSS.supports(
      "(animation-timeline: view()) and (animation-range: 0 100%)"
    );

    const config = {
      theme: "system",
      enhanced: true,
      stick: true,
      layers: true,
      center: true,
      stagger: "range",
    };


    const update = () => {
      document.documentElement.dataset.theme = config.theme;
      document.documentElement.dataset.enhanced = config.enhanced;
      document.documentElement.dataset.stick = config.stick;
      document.documentElement.dataset.layers = config.layers;
      document.documentElement.dataset.center = config.center;
      document.documentElement.dataset.stagger = config.stagger;

      if (config.enhanced && !hasScrollSupport) {
        scalerTl = gsap.timeline({
          scrollTrigger: {
            trigger: "main section:first-of-type",
            start: "top -10%",
            end: "bottom 80%",
            scrub: true,
          },
        })
        .from(".scaler img", { height: window.innerHeight - 32, ease: "power1.inOut" }, 0)
        .from(".scaler img", { width: window.innerWidth - 32, ease: "power2.inOut" }, 0);

        layersTl = gsap.timeline({
          scrollTrigger: {
            trigger: "main section:first-of-type",
            start: "top -40%",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .from(".layer:nth-of-type(1)", { opacity: 0, scale: 0, ease: "power1.inOut" }, 0)
        .from(".layer:nth-of-type(2)", { opacity: 0, scale: 0, ease: "power2.inOut" }, 0)
        .from(".layer:nth-of-type(3)", { opacity: 0, scale: 0, ease: "power3.inOut" }, 0);
      } else {
        gsap.set([".scaler img", ".layer"], { clearProps: "all" });
        scalerTl?.kill();
        layersTl?.kill();
        scalerTl = undefined;
        layersTl = undefined;
      }
    };

    
     update();

     return () => {
       scalerTl?.kill();
       layersTl?.kill();
       
     };
  }, []);

  return (
    <>
      <div className="content-wrap">
        
        <main>
          <section>
            <div className="content">
              <div className="grid">
                <div className="layer">
                  <div><img src={Mainimage} alt="" /></div>
                  <div><img src={Image2} alt="" /></div>
                  <div><img src={Image3} alt="" /></div>
                  <div><img src={Image4} alt="" /></div>
                  <div><img src={Image5} alt="" /></div>
                  <div><img src={Image6} alt="" /></div>
                </div>

                {/* Layer 2 */}
                <div className="layer">
                  <div><img src={Image7} alt="" /></div>
                  <div><img src={Image8} alt="" /></div>
                  <div><img src={Image9} alt="" /></div>
                  <div><img src={Image10} alt="" /></div>
                  <div><img src={Image11} alt="" className="btmimageeee" /></div>
                  <div><img src={Image12} alt=""  className="btmimageeee"/></div>
                </div>

                {/* Layer 3 */}
                <div className="layer">
                  <div><img src={Image13} alt="" className="btmimageeee" /></div>
                  <div><img src={Image14} alt="" className="btmimageeee" /></div>
                  <div><img src={Image15} alt="" className="btmimageeee" /></div>
                </div>

                {/* Scaler */}
                <div className="scaler">
                  <img src={Mainimage2} alt="" className="frontImageee" />
                </div>
              </div>
            </div>
          </section>
         
        </main>
      </div>

      {/* <footer>
        <span aria-hidden="true">
          ʕ<span className="arm">ノ</span>•ᴥ•ʔ<span className="arm">ノ</span>
          <span className="spring"><span>︵</span></span>
          <span className="table">┻━┻</span>
        </span>
        &nbsp;&copy; jhey '24
      </footer> */}
    </>
  );
}
