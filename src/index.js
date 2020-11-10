import React from "react";
import ReactDOM from "react-dom";
//Show a single h1 that says "Good morning" if between midnight and 12PM.

const time = new Date();

const hour = time.getHours();
var text = "";

const costumStyle = {
  color: "black"
};

if (hour >= 0 && hour < 12) {
  text = "Good Morning!";
  costumStyle.color = "red";
} else if (hour >= 12 && hour <= 18) {
  text = "Good Evening!";
  costumStyle.color = "green";
} else {
  text = "Good Night";
  costumStyle.color = "blue";
}
ReactDOM.render(
  <h1 className="heading" style={costumStyle}>
    {text}
  </h1>,
  document.getElementById("root")
);
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
