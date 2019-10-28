import React, { useState, useEffect } from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

import '../styles/swiper/Swiper.scss';

const SwiperModal = ({ handleClose, show, membersList, curr_idx }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(parseInt(curr_idx));
    }, [curr_idx])

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                <button className='btn__close' onClick={handleClose}>close</button>
                <Gallery index={index}
                    //index variable above is responsible for "which image is displayed from the list"
                    onRequestChange={i => {
                        setIndex(i);
                    }}>
                    {membersList.map((value, index) => (
                        <GalleryImage objectFit='contain' src={value.image} key={index} />
                    ))}
                </Gallery>
            </section>
        </div>
    )
}

export default SwiperModal;