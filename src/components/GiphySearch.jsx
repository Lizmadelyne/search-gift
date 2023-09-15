import { useState } from 'react';
import axios from 'axios';

const GiphySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [gifs, setGifs] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        
        ` https://api.giphy.com/v1/gifs/search?api_key=CZXJylR25Uq7SenjXIZT27czkhRA9y24`
        
       // `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=CZXJylR25Uq7SenjXIZT27czkhRA9y24`
      );
      setGifs(response.data.data);
    } catch (error) {
      console.error('Error fetching GIFS:', error);
    }
  };

  return (
    <div className=''>
      <input className=''
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt="GIF" />
        ))}
      </div>
    </div>
  );
};

export {GiphySearch};
