import React, { useState } from 'react'

const ExchangeRate = () => {
    console.log('exchangerate');
    const cash = [
        {
            id: 1,
            exchange: 'rub',
            buy_amount: '0.0255',
            buy_amount_wave: 'static',
            sale_amount: '0.028',
            sale_amount_wave: 'increasen',
            central_bank: '0.0265',
            central_bank_wave: 'increasen'
        },
        {
            id: 2,
            exchange: 'gbp',
            buy_amount: '1.885',
            buy_amount_wave: 'increasen',
            sale_amount: '1.953',
            sale_amount_wave: 'increasen',
            central_bank: '1.9242',
            central_bank_wave: 'increasen'
        },
        {
            id: 3,
            exchange: 'usd',
            buy_amount: '1.69',
            buy_amount_wave: 'static',
            sale_amount: '1.702',
            sale_amount_wave: 'static',
            central_bank: '1.7',
            central_bank_wave: 'static'
        },
        {
            id: 4,
            exchange: 'eur',
            buy_amount: '1.648',
            buy_amount_wave: 'increasen',
            sale_amount: '1.688',
            sale_amount_wave: 'increasen',
            central_bank: '1.6629',
            central_bank_wave: 'increasen'
        }
    ]
    const cashless = [
        {
            id: 1,
            exchange: 'rub',
            buy_amount: '0.0255',
            buy_amount_wave: 'static',
            sale_amount: '0.028',
            sale_amount_wave: 'increasen',
            central_bank: '0.0265',
            central_bank_wave: 'increasen'
        },
        {
            id: 2,
            exchange: 'gbp',
            buy_amount: '1.882',
            buy_amount_wave: 'increasen',
            sale_amount: '1.948',
            sale_amount_wave: 'increasen',
            central_bank: '1.9242',
            central_bank_wave: 'increasen'
        },
        {
            id: 3,
            exchange: 'usd',
            buy_amount: '1.695',
            buy_amount_wave: 'static',
            sale_amount: '1.7025',
            sale_amount_wave: 'static',
            central_bank: '1.7',
            central_bank_wave: 'static'
        },
        {
            id: 4,
            exchange: 'eur',
            buy_amount: '1.643',
            buy_amount_wave: 'increasen',
            sale_amount: '1.683',
            sale_amount_wave: 'increasen',
            central_bank: '1.6629',
            central_bank_wave: 'increasen'
        }
    ]
    const [cashActive, setCashActive] = useState(true);
    const [table, setTable] = useState(cash);
    const cashHandler = () => {
        cashActive ? setTable(cashless) : setTable(cash);
        setCashActive(!cashActive);
    }

    return (
        <div>
            <div className='flex mb-2 items-center justify-between'>
                <h2 className='text-2xl font-semibold'>Valyuta kursu</h2>
                <div className='flex'>
                    <p className='pr-3'>Nağdsız</p>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" onClick={cashHandler} />
                        <div class="w-8 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-black peer-checked:after:translate-x-[0.9rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[7px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-2.5 after:w-2.5 after:transition-all dark:border-gray-600"></div>
                    </label>
                    <p className='pl-3' >Nağd</p>
                </div>
            </div>
            <table className='w-full table-fixed border-separate border-spacing-y-2'>
                <thead>
                    <tr className='text-left'>
                    <th>Currency</th>
                    <th>Buy</th>
                    <th>Sell</th>
                    <th>Central Bank</th>

                    </tr>
                </thead>
                <tbody className='text-left'>
                    {table.map(e => {
                        return <tr className='text-left pt-10' key={e.id}>
                            <td>{e.exchange}</td>
                            <td>{e.sale_amount}</td>
                            <td>{e.buy_amount}</td>
                            <td>{e.central_bank}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ExchangeRate