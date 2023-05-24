import "./header.css";


const Header = () =>{


    return(
        <div className="header-container">
            <div className="header-cell">
                <span className="cell-placeholder">Home</span>
            </div>
            <div className="header-cell">
                <span className="cell-placeholder">FAQ</span>
            </div>
            <div className="header-cell">
                <span className="cell-placeholder">Customer Service</span>
            </div>
        </div>
    );
};


export default Header