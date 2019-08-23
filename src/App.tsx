import React from 'react';
import './App.css';
// import { Header } from './Components/Header/Header';
// import { Container } from './Components/Container/Container';
// import Userpage from './Components/Userpage/Userpage';
// import CardOpen from './Components/CardOpen/CardOpen';
// import Layout from './Components/Layout/Layout';
// import LoginForm from './Components/LoginForm/LoginForm';
// import Total from './Components/Total/Total';
import History from './Components/History/History'

export const App: React.FC = () => {
  return (
    <div className="App Page Theme Theme_color_whitepaper-default Theme_space_default Theme_breakpoint_default Theme_size_default Theme_gap_medium Theme_menu_default">
      {/* <Header />
      <Container />
      <Userpage />
      <CardOpen />
      <Layout />
      <LoginForm />
      <Total /> */}
      <History />
    </div>
  );
}
