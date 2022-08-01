import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import './Header.css';

const links = [
    {
        name: 'Чем мы занимаемся',
        id: 'AboutBlock',
    },
    {
        name: 'Сделать заказ',
        id: 'WorksBlock',
    },
    {
        name: 'Прайс-лист',
        id: 'PriceList',
    },
];

const scrollToElement = id => {
    const element = document.getElementById(id);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};

const Header = () => {
    const {pathname} = useLocation();

    if (pathname === '/') {
        return (
            <header>
                <div className="header-container">
                    <div className="header-logo"/>
                    <div className="header-links">
                        {links.map(({name, id}) => (
                            <div
                                key={id}
                                className="header-link"
                                onClick={() => scrollToElement(id)}
                            >
                                {name}
                            </div>
                        ))}
                        <Link to="/catalog" className="header-link">Каталог</Link>
                        <Link to="/order-status" className="header-link">Проверить заказ</Link>
                    </div>
                    <button className="header-btn" onClick={() => scrollToElement('footer')}>Связаться с нами</button>
                </div>
            </header>
        );
    }

    return (
        <header>
            <Link to="/" className={`header-link-back`}>Вернуться назад</Link>
        </header>
    );
};

export default Header;
