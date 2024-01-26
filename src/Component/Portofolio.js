import CardPorto from "./CardPorto";
import CFDImage from "./../assets/cfd.jpg";
import SMCImage from "./../assets/pabrik.jpg";
import RDLImage from "./../assets/rodalink.jpg";
import UBMImage from "./../assets/ubm.jpg";
import ChruchImage from "./../assets/church.jpg";
import MiningImage from "./../assets/mining.jpg";
import WhsImage from "./../assets/warehouse.jpg";

const Portofolio = () => {
    return (
        <div className="container mt-5" id="stage">
            <div className="row mb-4">
                <div className="col-12 text-center">
                    <h3 style={{ color : '#6C5116'}}>Our Successful Project</h3>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-3 col-md-6">
                    <CardPorto src={CFDImage} title="CFD Analysis" text={"CFD Analysis BufferTank Chiller 40m3 and CFD Analysis PressureTank 50m3"}/>
                </div>
                <div className="col-lg-3 col-md-6">
                    <CardPorto src={SMCImage} title="Workshop Platinum Ceramic" text={`1st floor, 148.000m2 <br /> PT. Surya Multi Cemerlang, Workshop Platinum Ceramic, Semambung – Sidoarjo`}/>
                </div>
                <div className="col-lg-3 col-md-6">
                    <CardPorto src={RDLImage} title="RodaLink Showroom" text={`Bandung (3rd Storey, 400m2@fl <br /> Surabaya (4th Storey, 500m2@fl)`}/>
                </div>
                <div className="col-lg-3 col-md-6">
                    <CardPorto src={UBMImage} title="Universitas Bunda Mulia" text={"Universitas Bunda Mulia Housing – Ancol, Jakarta (12th Storey)"}/>
                </div>
            </div>
            <div className="row mt-3 justify-content-center">
                <div className="col-lg-3 col-md-6">
                    <CardPorto src={ChruchImage} title="Gereja Graha Victory" text={"Gereja Graha Victory – Surabaya (7th Storey)"}/>
                </div>
                <div className="col-lg-3 col-md-6">
                    <CardPorto src={MiningImage} title="Tambang Pasir Silika" text={`PT. Karya Emas Multisani <br /> Tambang Pasir Silika – East Belitung`}/>
                </div>
                <div className="col-lg-3 col-md-6">
                    <CardPorto src={WhsImage} title="Toko dan Gudang" text={`Toko dan Gudang Dupak – Surabaya (5th Storey)`}/>
                </div>
            </div>
        </div>
    )
}

export default Portofolio;