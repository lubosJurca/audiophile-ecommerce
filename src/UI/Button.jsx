import { Link } from "react-router-dom"

// css
import "./Button.css"

function Button(props) {
  return (
    <Link 
        className={props.class ? `btn ${props.class}` : "btn"}
        to={`/${props.id}`}
            >{props.title ? props.title : "SEE PRODUCT"}
    </Link>
  )
}

export default Button