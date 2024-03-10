import React, { useState } from 'react';
import ExchangeRate from './ExchangeRate';
import Conversion from './Conversion';

const ExchangeSec = () => {
    const [activeExchangeRate, setActiveExchangeRate] = useState(false);
    const current = new Date();
    const currentDate = `${current.getDate()}.${current.getMonth() + 1}.${current.getFullYear()}`;

    return (
        <div className='w-full bg-cardBg-300 py-10 px-12 rounded-3xl flex flex-col justify-between'>
            {activeExchangeRate ? <ExchangeRate /> : <Conversion />}
            <div className='flex '>
                <p>The course is active until {currentDate}.</p>
                <button className='border p-2 bg-gray-300' onClick={() => setActiveExchangeRate(prevState => !prevState)}>
                    {activeExchangeRate ? "Convert" : "Return to Exchange Rate"}
                </button>
            </div>
        </div>
    );
}

export default ExchangeSec;
