import Foto from "../image/photo_2022-04-11_10-09-27.jpg"

 function HomeApp () {
        return (
            <div className="container-fluid mt-5">
                <div className="row">
                    <h1>E-Class Site</h1>
                    <h2>This class established since 2022</h2>
                    <img src={Foto} alt='Foto Kelas'/>
                </div>
            </div>
        )
 }

 export default HomeApp