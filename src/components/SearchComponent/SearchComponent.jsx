// // Render Search on DOM
// import { useSelector, useDispatch } from 'react-redux';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const SearchComponent = () => {
//   const [searchInput, setSearchInput] = useState('');
//   const giphyList = useSelector(store => store.gifList);
//   const dispatch = useDispatch();



//   useEffect(() => {
//     dispatch({
//       type: 'CLEAR_GIPHY_LIST'
//     });
//   }, [])

//   const getGiphy = () => {}

//   const onSearch = (event) => {
//  event.preventDefault();
//   dispatch({
//    type: 'SEARCH_FOR_GIPHYS',
//    payload: searchInput
// })
//       }
//   return (
//     <>
//       <h1>Find a Gif</h1>
//       <form onSubmit={onSearch}>
//         <input
//           type="text"
//           value={searchInput}
//          onChange={event => setSearchInput(event.target.value)}
//         />
//       <input type="submit" value="Find that gif" />
//        </form>
//        <h2> Results </h2>
// <ul>
//   {gifList.map(item =>(
//     <GifItem
//     key={item.image_url}
//     gif={item}
//     />
//   ))}
//   </ul>    
  
// </>
// )
// }
// export default SearchComponent;
