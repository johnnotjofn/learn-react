import React from 'react';

const YoutubeItem = (props) => {
   return (
      <div className={`youtube-item ${props.className}`}>
         <div className="youtube-image">
            <img src={props.image} alt="" />
         </div>
         <div className="youtube-footer">
            <img src={props.avatar} alt="" className="youtube-avatar" />
            <div className="youtube-info">
               <h2>{props.title || "This is a title"}</h2>
               <h3>{props.author || "This is an author"}</h3>
            </div>
         </div>
      </div>
   );
};

export default YoutubeItem;