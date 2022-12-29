import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Checkout from '../pages/Checkout';
import CreateAccount from '../pages/CreateAccount';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import NewPassword from '../pages/NewPassword';
import NotFound from '../pages/NotFound';
import Orders from '../pages/Order';
import RecoveryPassword from '../pages/RecoveryPassword';
import SendEmail from '../pages/SendEmail';
import AppContext from '../context/AppContext';
import '../styles/global.css';
import useInitialState from '../hooks/useInitiaState';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/recovery-password' element={<RecoveryPassword />} />
                        <Route path='/recovery-password' element={<RecoveryPassword />} />
                        <Route path="/send-email" element={<SendEmail />} />
                        <Route path="/new-password" component={<NewPassword />} />
                        <Route path="/account" component={<MyAccount />} />
                        <Route path="/signup" component={<CreateAccount />} />
                        <Route path="/checkout" component={<Checkout />} />
                        <Route path="/orders" component={<Orders />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;