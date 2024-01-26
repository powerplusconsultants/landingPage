import React from 'react';
import Card from 'react-bootstrap/Card';

const CardPorto = ({ title, text, src}) => {
    const iconSize = 7; // Desired icon size in rem

    return (
        <div className='mb-4'>
            <Card>
                <Card.Img variant="top" src={src} style={{ height: '200px', objectFit: 'cover' }}/>
                <Card.Body style={{ minHeight: '200px'}}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <div dangerouslySetInnerHTML={{ __html: text }}></div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardPorto;