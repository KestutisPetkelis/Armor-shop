import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
// import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

import Shop from './components/Shop';
import Inventory from './components/Inventory';

import { MyContext } from './contexts/MyContext';
import {ItemContext} from './contexts/ItemContext';
import Equipment from './pages/Equipment';

function App() {
  const divStyle = {
    width: "100%", 
    height: "100vh",
    // border: "1px solid blue",
    // marginTop: "0px",
    // marginBottom: "10px",
    // marginLeft: "10px",
    // padding: "30px",
    backgroundColor: "aliceblue"
    
  };

  const [inventory, setInventory] = useState([])
  const [equipment, setEquipment] = useState({
    upper: "https://lineage.pmfun.com/data/img/armor_t88_u_i00_0.png",
    lower:"lower",
    hat:"hat",
    gloves: "gloves",
    boots:"boots"
  })
  // const [someSign, setSomeSign] =useState()

  const clothes = [
    {
      img: "https://lineage.pmfun.com/data/img/armor_t88_u_i00_0.png",
      title: "Imperial Crusader Breastplate",
      type: "upper",
      grade: "S"
    },
    {
      img: "https://lineage.pmfun.com/data/img/armor_t88_l_i00_0.png",
      title: "Imperial Crusader Gaiters",
      type: "lower",
      grade: "S"
    },
    {
      img: "https://lineage.pmfun.com/data/img/armor_helmet_i00_0.png",
      title: "Imperial Crusader Helmet",
      type: "hat",
      grade: "S"
    },
    {
      img: "https://lineage.pmfun.com/data/img/armor_t88_g_i00_0.png",
      title: "Imperial Crusader Gauntlets",
      type: "gloves",
      grade: "S"
    },
    {
      img: "https://lineage.pmfun.com/data/img/armor_t88_b_i00_0.png",
      title: "Imperial Crusader Boots",
      type: "boots",
      grade: "S"
    },
    {
      img: "https://lineage.pmfun.com/data/img/armor_t74_u_i00_0.png",
      title: "Dark Crystal Breastplate",
      type: "upper",
      grade: "A"
    },
    {
      img: "https://lineage.pmfun.com/data/img/armor_t74_l_i00_0.png",
      title: "Dark Crystal Gaiters",
      type: "lower",
      grade: "A"
    },
    {
      img: "https://lineage.pmfun.com/data/img/armor_helmet_i00_0.png",
      title: "Dark Crystal Helmet",
      type: "hat",
      grade: "A"
    },
    {
      img: "https://lineage.pmfun.com/data/img/armor_t74_g_i00_0.png",
      title: "Dark Crystal Gloves",
      type: "gloves",
      grade: "A"
    },
    {
      img: "https://lineage.pmfun.com/data/img/armor_t74_b_i00_0.png",
      title: "Dark Crystal Boots",
      type: "boots",
      grade: "A"
    },
    {
      img: "https://lineage.pmfun.com/data/img/armor_t68_u_i00_0.png",
      title: "Blue Wolf Breastplate",
      type: "upper",
      grade: "B"
    },
    {
      img: "https://lineage.pmfun.com/data/img/armor_t68_l_i00_0.png",
      title: "Blue Wolf Gaiters",
      type: "lower",
      grade: "B"
    },
    {
      img: "https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png",
      title: "Blue Wolf Helmet",
      type: "hat",
      grade: "B"
    },
    {
      img: "https://lineage.pmfun.com/data/img/armor_t68_g_i00_0.png",
      title: "Blue Wolf Gloves",
      type: "gloves",
      grade: "B"
    },
    {
      img: "https://lineage.pmfun.com/data/img/armor_t68_b_i00_0.png",
      title: "Blue Wolf Boots",
      type: "boots",
      grade: "B"
    },
  ]

  const buyItem = (arg) =>{
    
    const item = clothes.find(x=>x.title===arg)
    console.log("click buy", arg, item)
    setInventory([...inventory, item])
    console.log(inventory)
  }

  const setItemOn = (arg) =>{
    
    const item = inventory.find(x=>x.title===arg)
    console.log("click set on !", arg, " keys", item.type)
    const clothesOn = equipment

    if (item.type==="hat"){
      clothesOn.hat=item.img
      
    }   
    if (item.type==="gloves") {
      clothesOn.gloves=item.img
      
    }
    if (item.type==="upper") {
      clothesOn.upper=item.img
      
    }
    if (item.type==="lower") {
      clothesOn.lower=item.img
      
    }
    if (item.type==="boots") {
      clothesOn.boots=item.img
      
    }

    

    setEquipment(clothesOn)
    

    console.log("uzdeta", clothesOn)

  
  }

  useEffect (() =>{                   // 
    
    
  },[equipment]) 




  return (
    <div className="App" style={divStyle}>
      <BrowserRouter>
        <MyContext.Provider value={{clothes, buyItem}}>
          <ItemContext.Provider value ={{inventory,equipment, setItemOn}}>
            <div className='d-flex ali-center just-evenly sticky'>
              <h4><Link to="/shop"> Shop</Link>  </h4>
              <h4><Link to="/inventory"> Inventory </Link>  </h4>
            </div>
            
            <Routes>
              <Route path="/shop" element={<Shop />}></Route>
              <Route path="/inventory" element={<Inventory/>} ></Route>
            </Routes>
          </ItemContext.Provider>
        </MyContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
