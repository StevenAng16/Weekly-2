
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import HomeApp from "./component/HomeApp";
import BlogApp from "./component/BlogApp";
import NoteApp from "./component/NoteApp";
import AboutApp from './component/AboutApp';
import LoginApp from "./component/LoginApp";
import Sidebar from './component/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer/Footer'


function App() {
  return (
    <Router>
        <div className='App'>
          <Navbar/>
            <div className='row'>
              <div className='col-2'>
                <Sidebar/>
              </div>
              <div className='col-8'>
              <Routes>
                  <Route index element={<HomeApp/>}></Route>  
                  <Route path="/blogs" element={<BlogApp />} ></Route>
                  <Route path="/note" element={<NoteApp />} ></Route>
                  <Route path="/about" element={<AboutApp />} ></Route>
                  <Route path="/login" element={<LoginApp />} ></Route>
                </Routes>
                {/* <Routes>
                  <Route path="/" exact element={<HomeApp />}>
                    <Route index element={"Home"}/>  
                  </Route>
                  <Route path="/blogs" element={<BlogApp />} >
                    <Route index element={"Blog"}/>
                  </Route>
                  <Route path="/note" element={<NoteApp />} >
                    <Route index element={"Note"}/>
                  </Route>
                  <Route path="/about" element={<AboutApp />} >
                    <Route index element={"About"}/>
                  </Route>
                  <Route path="/login" element={<LoginApp />} >
                    <Route index element={"Login"}/>
                  </Route>
                </Routes> */}
              </div>
            </div>
            <Footer/>
        </div>
    </Router>
    
  );
}

export default App;
