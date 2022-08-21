import React from 'react';
import { YoutubeData } from './YoutubeData';
import YoutubeItem from './YoutubeItem';

const YoutubeList = (props) => {
   return (
      <div className="youtube-list">
         {props.children}
         {YoutubeData && YoutubeData.length &&
            YoutubeData.map((item, index) => (
               <YoutubeItem
                  key={item.id}
                  image={item.image}
                  avatar={item.avatar}
                  title={item.title}
                  author={item.author}
                  className={index === 1 ? "abc" : ""}
               />
            ))}
      </div>
   );
};

export default YoutubeList;