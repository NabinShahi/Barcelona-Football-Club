import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

//passing images as props  -> JS literals

function Team() {
  return(
    <>
    <center><h1 className =  "heading"><span className =  "ball1" style = {{color: "blue"}}>
      <i class="fa fa-futbol-o" aria-hidden="true"></i>  </span>
      Barcelona Football Club  <span className =  "ball2" style = {{color: "red"}}>
        <i class="fa fa-futbol-o" aria-hidden="true"></i>  </span></h1></center>
    <section className = "name">
      <Player img = "1" name = " Griezmann" position = "Forward" link = "https://www.instagram.com/antogriezmann/"/>
      <Player img = "2" name = " Iniesta" position = "Mid-fielder" link = "https://www.instagram.com/andresiniesta8/"/>
      <Player img = "3" name = "Messi" position = "Forward" link = "https://www.instagram.com/leomessi/"/>
      <Player img = "4" name = "Ronaldinho" position = "winger" link = "https://www.facebook.com/ronaldinho/"/>
      <Player img = "5" name = "Ter Stegen" position = "Keeper" link = "https://www.instagram.com/mterstegen1/"/>
      <Player img = "6" name = "Xavi" position = "Mid-fielder" link = "https://www.instagram.com/xavi/"/>
    </section>
    <Sign />
    </>
  )
}
 const Player = ({img, name, position, link}) => {
   let image = `./Images/${img}.jpg`
   return(
     <div className = "list">
       <img src = {image} alt = "player" />
       <center>
        <h1>{name}</h1>
        <h2>{position}</h2>
        <a href = {link}><button className = "about">More Details</button></a>
       </center>
     </div>
   )
 }

const Sign = () => {
  return( 
    <div className = "copyright">
      <p>By Nabin Shahi</p>
    </div>
    )
  }

ReactDom.render(<Team />, document.getElementById("root"));