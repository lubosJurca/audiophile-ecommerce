import "./ItemHeader.css"

function ItemHeader( { children }) {
  return (
    <div className="item-header"><h2>{children}</h2></div>
  )
}

export default ItemHeader