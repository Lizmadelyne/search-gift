
import { AddCategory } from "./components/AddCategory";
import { DisplayGifts } from "./components/displayGifts";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App () {
  const [category, setCategory] = useState("")
  const [initianGift, setInitialGift] = useState(null);

  useEffect(() =>{
    const fetchInitialGift = async()=>{
      try{
        const response = axios.get(
          " https://api.giphy.com/v1/gifs/random?api_key=CZXJylR25Uq7SenjXIZT27czkhRA9y24=hello"
        );
        setInitialGift(response.data.data)
  
      }catch (error){
        console.error('error fetching initial gift')
  
      }
    };
    fetchInitialGift()
  }, []);
  
  
  return (

      <div className="w-full m-auto bg-white text-center">
        <h1 className="mt-5 p-4 font-bold text-blue-950">BUSCADOR DE GIFTS</h1>
        <AddCategory setCategory={setCategory}/>
        {initianGift && <img src={initianGift.images.original.url} alt="initial-gift"/> }
        <DisplayGifts category = {category} />
        <Footer className="mb-0"/>
        
      </div>

  )
}

export default App;
