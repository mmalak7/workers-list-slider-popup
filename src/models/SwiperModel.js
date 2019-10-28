import React, { useState } from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

import '../styles/swiper/Swiper.scss';

const SwiperModal = ({ handleClose, show, membersList }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const [index, setIndex] = useState(0);

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                <button className='btn__close' onClick={handleClose}>close</button>
                <Gallery index={index}
                    onRequestChange={i => {
                        setIndex(i);
                    }}>
                    {membersList.map((value) => (
                        <GalleryImage objectFit='contain' src={value.image} />
                    ))}
                </Gallery>
            </section>
        </div>
    )
}

export default SwiperModal;