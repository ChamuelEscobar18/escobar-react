import React, { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [cookies, setCookies] = useState([
  ]);

  const submit = (e) => {
    e.preventDefault();
    const CookieName = document.getElementById("inpt-CookieName").value;
    const Rarity = document.getElementById("inpt-Rarity").value;
    const Type = document.getElementById("inpt-Type").value;
    const Position = document.getElementById("inpt-Position").value;
    const Pronouns = document.getElementById("inpt-Pronouns").value;  
    const Topping1 = document.getElementById("inpt-1st Toppings").value;
    const Topping2 = document.getElementById("inpt-2nd Toppings").value;
    const Topping3 = document.getElementById("inpt-3rd Toppings").value;
    const Topping4 = document.getElementById("inpt-4th Toppings").value;
    const Topping5 = document.getElementById("inpt-5th Toppings").value;
    

    setCookies([...cookies, { 
      CookieName, 
      Rarity, 
      Type, 
      Position, 
      Pronouns, 
      Topping1,
      Topping2,
      Topping3,
      Topping4,
      Topping5 
    }]);
  };

  return (
    <>
      <div>
        <form onSubmit={submit}>
          <div style={{marginRight: 200, fontSize: 30}}>
          <div style={{ display: 'flex', gap: 7, justifyContent: 'center', marginTop: 10, marginRight: 89 }}>
            <label>Cookie Name:</label>
            <input id="inpt-CookieName" type="text" style={{borderRadius: '15px', padding: '0px',fontSize: 25, width:173}} required/>
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 10 }}>
            <label>Rarity:</label>
            <select defaultValue="" id='inpt-Rarity' required style={{ width: 173, display: 'flex', justifyContent: 'center', marginLeft: 0, marginRight: -4., borderRadius: 15,fontSize: 25}}>
              <option value="" disabled selected></option>
              <option value="Common" style={{fontSize: 25}}>Common</option>
              <option value="Rare"style={{fontSize: 25}}>Rare</option>
              <option value="Epic"style={{fontSize: 25}}>Epic</option>
              <option value="Super Epic"style={{fontSize: 25}}>Super Epic</option>
              <option value="Legendary"style={{fontSize: 25}}>Legendary</option>
              <option value="Ancient"style={{fontSize: 25}}>Ancient</option>      
              <option value="Beast"style={{fontSize: 25}}>Beast</option>
              <option value="Dragon"style={{fontSize: 25}}>Drgaon</option>
              <option value="Special"style={{fontSize: 25}}>Special</option>            
            </select>
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 10 }}>
            <label>Type:</label>
            <select id='inpt-Type' required style={{width: 173, display: 'flex', justifyContent: 'center', marginLeft: 25, borderRadius: 15,fontSize: 25}}>
              <option value="" disabled selected></option>
              <option value="Charge"style={{fontSize: 25}}>Charge</option>
              <option value="Ambush"style={{fontSize: 25}}>Ambush</option>
              <option value="Bomber"style={{fontSize: 25}}>Bomber</option>
              <option value="Defense"style={{fontSize: 25}}>Defense</option>
              <option value="Healing"style={{fontSize: 25}}>Healing</option>
              <option value="Ranged"style={{fontSize: 25}}>Ranged</option>
              <option value="Support"style={{fontSize: 25}}>Support</option>           
            </select>
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 10, marginLeft: -20 }}>
            <label>Position:</label>
            <select id='inpt-Position' required style={{width: 173, display: 'flex', justifyContent: 'center', marginLeft: 10, marginRight: 14, borderRadius: 15,fontSize: 25}}>
              <option value="" disabled selected></option>
              <option value="Front"style={{fontSize: 25}}>Front</option>
              <option value="Middle"style={{fontSize: 25}}>Middle</option>
              <option value="Rear"style={{fontSize: 25}}>Rear</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 10, marginLeft: -20 }}>
            <label>Pronouns:</label>
            <select id='inpt-Pronouns' required style={{width: 173, display: 'flex', justifyContent: 'center', marginLeft: 5, marginRight: 23, borderRadius: 15,fontSize: 25}}>
              <option value="" disabled selected></option>
              <option value="He/Him"style={{fontSize: 25}}>He/Him</option>
              <option value="She/Her"style={{fontSize: 25}}>She/Her</option>
              <option value="Gender Neutral"style={{fontSize: 25}}>Gender Neutral</option>
            </select>
          </div>
          </div>

          <div style={{textAlign: 'center', marginLeft:570, marginTop: -220, marginRight: 50, fontSize: 30}}>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 10 }}>
            <label>Topping 1:</label>
            <select id='inpt-1st Toppings' required style={{width: 235, display: 'flex', justifyContent: 'center', marginLeft: 3, marginRight: 40, borderRadius: 15,fontSize: 25}}>  
              <option value="" disabled selected></option>
              <option value="Bouncy Caramel"style={{fontSize: 25}}>Bouncy Caramel</option>
              <option value="Fresh Kiwi"style={{fontSize: 25}}>Fresh Kiwi</option>  
              <option value="Hard Walnut"style={{fontSize: 25}}>Hard Walnut</option>
              <option value="Healthy Peanut"style={{fontSize: 25}}>Healthy Peanut</option> 
              <option value="Hearty Hazelnut"style={{fontSize: 25}}>Hearty Hazelnut</option> 
              <option value="Juicy Apple Jelly"style={{fontSize: 25}}>Juicy Apple Jelly</option>
              <option value="Searing Raspberry"style={{fontSize: 25}}>Searing Raspberry</option>      
              <option value="Solid Almond"style={{fontSize: 25}}>Solid Almond</option>   
              <option value="Sweet Candy"style={{fontSize: 25}}>Sweet Candy</option>   
              <option value="Swift Chocolate"style={{fontSize: 25}}>Swift Chocolate</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 10 }}>
            <label>Topping 2:</label>
            <select id='inpt-2nd Toppings' required style={{width: 235, display: 'flex', justifyContent: 'center', marginLeft: 3, marginRight: 40, borderRadius: 15, fontSize: 25}}>  
              <option value="" disabled selected></option>
              <option value="Bouncy Caramel"style={{fontSize: 25}}>Bouncy Caramel</option>
              <option value="Fresh Kiwi"style={{fontSize: 25}}>Fresh Kiwi</option>  
              <option value="Hard Walnut"style={{fontSize: 25}}>Hard Walnut</option>
              <option value="Healthy Peanut"style={{fontSize: 25}}>Healthy Peanut</option> 
              <option value="Hearty Hazelnut"style={{fontSize: 25}}>Hearty Hazelnut</option> 
              <option value="Juicy Apple Jelly"style={{fontSize: 25}}>Juicy Apple Jelly</option>
              <option value="Searing Raspberry"style={{fontSize: 25}}>Searing Raspberry</option>      
              <option value="Solid Almond"style={{fontSize: 25}}>Solid Almond</option>   
              <option value="Sweet Candy"style={{fontSize: 25}}>Sweet Candy</option>   
              <option value="Swift Chocolate"style={{fontSize: 25}}>Swift Chocolate</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 10 }}>
            <label>Topping 3:</label>
            <select id='inpt-3rd Toppings' required style={{width: 235, display: 'flex', justifyContent: 'center', marginLeft: 3, marginRight: 40, borderRadius: 15, fontSize: 25}}>  
              <option value="" disabled selected></option>
              <option value="Bouncy Caramel"style={{fontSize: 25}}>Bouncy Caramel</option>
              <option value="Fresh Kiwi"style={{fontSize: 25}}>Fresh Kiwi</option>  
              <option value="Hard Walnut"style={{fontSize: 25}}>Hard Walnut</option>
              <option value="Healthy Peanut"style={{fontSize: 25}}>Healthy Peanut</option> 
              <option value="Hearty Hazelnut"style={{fontSize: 25}}>Hearty Hazelnut</option> 
              <option value="Juicy Apple Jelly"style={{fontSize: 25}}>Juicy Apple Jelly</option>
              <option value="Searing Raspberry"style={{fontSize: 25}}>Searing Raspberry</option>      
              <option value="Solid Almond"style={{fontSize: 25}}>Solid Almond</option>   
              <option value="Sweet Candy"style={{fontSize: 25}}>Sweet Candy</option>   
              <option value="Swift Chocolate"style={{fontSize: 25}}>Swift Chocolate</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 10 }}>
            <label>Topping 4:</label>
            <select id='inpt-4th Toppings' required style={{width: 235, display: 'flex', justifyContent: 'center', marginLeft: 3, marginRight: 40, borderRadius: 15, fontSize: 25}}>  
              <option value="" disabled selected></option>
              <option value="Bouncy Caramel"style={{fontSize: 25}}>Bouncy Caramel</option>
              <option value="Fresh Kiwi"style={{fontSize: 25}}>Fresh Kiwi</option>  
              <option value="Hard Walnut"style={{fontSize: 25}}>Hard Walnut</option>
              <option value="Healthy Peanut"style={{fontSize: 25}}>Healthy Peanut</option> 
              <option value="Hearty Hazelnut"style={{fontSize: 25}}>Hearty Hazelnut</option> 
              <option value="Juicy Apple Jelly"style={{fontSize: 25}}>Juicy Apple Jelly</option>
              <option value="Searing Raspberry"style={{fontSize: 25}}>Searing Raspberry</option>      
              <option value="Solid Almond"style={{fontSize: 25}}>Solid Almond</option>   
              <option value="Sweet Candy"style={{fontSize: 25}}>Sweet Candy</option>   
              <option value="Swift Chocolate"style={{fontSize: 25}}>Swift Chocolate</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 10 }}>
            <label>Topping 5:</label>
            <select id='inpt-5th Toppings' required style={{width: 235, display: 'flex', justifyContent: 'center', marginLeft: 3, marginRight: 40,borderRadius: 15,fontSize: 25 }}>  
              <option value="" disabled selected></option>
              <option value="Bouncy Caramel"style={{fontSize: 25}}>Bouncy Caramel</option>
              <option value="Fresh Kiwi"style={{fontSize: 25}}>Fresh Kiwi</option>  
              <option value="Hard Walnut"style={{fontSize: 25}}>Hard Walnut</option>
              <option value="Healthy Peanut"style={{fontSize: 25}}>Healthy Peanut</option> 
              <option value="Hearty Hazelnut"style={{fontSize: 25}}>Hearty Hazelnut</option> 
              <option value="Juicy Apple Jelly"style={{fontSize: 25}}>Juicy Apple Jelly</option>
              <option value="Searing Raspberry"style={{fontSize: 25}}>Searing Raspberry</option>      
              <option value="Solid Almond"style={{fontSize: 25}}>Solid Almond</option>   
              <option value="Sweet Candy"style={{fontSize: 25}}>Sweet Candy</option>   
              <option value="Swift Chocolate"style={{fontSize: 25}}>Swift Chocolate</option>
            </select>
          </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10, marginLeft: 120, height: 50 }}>
            <input type="submit" value="Create It" style={{borderRadius: '10px', padding: '10px', border: '1px solid #ccc', width: 200, fontSize: 25}} />
          </div>
        </form>
        <div> 

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginTop: 20 }}>
            {cookies.map((cookie, cookies) => (
              <div
                key={cookies} 
                style={{
                  fontFamily: 'Segoe UI Symbol',
                  borderRadius: 15,
                  padding: '12px',
                  width: '250px', 
                  fontSize: 15,
                  backgroundImage: "url('https://www.cookierun-kingdom.com/static/68e8f0058ab84ef73040e920fbbf340a/b22fb/characterPortraitCard.png')",
                  backgroundSize: 'cover' 
                }}
                
              >
                <h2 style={{ textAlign: 'center', marginTop: 5, backgroundColor: '	#FFEB80', fontSize: 25, borderRadius: 35}}>{cookie.CookieName}</h2>
                <div style={{fontSize: 15, textAlign: 'center'}}>
                <h3 style={{ backgroundColor: '	#ffd700', borderRadius: 15}}>Rarity: {cookie.Rarity}</h3>
                <h3 style={{ backgroundColor: '	#ffd700', borderRadius: 15 }}>Type: {cookie.Type} </h3>
                <h3 style={{backgroundColor: '	#ffd700', borderRadius: 15}}>Position: {cookie.Position} </h3>
                <h3 style={{backgroundColor: '	#ffd700', borderRadius: 15}}>Pronouns: {cookie.Pronouns} </h3>
                <h3 style={{backgroundColor: '	#ffd700', borderRadius: 15}}>Topping 1: {cookie.Topping1} </h3>
                <h3 style={{backgroundColor: '	#ffd700', borderRadius: 15}}>Topping 2: {cookie.Topping2} </h3>
                <h3 style={{backgroundColor: '	#ffd700', borderRadius: 15}}>Topping 3: {cookie.Topping3} </h3>
                <h3 style={{backgroundColor: '	#ffd700', borderRadius: 15}}>Topping 4: {cookie.Topping4} </h3>
                <h3 style={{backgroundColor: '	#ffd700', borderRadius: 15}}>Topping 5: {cookie.Topping5} </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
