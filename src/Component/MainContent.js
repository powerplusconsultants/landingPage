import Specialization from "./Specialization";
import Stage from "./Stage";
import Profile from "./Profile";
import bgAtas from "./../assets/frontBg.jpg";
import { useNavigate } from "react-router-dom";

const MainContent = () => {
    const navigate = useNavigate();
    return(
        <div className="container-fluid">
            <div className="head-text">
                <img 
                    src={bgAtas}
                    alt="Proyek"
                    style={{
                        width: '100%',
                        minHeight : '200px',
                        filter : `brightness(30%)`
                    }}
                    className="h-auto d-inline-block"
                />
                <div className="text-on-image text-white">
                    <h3 style={{ fontSize : '50px' }}>Profesional MEP Consultant</h3>
                    <p>Help you with Quality and Time</p>
                    <div style={{ textDecoration : 'none', color : 'white'}} onClick={() => {navigate("/",{ state: { targetId: 'footer'}})}}>
                        <div style={{ outline: '3px solid white', width : '200px', padding : '10px'}} className="mx-auto d-block">Click Me!</div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Specialization/>
                <Stage />
                <Profile />
            </div>
        </div>
    )
}

export default MainContent;