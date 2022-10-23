import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => console.log(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesLoded = data.data.data;
                const phoneData = phonesLoded.map(phone => {
                    const parts = phone.slug.split('-');
                    // console.log(parts);
                    const price = parseInt(parts[1]);
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price
                    }
                    return singlePhone;
                })
                // console.log(phoneData);
                setPhones(phoneData);
            });
    }, [])

    return (
        <BarChart
            width={500}
            height={200}
            data={phones}>

            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Legend />

            <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
    );
};

export default PhoneBar;