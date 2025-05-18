import React, {useState} from 'react';
import './App.css';
import Tasiyici from './Companents/tasiyici';
import Icerik from './Companents/icerik';

const tema={
  dark:{color:"white", backgroundColor:"black"},
  light:{color:"black", backgroundColor:"white"}
};
export const RenkModu = React.createContext();

function App() {

  const [sayi,setSayi] = useState(0);
  
  //function azalt()
    //{
      //setSayi(sayi-1);
    //}
  const azalt=()=> {setSayi(sayi-1)}
  const [deger,setDeger] = useState(tema.dark);
  function degistir()
  {
    if(tema.dark===deger)
    {
      setDeger(tema.light);
    }
    else{
      setDeger(tema.dark);
    }
  }
  return (
    <div className="App">
      <button onClick={()=> {setSayi(sayi+1)}}>+</button>
      <label style={{padding:"0 15px"}}>{sayi}</label>
      <button onClick={azalt}>-</button>
      <Tasiyici deger={sayi} yazi="deneme"/>
      <button onClick={degistir}>
          {
            tema.dark===deger ? "Açık Tema":"Koyu Tema"
          }
      </button>
     <RenkModu.Provider value={deger}>
        <Icerik></Icerik>
     </RenkModu.Provider>
    
    </div>
  );
}


export default App;
