
import { AddCategory } from "./components/AddCategory";
import { DisplayGifts } from "./components/displayGifts";
import { Footer } from "./components/Footer";
import { useState } from "react";
import "./App.css";

function App () {
  const [category, setCategory] = useState("")
  return (

      <div className="w-[85%] m-auto bg-white text-center">
        <h1 className="mt-5 p-4 font-bold text-blue-950">BUSCADOR DE GIFTS</h1>
        <AddCategory setCategory={setCategory}/>
        <DisplayGifts category = {category} />
        <Footer/>
        
      </div>

  )
}

export default App;
