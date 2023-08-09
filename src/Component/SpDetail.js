import { Link } from 'react-router-dom'

const SpDetail = (props) => {
    return( 
        <div>
            <img 
                src={props.image}
                alt="Gambar Sp Detail"
                style={{ width: '15rem' }}
                className="mx-auto d-block"
            />
            <h4 className="text-center mt-3 fw-bold mb-0" style={{ color : '#7C8858' }}>{props.title}</h4>
            <Link to={props.path} className="text-dark text-center d-block" style={{ textDecoration : 'none' }}>Learn More</Link>
        </div>
    )
}

export default SpDetail;