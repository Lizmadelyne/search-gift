import { useAppi } from "../hooks/useAppi";
import { ImageItem } from "./imageItem";

const DisplayGifts = ({ category }) => {
  const url = ` https://api.giphy.com/v1/gifs/search?api_key=CZXJylR25Uq7SenjXIZT27czkhRA9y24&q=${category}&limit=5`;
  const { loading, data } = useAppi(url)
  return (
    <div className="grid gap-6 grid-cols-3 relative mt-6">
      
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
