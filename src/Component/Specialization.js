import Sp1 from "./../assets/sp1.png";
import Sp2 from "./../assets/sp2.png";
import Sp3 from "./../assets/sp3.png";
import Sp4 from "./../assets/sp4.jpg";
import Sp5 from "./../assets/sp5.jpg";
import Sp6 from "./../assets/sp6.jpg";
import SpDetail from "./SpDetail";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Specialization = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 770 },    
            items: 2
        },  
        mobile: {
            breakpoint: { max: 770, min: 0 },
            items: 1
        }
    };
    return(
        <div className="container my-5" id="specialization">
            <div className="row my-5">
                <div className="col-12 text-center">
                    <h3 style={{ color : '#6C5116'}}>Specialization</h3>
                </div>
            </div>
            <div className="row justify-content-center">
                <Carousel responsive = {responsive} autoPlay = {true} autoPlaySpeed={5000} swipeable = {true} arrows = {false} infinite = {true}>
                    <SpDetail image = {Sp1} title = "Mechanical Engineering" path = "/Detail/MechanicalEngineering"/>
                    <SpDetail image = {Sp2} title = "Transport Engineering" path = "/Detail/TransportEngineering"/>
                    <SpDetail image = {Sp3} title = "Electrical Engineering" path = "/Detail/ElectricalEngineering"/>
                    <SpDetail image = {Sp4} title = "Environment & Public Health Engineering" path = "/Detail/PublicHealthEngineering"/>
                    <SpDetail image = {Sp5} title = "Studies" path = "/Detail/Studies"/>
                    <SpDetail image = {Sp6} title = "Computational Studies" path = "/Detail/ComputationalStudies"/>
                </Carousel>
            </div>
        </div>
    )
}

export default Specialization;
