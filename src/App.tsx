import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Rooms from "./Pages/Rooms"
import About from "./Pages/About"
import Explore from "./Pages/Explore"


function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  )
}

export default App
