import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Rooms from "./Pages/Rooms"
import About from "./Pages/About"


function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
