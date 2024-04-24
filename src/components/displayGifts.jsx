import {useAppi, } from "../hooks/useAppi";
import { ImageItem } from "./ImageItem";

const DisplayGifts = ({ category }) => {
  const url = ` https://api.giphy.com/v1/gifs/search?api_key=CZXJylR25Uq7SenjXIZT27czkhRA9y24&q=${category}&limit=6`;
  const { loading, data } = useAppi(url)
  return (
    <div className="grid gap-6 relative mt-6 mb-2 md:grid-cols-2 lg:grid-cols-3">
      
      {
        loading ?
        data.map(img => (
          <ImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url}/>
        ))
        : ''
      }  
  
    </div>
  );
};

export { DisplayGifts };
