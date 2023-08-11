import { createBrowserRouter,RouterProvider } from "react-router-dom"

// layot
import Root from "./layouts/Root"

// routes
import ErrorPage from "./routes/ErrorPage"
import HomePage from "./routes/HomePage"
import HeadphonesPage from "./routes/HeadphonesPage"
import SpeakersPage from "./routes/SpeakersPage"
import EarphonesPage from "./routes/EarphonesPage"
import ItemDetailPage from "./routes/ItemDetailPage"
import Checkout from "./routes/Checkout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {path: "headphones", element: <HeadphonesPage />},
      {path: "speakers", element: <SpeakersPage />},
      {path: "earphones", element: <EarphonesPage />},
      {path: ":productId", element: <ItemDetailPage />},
      {path: "checkout", element: <Checkout />}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App