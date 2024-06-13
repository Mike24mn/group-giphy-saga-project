// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { React, useEffect, useState } from "react";
// import { HashRouter as Router, Route, Link, useHistory, useLocation } from "react-router-dom";
// import storeInstance from "../../index";


// function App() {
//   let [giphyList, setGiphyList] = useState([]);
//   const dispatch = useDispatch();
//   const currentGiphy = useSelector((state) => state.gifList || []);

//   useEffect(() => {
//     dispatch ({type: 'FETCH_GIF'})  ;
//   }, []);

//   // route issue in below axios get, use ./routes/giphy.router instead I believe
//   // data structure is a problem for future. 

//   const getGiphy = () => {
//     dispatch ({type: 'FETCH_GIF'}) 
//     // axios
//     //   .get('.')
//     //   .then((response) => {
//     //     console.log("Original response data is ", response.data);
//     //     console.log("Response from API:", response.data.data);

//     //     // image url will likely be similar, but different data structure
//     //     // than imageUrl below - CHANGED, should now get broken img url/link and
//     //     // "Giphy" text on the DOM

//     //     const imageUrl = response.data.data;
//     //     // THE ABOVE VARIABLE PICKS APART THE OBJECT CORRECTLY
//     //     // THIS TOOK AWHILE TO ANALYZE THE DATA STRUCTURE!!!
//     //     console.log("Original image URL:", imageUrl);
//     //     // SET GIPHY LIST MUST BE SET IN AN ARRAY, SINCE I MAPPED IT LATER
//     //     setGiphyList([imageUrl]);
//     //     console.log("Giphy list is: ", response.data);
//     //     dispatch({ type: "SET_SEARCH", payload: response.data });
//     //   })
//     //   .catch((err) => {
//     //     //alert(`Critical error gettin' Giphy with it`, err);
//     //     console.error('Error fetching data:', err);
//     //     console.error('Error response:', err.response);
//     //   });
//   };
  


//   // create function onButtonReset that grabs new data
//   // Renders the entire app on the DOM
//   return (
//     <div>
//       <header className="App-header">
//         <h1>Search Giphy API</h1>
//       </header>
//       <p>Results go here</p>
//       <button onClick={(event) => getGiphy()}>Test</button>
//       {giphyList.length > 0 &&
//         giphyList.map((giphy, index) => (
//           <div key={index}>
//             <img src={giphy} alt="Giphy" />
//           </div>
//         ))}
//     </div>
//   );
// }
// export default App;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const gifList = useSelector((state) => state.gifList || []);

  useEffect(() => {
    dispatch({ type: 'FETCH_GIF' });
  }, []);

  function updateSearchQuery() {
    
  }

  return (
    <div>
      <header className="App-header">
        <h1>Search Giphy API</h1>
      </header>
      {/* <button onClick={() => dispatch({ type: 'FETCH_GIF' })}>Fetch Gifs</button> */}
      <form onSubmit={updateSearchQuery}>
                <input 
                type="text"
                placeholder="Search"
                value=""

                />
                <button onClick={updateSearchQuery}>Search</button>
              </form>
              <hr/>
      <div >
        {gifList.length > 0 ? (
          gifList.map((giphy) => (
            <div key={giphy.id}>
              <img src={giphy.images.original.url} alt="Giphy" />

            </div>
          ))
        ) : (
          <p>No GIFs found</p>
        )}
      </div>
    </div>
  );
}

export default App;

// Create a search input 
  // Calls a function that gives ability to search. 

