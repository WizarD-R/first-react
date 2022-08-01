import React from 'react';
import './AboutBlock.css';

const AboutBlock = () => {
    return (
        <>
            <div id="AboutBlock" className="about-block-container">
                <div className="about-block-info">
                    <div className="about-block-title">Чем мы занимаемся</div>
                    <div className="about-block-text">
                        Если вы хотите изменить свой стиль, найти себя в новом образе, освежить свой гардероб или просто
                        порадовать себя новой стильной вещицей,
                        то поспешите в ателье Sew. Мы можем отшить изделие по эскизам и фото, либо по готовому образцу.
                        Изделие, выполненное специально для Вас, создаст хорошее настроение и долгое время будет
                        радовать практичностью и функциональностью применения.
                    </div>
                </div>
                <div className="about-block-logo"/>
            </div>
        </>
    );
};

export default AboutBlock;
