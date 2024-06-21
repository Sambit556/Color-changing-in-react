import React, { useState } from 'react'
import style from "./colorChange.module.css"

function ColorChange() {

     const [color,setColor]=useState("white")

     const funColor1=()=>{setColor("green")}
     const funColor2=()=>{setColor("blue")}
     const funColor3=()=>{setColor("yellow")}
     const funColor4=()=>{setColor("violet")}
     const funColor5=()=>{setColor("Orange")}
     const funColor6=()=>{setColor("red")}
     const funColor7=()=>{setColor("purple")}

  return (
    <div>
     <section style={{backgroundColor:color}}>
          <div className={style.div}>
          <button type="button" onClick={funColor1} style={{backgroundColor:"green"}}>green</button>
               <button type="button" onClick={funColor2} style={{backgroundColor:"blue"}}>blue</button>
               <button type="button" onClick={funColor3} style={{backgroundColor:"yellow"}}>yellow</button>
               <button type="button" onClick={funColor4} style={{backgroundColor:"violet"}}>violet</button>
               <button type="button" onClick={funColor5} style={{backgroundColor:"Orange"}}>Orange</button>
               <button type="button" onClick={funColor6} style={{backgroundColor:"red"}}>red</button>
               <button type="button" onClick={funColor7} style={{backgroundColor:"purple"}}>purple</button>
          </div>
     </section>
     </div>
  )
}

export default ColorChange