import { BrowserRouter, Route, Routes } from "react-router"
import { ImagePickerPage } from "./pages/ImagePickerPage"
import Entry from "./pages/entry"
import Login from "./pages/login"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Entry/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

