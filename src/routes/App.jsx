import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@templates/Home';
import NotFound from '@templates/NotFound';
import Layout from '@containers/Layout';
import Login from '@templates/Login';
import PasswordRecovery from '@templates/PasswordRecovery';
import SendEmail from '@templates/SendEmail';
import NewPassword from '@templates/NewPassword';
import MyAccount from '@templates/MyAccount';
import CreateAccount from '@templates/CreateAccount';
import Checkout from '@templates/Checkout';
import Orders from '@templates/Orders';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.module.css';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState} >
       <BrowserRouter basename='/react-shop' > {/* basename='/react-shop' */}
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/recovery-password' element={<PasswordRecovery/>} />
            <Route exact path='/send-email' element={<SendEmail/>} />
            <Route exact path='/new-password' element={<NewPassword/>} />
            <Route exact path='/account' element={<MyAccount/>} />
            <Route exact path='/signup' element={<CreateAccount/>} />
            <Route exact path='/checkout' element={<Checkout/>} />
            <Route exact path='/orders' element={<Orders/>} /> 
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;