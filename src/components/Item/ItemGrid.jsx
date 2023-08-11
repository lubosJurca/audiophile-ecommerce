import "./ItemGrid.css";

function ItemGrid({ image1,image2,image3 }) {
  
  return (
    <div className="item-grid-img">
      <img src={image1} alt="Audiophile product" className="image1" />
      <img src={image2} alt="Audiophile product" className="image2" />
      <img src={image3} alt="Audiophile product" className="image3" />
    </div>
  );
}

export default ItemGrid;
