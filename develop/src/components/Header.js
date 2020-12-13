import React from "react";
import Search from "./Search.js"


function Navbar(){
    // used as the navbar for the site.
    return(
        <div className="navbar">
            <div>Employee Directory</div>
            <div>
                <div>Employee Search: </div>
                <Search />
            </div>
        </div>
    )
}
export default Navbar;