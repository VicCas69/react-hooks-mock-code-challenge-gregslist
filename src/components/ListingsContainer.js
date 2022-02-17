import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({handleDeleteNewArray, listings, handleSearch}) {

 // console.log(handleSearch())

  return (
    <main>
      <ul className="cards">
        {listings.map(listing => {
          return <ListingCard key={listing.id} id={listing.id} img={listing.image} description={listing.description} location={listing.location} handleDeleteNewArray={handleDeleteNewArray} />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;

/*{
  "listings": [
    {
      "id": 1,
      "description": "heater",
      "image": "./images/heater.jpg",
      "location": "BROOKLYN"
    },
    {
      "id": 2,
      "description": "2019 Toyota Tacoma grill",
      "image": "./images/toyota-grill.jpg",
      "location": "Williamsburg"
    },
    {
      "id": 3,
      "description": "Free Braun 3735 Electric Toothbrush charger",
      "image": "./images/toothbrush-charger.jpg",
      "location": "Williamsburg"
    },
    {
      "id": 4,
      "description": "FREE Hundreds of DVD/CD Cases - Different Sizes and Colors",
      "image": "./images/dvd-cases.jpg",
      "location": "Prospect Heights"
    },
    {
      "id": 5,
      "description": "wood",
      "image": "./images/wood.jpg",
      "location": "Greenpoint"
    },
    {
      "id": 6,
      "description": "Beautiful couch",
      "image": "./images/couch.jpg",
      "location": "Bay Ridge"
    },
    {
      "id": 7,
      "description": "Treadmill Parts For Free",
      "image": "./images/treadmill.jpg",
      "location": "East Flatbush"
    }
  ]
}
*/
