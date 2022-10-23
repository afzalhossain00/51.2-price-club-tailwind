import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Awesome features',
                'Extra features',
                'Unnecessary features',
                'Faltu features',
                'Ajaira features',
                'Hudai features',
                'Never use features'
            ]
        },
        {
            id: 2, name: 'Basic', price: 9.99, features: [
                'Everything free',
                'Awesome features',
                'Extra features',
                'Unnecessary features',
                'Faltu features',
                'Ajaira features',
                'Never use features'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                'Everything premium',
                'Awesome features',
                'Extra features',
                'Faltu features',
                'Ajaira features',
                'Hudai features',
                'Never use features'
            ]
        },
    ]
    return (
        <div>
            <h2 className='text-5xl p-12 font-semibold bg-indigo-300 text-white'>Best Deal of the City</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-6'>
                {
                    pricingOption.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;