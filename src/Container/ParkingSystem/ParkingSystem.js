
import React, { useState } from "react";
import "./ParkingSystem.css";
import LoginPage from "../../LoginPage";

function ParkingSlot({ index, isAvailable, onClick }) {
  const handleClick = () => {
    onClick(index);
  };

  const color = isAvailable ? "green" : "red";
  const text = isAvailable ? "Available" : "Reserved";

  return (
    <div
      style={{
        backgroundColor: color,
        width: "75px",
        height: "60px",
        margin: "5px"
      }}
      onClick={handleClick}
    >
      <p style={{ color: "white", textAlign: "center", marginTop: "18px" }}>
        {text}
      </p>
    </div>
  );
}

function ParkingSystem() {

  const [slots, setSlots] = useState([
    { id: 1, isAvailable: true, category: "Basement" },
    { id: 2, isAvailable: true, category: "Basement" },
    { id: 3, isAvailable: true, category: "Basement" },
    { id: 4, isAvailable: true, category: "Basement" },

    { id: 5, isAvailable: true, category: "Upper Basement" },
    { id: 6, isAvailable: true, category: "Upper Basement" },
    { id: 7, isAvailable: true, category: "Upper Basement" },
    { id: 8, isAvailable: true, category: "Upper Basement" },

  ]);

  const handleClick = (index) => {
    const newSlots = [...slots];
    newSlots[index].isAvailable = !newSlots[index].isAvailable;
    setSlots(newSlots);
  };

  const availableSlotsCount = slots.filter((slot) => slot.isAvailable).length;

  const basementSlots = slots.filter((slot) => slot.category === "Basement");
  const upperBasementSlots = slots.filter((slot) => slot.category === "Upper Basement");
  const lowerBasementSlots = slots.filter((slot) => slot.category === "Lower Basement");

  return (
    <>
        <LoginPage />
    <div className="parkingsystem">
    <img src="https://www.easytourz.com/uploads/Businesslogo/1565164968.jpg" className="logoimage"  ></img>
    <br></br>
    
    <div className="pagedesign" style={{fontFamily:'sans-serif',textAlign:'center'}}>
      <h1 className="bmscepark">BMSCE PARKING SYSTEM</h1>
      <div className="avslots">
        Available Slots: {availableSlotsCount} / Total Slots: {slots.length}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ marginRight: "120px" }}>
          <h2 className="bmscepark">New Building:</h2>
          {basementSlots.slice(0, 4).map((slot, index) => (
            <ParkingSlot
              key={slot.id}
              index={slots.indexOf(slot)}
              isAvailable={slot.isAvailable}
              onClick={handleClick}
            />
          ))}
        </div>
        <div style={{ marginRight: "20px" }}>
          <h2 className="bmscepark">Mechanical Block:</h2>
          {upperBasementSlots.slice(0, 4).map((slot, index) => (
            <ParkingSlot
              key={slot.id}
              index={slots.indexOf(slot)}
              isAvailable={slot.isAvailable}
          onClick={handleClick}
        />
      ))}
   </div>
   
   </div>
   {/* <div style={{ marginRight: "20px" }}>
    <h2>Law Department</h2>
    {lowerBasementSlots.slice(0, 4).map((slot, index) => (
            <ParkingSlot
              key={slot.id}
              index={slots.indexOf(slot)}
              isAvailable={slot.isAvailable}
          onClick={handleClick}
        />
      ))}
      </div> */}

    
   
   </div>
   
   </div>
        
  

     
  
  
   </>

   );
  }

export default ParkingSystem;