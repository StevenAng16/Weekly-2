// 1) import React
import React from "react";
import { Link } from "react-router-dom";


// 2) buat function component di Sidebar
function Sidebar() {
    return (
        <div className="h-100 position-fixed bg-dark w-25">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            <div className="bg-dark text-light">
                <div>
                    <Link to="/">
                        <p className="d-block nav-link text-light bg-secondary">Home</p>
                    </Link> 
                </div>
                <div>
                    <Link to="/blogs">
                        <p className="d-block nav-link text-light bg-success" >Blog</p>
                    </Link>
                </div>
                <div>
                    <Link to="/note">
                        <p className="d-block nav-link text-light bg-primary">Note</p>       
                    </Link>
                </div>
                <div>
                    <Link to="/about">
                        <p className="d-block nav-link text-light bg-warning">About</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

// 3) export function tersebut saya bisa di pake di component
export default Sidebar