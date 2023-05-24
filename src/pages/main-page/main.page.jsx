import "./main-page.css";


const MainPage = () =>{
    
    
    
    return (
        <div className="main-page-container">
            <div className="robot-location-wrapper">
                <div className="robot-pin-image"></div>
                <span>Robots current location: </span>
            </div>
            <div className="robot-status-wrapper">
                <span>Robots status: <span>Active</span></span>
            </div>
            <div className="robot-options-wrapper">
                <div className="inputwrapper">
                    <label htmlFor="input">assign goal location(friend, map or manually)</label>
                    <input type="text" id="input" name="input"/>    
                </div>
                <button type="button">Start</button>
                <button type="button">Friends list</button>
            </div>            
            <div className="mapwrapper"></div>
        </div>
    );
};

export default MainPage;