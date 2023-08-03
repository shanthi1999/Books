import React from 'react';

const Card = ({ thumbnailSrc, title, discount, price }) => {
    return (
        <div className="bg-white rounded-lg py-1 mx-1" style={{border:"1px solid #e5e5e5"}}>
            <img src={thumbnailSrc} alt={title} className="w-full h-40 object-cover" />
            <h2 className="text-base md:text-lg lg:text-xl font-semibold p-2">{title}</h2>
            <div className="flex justify-between items-center p-2">
                <p className="text-red-500 font-semibold">{discount}% off</p>
                <p className="text-gray-700 text-lg font-semibold">${price}</p>
            </div>
        </div>
    );
};

export default Card;
