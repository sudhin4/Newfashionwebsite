import React from "react";
import Image1 from "../../assets/Images/Imagee.png";
import Image2 from "../../assets/Images/frontImage12.jpg";
import Image4 from "../../assets/Images/imageeee.jpg";
import CardslideImage from "../CardslideImage/CardslideImage";
import "../Cardslidercomp/Cardslidercompp.css";

const cards = [
  {
    id: 1,
    name: "Hoodies",
    img: Image1,
    para: "Step into a world of style where fashion meets individuality. Our curated collection celebrates elegance, comfort, and modern design crafted for every occasion. From timeless classics to trend-setting pieces, we bring you looks that inspire confidence, creativity, and effortless charm—because your fashion should tell your story beautifully.",
  },
  {
    id: 2,
    name: "Hoodies",
    img: Image4,
    para: "Step into a world of style where fashion meets individuality. Our curated collection celebrates elegance, comfort, and modern design crafted for every occasion. From timeless classics to trend-setting pieces, we bring you looks that inspire confidence, creativity, and effortless charm—because your fashion should tell your story beautifully.",
  },
  {
    id: 3,
    name: "Hoodies",
    img: Image2,
    para: "Step into a world of style where fashion meets individuality. Our curated collection celebrates elegance, comfort, and modern design crafted for every occasion. From timeless classics to trend-setting pieces, we bring you looks that inspire confidence, creativity, and effortless charm—because your fashion should tell your story beautifully.",
  },
];

export default function StackedCards() {
  return (
    <div className="cards-container">
      <div className="cards-list">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <CardslideImage
              image={card.img}
              para={card.para}
              heading={card.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
