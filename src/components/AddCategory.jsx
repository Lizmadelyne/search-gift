import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

const AddCategory = ({ setCategory }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const searchGift = (e) => {
    e.preventDefault();
    if (value === "") {
      setError(true);
      return;
    }
  
    setError(false);
    setCategory(value);
    setValue("");
  //  console.log("enter form");
  };

  const handleSearch = () => {
    if (value.trim() !== "") {
      searchGift({ preventDefault: () => {} }); // Llama a la función de búsqueda
    }
  };
  return (
    <div className="grid bg-slate-300 rounded-[10px] p-3 justify-center max-w-lg m-auto" >
      <h2 className="text-lg text-sky-950 p-2">Busca tu gift</h2>
      <form onSubmit={searchGift}
      className=""
      >
        <div className="flex gap-2 items-center">
        <input
        className="bg-white text-lg text-blue-950 max-w-lg p-2"
          type="text"
          placeholder="search gifts"
          
          onChange={(e) => setValue(e.target.value)}
          value={value} //borra lo escrito luego 
        />
        <div className="text-blue-600  cursor-pointer">
        <HiOutlineSearch onClick={handleSearch} size={40}/>
        </div>
        
        </div>
        

      </form>
      {error ? <p className="error">El campo no puede estar vacio</p> : ""}
    </div>
  );
};
export { AddCategory };
