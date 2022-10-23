import React from 'react';
import Features from '../Features/Features';
const PriceOption = ({ option }) => {
    const { features } = option
    return (
        <div className=' bg-indigo-300 m-3 rounded-md p-4'>
            <div>
                <h3>
                    <span className='text-6xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-gray-200'>/mon</span>
                </h3>
                <p className='text-3xl my-8'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
            }
            <button className='bg-orange-500 w-full rounded-md py-2 mt-4 text-white font-bold'>Buy Now</button>

        </div>
    );
};

export default PriceOption;