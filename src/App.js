import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.js';
import HomePage from './pages/HomePage.js';
import AdminPage from './pages/AdminPage.js';
import CreateOrderPage from './pages/CreateOrderPage.js';
import CatalogPage from './pages/CatalogPage';
import OrderStatusPage from './pages/OrderStatusPage';
import Layout from './components/Layout/Layout';
import Context from './utils/context';

const useParamsOrder = () => {
    const [getModel, setModel] = useState('dress');
    const [getGender, setGender] = useState('female');
    const [getType, setType] = useState('model_1');

    return {
        model: { get: getModel, set: setModel },
        gender: { get: getGender, set: setGender },
        type: { get: getType, set: setType },
    };
};

function App() {
    return (
        <Context.Provider value={useParamsOrder()}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="/admin" element={<AdminPage/>}/>
                        <Route path="/create-order" element={<CreateOrderPage/>}/>
                        <Route path="/catalog" element={<CatalogPage/>}/>
                        <Route path="/order-status" element={<OrderStatusPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </div>
        </Context.Provider>
    );
}

export default App;
