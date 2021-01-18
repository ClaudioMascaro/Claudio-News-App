import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Newsletter from './pages/Newsletter';
import Routes from './Routes'
import GlobalStyle from './styles/global'

const App: React.FC = () => (
  <>
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
  <GlobalStyle/>
  </>
);

export default App;
