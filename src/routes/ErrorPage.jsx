import { Link} from "react-router-dom"

function Error() {
  return (
    <div>
      <h1>Something´s wrong. We are working on it.</h1>
      <p>Thank you for your patience.</p>
      <Link to="/">Home page</Link>
    </div>
  )
}

export default Error