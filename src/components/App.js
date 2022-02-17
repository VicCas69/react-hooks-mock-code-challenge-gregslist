import React, { useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  //const [searchFilter, setSearchFilter] = useState(false)
  
  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(listing => setListings(listing))
  }, [])

  function handleSearch(name){
    //console.log(name)
    const filtered = listings.filter(listing => {
      if(listing.description.toLowerCase().includes(name.toLowerCase())){
        return listing}
    })
    if(name !== ""){
    setListings(filtered)
    }else{
      fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(listing => setListings(listing))
        }

  }

  function handleDeleteNewArray(list){
    const newDeleteArr = listings.filter(newArr => {
      return newArr.id !== list.id })
    setListings(newDeleteArr)
  }

  return (
    <div className="app">
      <Header handleSearch={handleSearch} />
      <ListingsContainer handleDeleteNewArray={handleDeleteNewArray} listings={listings} handleSearch={handleSearch} />
    </div>

  );
}

export default App;
