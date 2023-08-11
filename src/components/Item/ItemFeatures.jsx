import "./ItemFeatures.css"

function ItemFeatures({ features1, features2 }) {
  return (
    <div className="item-features">
      <h3>FEATURES</h3>
      <p>{features1}</p>
      <p>{features2}</p>
    </div>
  );
}

export default ItemFeatures;
