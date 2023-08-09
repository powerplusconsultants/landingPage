import CardProgress from "./CardProgress";
import {FaDraftingCompass} from 'react-icons/fa';
import {MdDesignServices, MdEditDocument, MdConstruction} from 'react-icons/md';
import { Link } from 'react-router-dom';

const Stage = () => {
    return(
        <div className="container" id="stage">
            <div className="row">
                <div className="col-12 text-center">
                    <h3 style={{ color : '#6C5116'}}>Stage Of Work</h3>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-3 col-md-6">
                    <Link to='/Detail/ConceptStage' style={{ textDecoration: 'none'}}>
                        <CardProgress icon = {FaDraftingCompass} text = "Conceptual and Schematic Design" bgcolor = "#6C5015" rgba="rgba(108, 80, 21, 1)"/>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <Link to="/Detail/DesignStage" style={{ textDecoration: 'none'}}>
                        <CardProgress icon = {MdDesignServices} text = "Design Stage" bgcolor = "#6C5E25" rgba="rgba(108, 94, 37, 1)"/>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <Link to="/Detail/TenderStage" style={{ textDecoration: 'none'}}>
                        <CardProgress icon = {MdEditDocument} text = "Detail Design and Tender Document Stage" bgcolor = "#6C6C35" rgba="rgba(108, 108, 53, 1)"/>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <Link to="/Detail/ConstructionStage" style={{ textDecoration: 'none'}}>
                        <CardProgress icon = {MdConstruction} text = "Construction Stage" bgcolor = "#6C7940" rgba="rgba(108, 121, 64, 1)"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Stage;