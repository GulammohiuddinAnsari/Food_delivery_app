import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {

    let date = new Date().getFullYear()
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Tomato is your go-to snack delivery app, bringing you fresh, delicious bites whenever hunger strikes!
                        From crispy rolls and hearty sandwiches to flavorful noodles and creamy pasta — we deliver your favorites hot and fast.
                        With just a few taps, Tomato satisfies your cravings with quality food, quick service, and lots of love.
                        Hungry? Let Tomato roll in with the good stuff!.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 9712332728</li>
                        <li>gulammohiuddin0712@gmail.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className="footer-copyright">
                Copyright {date} &copy; Gulam_Mohiuddin - All Right Reserved.
            </p>
        </div>
    )
}

export default Footer