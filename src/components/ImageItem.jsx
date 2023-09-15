const ImageItem = ({ title, url }) => {
  return (
    <div className="cursor-pointer p-6 ">
      <figure className="">
        <img className=" w-80 h-60 object-cover rounded-lg relative mb-3" src={url} alt={title} />
        <span className=" text-lg text-gray-600  ">{title}</span>
      </figure>
    </div>
  );
};
export { ImageItem };
