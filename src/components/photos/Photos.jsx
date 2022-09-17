import React, { useEffect, useState } from 'react';
import axios from 'axios';
const getPhotos = async (page) => {
   try {
      const response = await axios
         .get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
      return response.data;
   } catch (error) {
      console.log(error);
   }
}

const Photos = () => {
   const [randomPhotos, setRandomPhotos] = useState([])
   const [page, setPage] = useState(1)
   const handleGetMorePhotos = async () => {
      const images = await getPhotos(page)
      const newPhotos = [...randomPhotos, ...images]
      setRandomPhotos(newPhotos)
      setPage(prev => prev + 1)
   }
   useEffect(() => {
      handleGetMorePhotos()
   }, [])
   return (
      <div>
         <div className="grid grid-cols-4 gap-5 p-5">
            {randomPhotos && randomPhotos.length && randomPhotos.map((item, index) => (
               <div key={item.id} className="p-3 bg-white shadow-md rounded-lg">
                  <img src={item.download_url} alt={item.author}
                     className="w-full h-[200px] object-cover rounded-md"
                  />
               </div>
            ))}
         </div>
         <div className="text-center">
            <button className="inline-block px-7 py-3 bg-purple-600 rounded-sm text-white" onClick={handleGetMorePhotos}>
               Load more
            </button>
         </div>
      </div>
   );
}

export default Photos;