import React, {useState, useEffect} from 'react';
import FetchList from './component/FetchList';

function App() {
  const [photos, setPhotos]= useState([]);
   
 useEffect(()=> {
  fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    setPhotos(data)
  })
}, []) 
  return (
    <div className='todo-app'>
     <FetchList photos={photos}/>
    </div>
  );
}

export default App;