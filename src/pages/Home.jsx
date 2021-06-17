import React from 'react';
import { Layout } from 'antd';
import HomeHello from '../components/Home/HomeHello';
import { NavBar, Balance, CreditCard } from '../components/Home/index';
import './../components/Home/Style/style.css';

const { Content, Footer } = Layout;

const Home = () => (
  <Layout>
    <Content className="px-3 bg-primary">
      <HomeHello className="py-2" />
      <Balance value={10} />
      <div className="py-1"></div>
      <CreditCard value={10} />
    </Content>
    <Footer>
      <NavBar className="nav" />
    </Footer>
  </Layout>
);
export default Home;
