import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from '../../components/Header';

// import {Container} from 'semantic-ui-react'

const BasicLayout = (props) => {
  const {children} = props;

    return ( 
    <Container fluid  className='basic-layout'>
      <Header/>
      <Container className='content'>
      {children}
      </Container>
    </Container> );
}
 
export default BasicLayout;