import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div id="footer" className="footer-container">
                <div className="footer-info-blocks">
                    <div className="footer-info">Ждем в гости:</div>
                    <div className="footer-info-text">Россия, г.Омск, улица Проспект мира, 11</div>
                </div>
                <div className="footer-info-blocks">
                    <div className="footer-info">Позвоните нам:</div>
                    <div className="footer-info-text">+7 994 938 06 83</div>
                </div>
                <div className="footer-info-blocks">
                    <div className="footer-info">График работы:</div>
                    <div className="footer-info-text">Пн-Пт:  10:00 - 16:00</div>
                </div>
                <div className="footer-links">
                    <div className="vk-logo" />
                    <div className="tg-logo" />
                    <div className="inst-logo" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
