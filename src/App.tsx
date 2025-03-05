import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"


function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
