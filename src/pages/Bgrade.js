import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../contexts/MyContext';

const Bgrade = () => {


    const {clothes, buyItem} =useContext(MyContext)
    const bGrade = clothes.filter(x => x.grade==="B")
    //console.log (clothes, bGrade)
    return (
        <div>
            <h2>B grade</h2>
           {bGrade.map((x,index) => 
            <div onClick = {()=>buyItem(x.title)} className='armorcard bg-blue ali-center' key={index}>
                <img src={x.img} alt=''/>
                <span>{x.title}</span>
                <span>{x.type}</span>

            </div>
           )} 
            
        </div>
    )
}

export default Bgrade
