import "./main-page.css";
import MapComponent from "../../components/map/map.component";
import { useState } from "react";

const MainPage = () => {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: ""
  });

  const handleStartClick = () => {
    // Check if inputs have values
    if (location.latitude && location.longitude) {
      // Create the request body
      const requestBody = JSON.stringify(location);
  
      // Send POST request to "127.0.0.1:3001/goal"
      fetch("http://localhost:3001/goal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: requestBody
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response data
          console.log(data);
        })
        .catch(error => {
          // Handle the error
          console.error(error);
          alert("An error occurred: " + error);
          console.log(error);
        });
    }
  };
  

  return (
    <div className="main-page-container">
      <div className="robot-location-wrapper">
        <div className="robot-pin-image"></div>
        <span>Robots current location: </span>
      </div>
      <div className="robot-status-wrapper">
        <span>
          Robots status: <span>Active</span>
        </span>
      </div>
      <div className="robot-options-wrapper">
        <div className="inputwrapper">
          <label htmlFor="input">
            assign goal location(friend, map or manually)
          </label>
          <div>
            <input
              type="text"
              id="input"
              name="input"
              value={location.latitude}
              onChange={(e) => {
                setLocation({
                  ...location,
                  latitude: e.target.value
                });
              }}
              placeholder="latitude"
            />
            <input
              type="text"
              value={location.longitude}
              onChange={(e) => {
                setLocation({
                  ...location,
                  longitude: e.target.value
                });
              }}
              placeholder="longitude"
            />
          </div>
        </div>
        <button type="button" onClick={handleStartClick}>
          Start
        </button>
        <button type="button">Friends list</button>
      </div>
      <MapComponent setLocation={setLocation} />
    </div>
  );
};

export default MainPage;