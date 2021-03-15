import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact'} span={'Contact'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.3719072724143!2d19.798017215863318!3d45.26049237909916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b11b987299d39%3A0x94427362387f325b!2sPavla%20Ivi%C4%87a%203%2C%20Novi%20Sad!5e0!3m2!1sen!2srs!4v1615842204580!5m2!1sen!2srs" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'0637205103'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'strahinja993@hotmail.com'}  title={'Email'}/>
                    <ContactItem icon={location} text1={'Pavla Ivica 3'} text2={'Serbia'} title={'Novi Sad'}/>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
