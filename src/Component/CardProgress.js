import React from 'react';

const CardProgress = ({ icon: Icon, text, bgcolor, rgba}) => {
    const iconSize = 7; // Desired icon size in rem

    return (
        <div style={{ color: 'white'}}>
            <div className='rounded-div my-3 mx-auto' style={{ 
                minHeight : '300px', 
                maxWidth : '400px', 
                boxShadow : `0px 4px 15px ${rgba}`,
                backgroundColor : `${bgcolor}`}
                }>
                <div className='icon-container'>
                    <Icon style={{ fontSize: `${iconSize}rem`}} />
                </div>
                <h5 style={{ textAlign : 'center'}} className='mt-4'>{text}</h5>
            </div>
        </div>
    )
}

export default CardProgress;