import { useParams } from "react-router-dom";
import stage1 from './../assets/stage1.jpg';
import stage2 from './../assets/stage2.jpg';
import stage3 from './../assets/stage3.jpg';
import stage4 from './../assets/stage4.jpg';
import Sp1 from "./../assets/spc1.jpg";
import Sp2 from "./../assets/spc2.jpg";
import Sp3 from "./../assets/spc3.jpg";
import Sp4 from "./../assets/spc4.jpg";
import Sp5 from "./../assets/spc5.jpg";
import Sp6 from "./../assets/spc6.jpg";

const Detail = () => {
    const {cardDetail} = useParams();

    let cardData;
    if(cardDetail === 'ConceptStage'){
        cardData = {
            image: stage1,
            subtitle: 'Conceptual and Schematic Design',
            text: (
                <div>
                    <ul>
                        <li>
                        Conduct review and consultation with client, Architect and
                        other project participants on the construction program,
                        architectural conceptual plans, and, in general, the program
                        of requirement.
                        </li>
                        <li>
                        To initiate preliminary discussion with the Public Utility
                        Companies (Electricity, Water, Sewer, Gas, Telecom, etc.)
                        and Government Authorities on matters on principle in
                        connection with the design of the works.
                        </li>
                        <li>
                        To establish by comparison, analysis, and selection, the most
                        suitable and optimum solution for all MEP System.
                        </li>
                        <li>
                        To make rough engineering calculations for each system to
                        determine basic estimated load requirements.
                        </li>
                        <li>
                        To prepare Conceptual and Schematic Design Drawings
                        (single-line plans, system diagrams, riser diagrams, and
                        outline specification of all MEP System.
                        </li>
                        <li>
                        Provide preliminary information regarding MEP space /
                        room requirements such as the size and location of equipment
                        rooms, shafts, chases, and horizontal distribution spaces.
                        </li>
                        <li>
                        To attend Coordination meetings in Surabaya or elsewhere as
                        directed by the Owner, the Architect, or Project Manager.
                        </li>
                    </ul>
                </div>
            )
        };
    } else if(cardDetail === 'DesignStage'){
        cardData = {
            image: stage2,
            subtitle: 'Design Development Stage',
            text: (
                <div>
                    <ul>
                        <li>
                        To establish the MEP design criteria and prepare complete engineering calculations.
                        </li>
                        <li>
                        Determination and confirmation of space / room required for the MEP services.
                        </li>
                        <li>
                        Provide information on the weight of major pieces of MEP equipment to the Structural Engineering.
                        </li>
                        <li>
                        To further develop the approved Conceptual and Schematic Design, in commensurate with the work progress of the Architect, Structural Engineering, and other consultants.
                        </li>
                        <li>
                        To liaise with Public Utility Companies to agree utility connections in regards to power, drainage, gas, telephone, and water services.
                        </li>
                        <li>
                        To attend Coordination meetings in Surabaya or elsewhere as directed by the Owner, the Architect, or Project Manager.
                        </li>
                    </ul>
                </div>
            )
        };
    } else if(cardDetail === 'TenderStage'){
        cardData = {
            image: stage3,
            subtitle: 'Detail Design and Tender Document Stage',
            text: (
                <div>
                    <ul>
                        <li>
                        To prepare the final working drawings detail design and specifications of tender documentation.
                        </li>
                        <li>
                        The tender documentation to be prepared in maximum 3 to 4 MEP tender packages consisting of:
                        <ul>
                            <li>General Specification</li>
                            <li>Technical Specification</li>
                            <li>Tender Drawings</li>
                        </ul>
                        </li>
                        <li>
                        To sign for certification and submit the design documents to the relevant Authorities (TPIB) for obtaining the necessary approvals and other clearances.
                        </li>
                        <li>
                        To file submission documents and attend meetings with TPIB, provide clarification / explanation, and respond to queries which may be raised by the TPIB Expert Team.
                        </li>
                        <li>
                        To do minor revisions and to re-submit the drawings and documents if such revisions are necessary due to Authority's mandatory requirements.
                        </li>
                    </ul>
                </div>
            )
        };
    } else if(cardDetail === 'ConstructionStage'){
        cardData = {
            image: stage4,
            subtitle: 'Construction Stage (Periodical Observation)',
            text: (
                <div>
                    <ul>
                        <li>
                        Perform periodic observation to assess general adherence to intent design and to ensure that the works are proceeding in acceptance with the Tender Documents, on an average one visit per month during the period of construction.
                        </li>
                        <li>
                        Provide assistance in solving design-related problems if required.
                        </li>
                        <li>
                        Witnessing commissioning work of completed systems or installations, performed by the contractor.
                        </li>
                        <li>
                        To complete the above-mentioned scope of mechanical and electrical works, we provide the following supplementary services:
                        <ul>
                            <li>Project coordination and supervision, contract changes, and budget controlling.</li>
                            <li>Commissioning and maintenance supervision.</li>
                        </ul>
                        </li>
                        <li>
                        In addition to designing and supervising the installation works of building services, we also prepare complete surveys and reports on current including its feasibility, rentability, calculated efficiency, auditing, and testing.
                        </li>
                        <li>
                        We offer assistance for installation’s operation, as well as for revision and maintenance purposes.
                        </li>
                    </ul>
                </div>
            )
        };
    } else if(cardDetail === 'MechanicalEngineering'){
        cardData = {
            image: Sp1,
            subtitle: 'Mechanical Engineering',
            text: (
                <div>
                    <ul>
                        <li>
                        Air Conditioning
                        </li>
                        <li>
                        Climate Control and Mechanical Ventilating System
                        </li>
                        <li>
                        Dust Control System
                        </li>
                        <li>
                        Precision Climate Control
                        </li>
                        <li>
                        Refrigeration and Freezing Installation
                        </li>
                        <li>
                        High and Low Steam Generating
                        </li>
                    </ul>
                </div>
            )
        }
    }else if(cardDetail === 'TransportEngineering'){
        cardData = {
            image: Sp2,
            subtitle : 'Transport Engineering',
            text : (
                <div>
                    <ul>
                        <li>
                        Elevator Systems
                        </li>
                        <li>
                        Escalator and Transvelator Systems
                        </li>
                        <li>
                        Conveyor System STUDIES
                        </li>
                    </ul>
                </div>
            )
        }
    }else if(cardDetail === 'ElectricalEngineering'){
        cardData = {
            image: Sp3,
            subtitle: 'Electrical Engineering',
            text : (
                <div>
                    <ul>
                        <li>Building Automation</li>
                        <li>High and Low Voltage Power Supply and Distribution</li>
                        <li>Emergency Power Supply and Distribution</li>
                        <li>Communication and Telecommunication systems</li>
                        <li>Audio visual and Audio Systems</li>
                        <li>Fire Detection Alarm System</li>
                        <li>Security System and Monitoring</li>
                        <li>Lighting Systems</li>
                        <li>Lightning Arrestors</li>
                    </ul>
                </div>
            )
        }
    }else if(cardDetail === 'PublicHealthEngineering'){
        cardData = {
            image: Sp4,
            subtitle: 'Environment and Public Health Engineering',
            text: (
                <div>
                    <ul>
                        <li>Damage and Plumbing System</li>
                        <li>Sewage Treatment and WasteWater Disposal</li>
                        <li>Water Treatment</li>
                    </ul>
                </div>
            )
        }
    }else if(cardDetail === 'Studies'){
        cardData = {
            image : Sp5,
            subtitle: 'Studies',
            text: (
                <div>
                    <ul>
                        <li>Safety Audits</li>
                        <li>Energy Audits</li>
                        <li>Fault Diagnosis of Engineering Service and Systems</li>
                        <li>Survey Reports of Commercial or Industrial Property</li>
                        <li>Fire Control and Fire Fighting Systems</li>
                        <li>Compressed Air Installations</li>
                        <li>Hospital and Operating Theater Installations</li>
                        <li>Industrial Installations</li>
                        <li>Commercial Kitchen and Laundry Installations</li>
                        <li>Laboratory and Chemical Installation</li>
                    </ul>
                </div>
            )
        }
    }else if(cardDetail === 'ComputationalStudies'){
        cardData = {
            image: Sp6,
            subtitle: 'Computational Studies',
            text : (
                <div>
                    <ul>
                        <li>Fire Dynamics Modeling and Smoke Simulation</li>
                        <li>Computational Fluid Dynamics</li>
                        <li>Simulation of Human Evacuation in Buildings</li>
                        <li>Environmental Energy Simulation</li>
                        <li>Lighting Illumination 3D Study</li>
                    </ul>
                </div>
            )
        }
    } else {
        return;
    }

    return (
        <div className="container mt-5">
           <img
            src = {cardData.image}
            alt = {cardData.subtitle}
            style={{ width : '100%'}}
            />
            <h3 className="mt-3">{cardData.subtitle}</h3>
            {cardData.text}
        </div>
    )
}

export default Detail;