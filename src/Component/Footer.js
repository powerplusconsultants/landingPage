import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter className='text-center text-dark' bgColor='light' id='footer'>
            <MDBContainer className='p-4 pb-0'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="5" xl="4" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-1" />
                                CV. Rekayasa PowerPlus Mandiri
                            </h6>
                            <p>
                                Established in 2023. PowerPlus Engineering provide cost effective services and solutions to our value
                                clients and ensures our client's interest are satisfied with uncompromising quality and on time delivery
                            </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="4" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    Komplek Ruko Pengampon Square Blok B12-15
                                    Jl. Semut Baru, Surabaya, Jawa Timur, Indonesia
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    project@powerplus.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3 mt-3" /> + 21 868 3712
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
            </MDBContainer>

            <div className='text-center p-3 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                Copyright © 2023 PowerPlus Engineering
            </div>
        </MDBFooter>
    )
}

export default Footer;