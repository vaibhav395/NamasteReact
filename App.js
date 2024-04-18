import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = ()=>(
    <header className="header">
        <div className="logo">
            <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"/>
        </div>
        <div className="searchbar">
            <input type="text" placeholder="Search...."/>
            <button>Search</button>
        </div>
        <div className="user">
            <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"/>
        </div>
    </header>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);