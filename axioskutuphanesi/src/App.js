import React,{useState,useEffect} from 'react'
import axios from 'axios'

function App() {

  const[veri,setVeri]= useState("");
  const[id, setId] = useState(15);
  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(gelen => setVeri(gelen.data[id].title))
        .catch(hata=> setVeri("id Hatalı"))
  },[veri,id])
  return (
    <div>
      <input type='text' value={id} onChange={deger=>setId(deger.target.value)}/>
      <p>{veri}</p>
    
    </div>
  );
}

export default App;
