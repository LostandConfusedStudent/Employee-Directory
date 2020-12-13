import React from "react";
import Search from "./Search.js"

function Header(){
    return(
        <div className="header">
            <div>Employee Directory</div>
            <div>
                <div>Employee Search: </div>
                <Search />
            </div>
        </div>
    )
}
export default Header;