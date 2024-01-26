import logoPec from './../assets/LogoPEC.png';
import logoGmail from './../assets/Gmail-Logo.png';
import {Button} from 'react-bootstrap';
import { useState } from 'react'; 

const Profile = () => {
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };
    const handleSendEmail = (e) => { 
        const encodedMessage = encodeURIComponent(message);
        const emailSubject = 'Contact Us Inquiry';
        const emailTo = 'project@powerplus.com';
        const mailToLink = `mailto:${emailTo}?subject=${emailSubject}&body=${encodedMessage}`;

        window.location.href = mailToLink;
    }
    return (
        <div className='container mt-5' id='profile'>
            <div className='row'>
                <div className='col-12'>
                    <img 
                        src={logoPec}
                        id='logoPec'
                        alt="Logo PEC"
                        style={{ minwidth: '300px' }}
                        className="d-block align-top mx-auto mt-3 mb-5"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-12' style={{height : '200px'}}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15831.8760846292!2d112.7437899!3d-7.2443652!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9137ad2c32d%3A0x3d3ed5a31a2a35f2!2sPT.%20Agung%20Buana%20Sentosa!5e0!3m2!1sid!2sid!4v1690951663042!5m2!1sid!2sid"
                        style= {{ border:0 , height : '100%', width : '70%' }}
                        aria-hidden="false"
                        title='PT PowerPlus Engineering Consultant'
                        tabIndex="0"
                        className='d-block mx-auto'
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 mt-4'>
                    <textarea 
                        className='mx-auto d-block form-control' 
                        id='message' 
                        value = {message}
                        onChange={handleInputChange}
                        placeholder='Get Connect With Us' 
                        style={{ width: '50%', minHeight : '100px'}} />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 mt-3 mb-5 text-center'>
                    <Button onClick={handleSendEmail} variant='dark' size='lg' ><img src={logoGmail} style={{ width : '2rem', marginRight: '3px'}} alt='logo Gmail'/>Email Us</Button>
                </div>
            </div>
        </div>
    )
}

export default Profile;