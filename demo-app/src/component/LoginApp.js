// import { Link } from "react-router-dom"
// import SignUp from "../pages/SignUp"

function LoginApp () {
    return (
        <div className="container-fluid">
            <h1 className="mt-5">Login</h1>
            <form class="mt-5">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form><br/>
            {/* <Link to="/signup">
                <button type="button" class="btn btn-dark"><SignUp/></button>
            </Link> */}
            
        </div>
    )
}

export default LoginApp