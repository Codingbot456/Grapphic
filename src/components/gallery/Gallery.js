import React, { useReducer } from 'react';


import brand1 from '../../assets/images/brand-1.png';
import brand2 from '../../assets/images/brand-2.png';
import brand3 from '../../assets/images/brand-3.png';
import brand4 from '../../assets/images/brand-4.png';
import brand5 from '../../assets/images/brand-5.png';

import graphic1 from '../../assets/images/graphic-1.png';
import graphic2 from '../../assets/images/graphic-2.png';
import graphic3 from '../../assets/images/graphic-3.jpg';

import illust1 from '../../assets/images/illust-1.png';
import illust2 from '../../assets/images/illust-2.png';
import illust3 from '../../assets/images/illust-3.png';
import illust4 from '../../assets/images/illust-4.png';

const Branding = [brand1, brand2, brand3, brand4, brand5];
const Graphic = [graphic1, graphic2, graphic3];
const Illustration = [illust1, illust2, illust3, illust4];

function reducer(state, action) {
    switch (action.type) {
        case 'showBranding':
            return { mode: 'branding' };
        case 'showGraphic':
            return { mode: 'graphic' };
        case 'showIllustration':
            return { mode: 'illustration' };
        case 'showAll':
            return { mode: 'all' };
        default:
            return state;
    }
}

export const Gallery = () => {
    const initialState = { mode: 'all' };
    const [state, dispatch] = useReducer(reducer, initialState);

    const showBranding = () => {
        dispatch({ type: 'showBranding' });
    };

    const showGraphic = () => {
        dispatch({ type: 'showGraphic' });
    };

    const showIllustration = () => {
        dispatch({ type: 'showIllustration' });
    };

    const showAll = () => {
        dispatch({ type: 'showAll' });
    };

    const renderImages = (images) => {
        return images.map((image, index) => (
            <img key={index} src={image} alt={`image-${index}`} className="gallery-image" />
        ));
    };

    return (
        <div className='main-gal'>
            <div className='port-actions'>
                <button onClick={showAll}>All</button>
                <button onClick={showBranding}>Branding</button>
                <button onClick={showGraphic}>Graphic Design</button>
                <button onClick={showIllustration}>Illustration</button>
            </div>
            <div className='gallery'>
                {state.mode === 'branding' && renderImages(Branding)}
                {state.mode === 'graphic' && renderImages(Graphic)}
                {state.mode === 'illustration' && renderImages(Illustration)}
                {state.mode === 'all' && (
                    <>
                        {renderImages(Branding)}
                        {renderImages(Graphic)}
                        {renderImages(Illustration)}
                    </>
                )}
            </div>
        </div>
    );
};
