import React from 'react'

const FooterMenu = () => {
    return (
        <div className="flex flex-row justify-between flex-wrap">
            <div className="w-[16.6%]">
                <p className="footer-title">ABOUT BHARATH BANK</p>
                <ul>
                    <li><a className='footer-link' href="/">Leadership</a></li>
                    <li><a className='footer-link' href="/">Careers</a></li>
                    <li><a className='footer-link' href="/">investor relations</a></li>
                    <li><a className='footer-link' href="/">Safe Banking</a></li>
                    <li><a className='footer-link' href="/">Management of Branches</a></li>
                </ul>
            </div>
            <div className="w-[16.6%]">
                <p className="footer-title">OUR PRODUCTS</p>
                <ul>
                    <li><a className='footer-link' href="/">Personal Loan</a></li>
                    <li><a className='footer-link' href="/">Credit Cards</a></li>
                    <li><a className='footer-link' href="/">Savings Account</a></li>
                    <li><a className='footer-link' href="/">Fixed Deposits</a></li>
                    <li><a className='footer-link' href="/">Nri Accounts</a></li>
                </ul>
            </div>
            <div className="w-[16.6%]">
                <p className="footer-title">EXPLORE</p>
                <ul>
                    <li><a className='footer-link' href="/">Shedule Of charges</a></li>
                    <li><a className='footer-link' href="/">Cyber Security Awareness</a></li>
                    <li><a className='footer-link' href="/">Intrest Rates</a></li>
                    <li><a className='footer-link' href="/">Offers</a></li>
                    <li><a className='footer-link' href="/">Internet Banking</a></li>
                </ul>
            </div>
            <div className="w-[16.6%]">
                <p className="footer-title">Co-Founders</p>
                <ul>
                    <li><a className='footer-link' href="/">VENKATA SAI KRISHNA</a></li>
                    <li><a className='footer-link' href="/">MANOBHI RAMCHARAN</a></li>
                    <li><a className='footer-link' href="/">SIVA MANI</a></li>
              </ul>
            </div>
                    </div>
    )
}

export default FooterMenu