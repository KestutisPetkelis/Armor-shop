import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
// import { useRef } from 'react';
import { useState } from 'react';

import './App.css';

import Shop from './components/Shop';
import Inventory from './components/Inventory';

import { MyContext } from './contexts/MyContext';
import {ItemContext} from './contexts/ItemContext';


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
    upper: "upper",
    lower:"lower",
    hat:"hat",
    gloves: "gloves",
    boots:"boots"
  })
  

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
      img: "https://lineage.pmfun.com/data/img/armor_helmet_i02_0.png",
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

  const setItemOn = (arg, index) =>{

    const item = inventory.find(x=>x.title===arg)
    console.log("click set on !", arg, " keys", item.type)
    const clothesOn = {...equipment}    // spread galima naudoti ir objektui
    
    //const removedEquipment = inventory.filter(x => x.title!==item.title) // isimam is masyvo visus daiktus su tuo pavadinimu - nelabai gerai....
   
    const removedEquipment = inventory.filter((x, i) => i !== index) // isimam tik 1 elementa
    const addWarehouse = clothes.find(x => x.img===clothesOn[item.type])
    console.log("warehouse ON", addWarehouse, removedEquipment)
    if(addWarehouse){       // atnaujinam sandelio daiktus
      setInventory([...removedEquipment, addWarehouse]) 
    }else{
      setInventory(removedEquipment)
    }


    if (item.type==="hat") clothesOn.hat=item.img
    if (item.type==="gloves") clothesOn.gloves=item.img
    if (item.type==="upper") clothesOn.upper=item.img
    if (item.type==="lower") clothesOn.lower=item.img
    if (item.type==="boots") clothesOn.boots=item.img
    setEquipment(clothesOn)         // atnaujinam inventoriaus daiktus
    // setInventory(removedEquipment)  // atnaujinam sandelio daiktus
    console.log("uzdeta", clothesOn)
  }

  const removeItem=(arg)=>{
   
    console.log("Remove item", arg)
    const clothesOff = {...equipment}
       
    const addWarehouse = clothes.find(x => x.img===clothesOff[arg])
    console.log("What's up, doc?", addWarehouse)
    if(addWarehouse){
      console.log(addWarehouse, clothesOff[arg])
      if (arg==="hat") clothesOff.hat=""
      if (arg==="gloves") clothesOff.gloves=""
      if (arg==="upper") clothesOff.upper=""
      if (arg==="lower") clothesOff.lower=""
      if (arg==="boots") clothesOff.boots=""
      setEquipment(clothesOff)
      setInventory([...inventory, addWarehouse])
      console.log("nuimta", clothesOff)
    }
  }



  return (
    <div className="App" style={divStyle}>
      <BrowserRouter>
        <MyContext.Provider value={{clothes, buyItem}}>
          <ItemContext.Provider value ={{inventory,equipment, setItemOn, removeItem}}>
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
