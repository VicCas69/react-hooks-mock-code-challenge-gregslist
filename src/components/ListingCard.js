import React, { useState } from "react";

function ListingCard({id, img, description, location, handleDeleteNewArray}) {

  const [favorite, setFavorite] = useState(false)

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => handleDeleteNewArray({id: id, 
                                      image: img,
                                      description: description,
                                      location: location}))
  }

  function toggleFav(){
    setFavorite(!favorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={img} alt={description}/>
      </div>
      <div className="details">
        {favorite === true ? (
          <button className="emoji-button favorite active" onClick={toggleFav}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={toggleFav} >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
