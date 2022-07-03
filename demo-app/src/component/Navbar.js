// 1) import React
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"


// 2) buat function component di Navbar
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            <div className='container'>
                <NavLink to="/">
                    <p className='navbar-brand text-light'>Kelas E</p>
                </NavLink>
                <NavLink to="/login">
                    <p className='navbar-brand text-light'>Login</p>
                </NavLink>
            </div>
        </nav>
    )
}

// 3) export function tersebut saya bisa di pake di component
export default Navbar