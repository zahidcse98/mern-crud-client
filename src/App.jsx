import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  //const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [serverName, setServerName] = useState('');

  
  useEffect(() => {
    //fetchItems();
    getServerName();
  }, []);

 //const baseURL = 'http://localhost:5000/api/items';
  // const fetchItems = async () => {
  //   const response = await axios.get("http://34.148.139.225/api/items");
  //   const {data} = response;
  //   console.log(data);
  //   setItems(data);
  // };


  const getServerName = async () => {
    const response = await axios.get("http://34.148.139.225/api/items")
    console.log(response.data);
    setServerName(response.data)
  }
  // const postItems = async (name, description) => {
  //   const response = await axios.post(baseURL, {name , description})
  //   console.log(response)
  // }

  // const deleteItem = async (id) => {
  //   const deletedItem = await axios.delete(`${baseURL}/${id}`)
  //   console.log(deletedItem);
  //   fetchItems();
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
   // postItems(name, description)
    setName('');
    setDescription('');
    //fetchItems();
    console.log('submit request');
  };


  return (
    <div className="App">
      <h1>{serverName}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name || ''} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Description" value={description || ''} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Add Item</button>
      </form>
      <ul>
{/*         
        {items.map(item => (
          <li key={item?._id}>
            <h3>{item?.name}</h3>
            <p>{item?.description}</p>
            {/* //<button onClick={() => deleteItem(item._id)}>X</button> */}
          {/* </li> */}
        {/* ))}  */}
        {/* */} 

      </ul>
    </div>
  );
}

export default App;
