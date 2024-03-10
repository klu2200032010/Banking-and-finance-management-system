import React from 'react'

const Links = () => {
    const data = [
        {
            id: 1,
            img: 'cash',
            title: 'CASH LOAN',
            theme: 'light'
        },
        {
            id: 2,
            img: 'percentage',
            title: 'DEPOSITS',
            theme: 'light'
        },
        {
            id: 3,
            img: 'till',
            title: 'MONEY TRANSFERS',
            theme: 'light'
        },
        {
            id: 4,
            img: 'arrows',
            title: 'CASHBACK',
            theme: 'light'
        },
        {
            id: 5,
            img: 'discount',
            title: 'Campaigns',
            theme: 'light'
        },
        {
            id: 6,
            img: 'card',
            title: 'PREMIUM CARDS',
            theme: 'dark'
        }
    ]
    return (
        <section className='container mx-auto px-8'>
            <h2 className='text-2.5xl font-semibold text-gray-800 mb-7'>QUICK LINKS</h2>
            <div className="flex w-full justify-between flex-wrap">
                {data.map(e => {
                    return <div key={e.id} className={`max-h-full overflow-hidden cursor-pointer min-w-1/7 flex flex-col px-5 pt-5 pb-3 rounded-3xl ${e.theme === 'light' ? 'bg-cardBg-300' : 'bg-cardBg-800'} group`}>
                        <p className={`font-medium ${e.theme === 'light' ? 'text-black' : 'text-white'}`}>{e.title}</p>
                        <img className={`group-hover:scale-110 transition-all duration-500 mt-9 mx-auto ${e.theme === 'light' ? 'w-3/4' : 'w-[90%] -mr-5 '}`} src={require(`../assets/images/links/${e.img}.png`)} alt={e.img} />
                    </div>
                })}
            </div>
        </section>
    )
}

export default Links;