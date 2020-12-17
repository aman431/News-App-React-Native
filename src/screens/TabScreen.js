import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, View, Left, Right, Body, Title } from 'native-base';
import Tab1 from './Tabs/tab1';
import Tab2 from './Tabs/tab2';
import Tab3 from './Tabs/tab3';
export default class TabsExample extends Component {

  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'red'}} hasTabs>
            <Left />
            <Left />
            <Left />
            <Body>
              <Title style={{color:'white'}}>News App</Title>
            </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab 
           tabStyle={{backgroundColor:'red'}}
           activeTabStyle={{backgroundColor:'red'}} 
           textStyle={{color:'white'}}
           heading="General">
            <Tab1 />
          </Tab>
          <Tab 
          tabStyle={{backgroundColor:'red'}} 
          activeTabStyle={{backgroundColor:'red'}} 
          textStyle={{color:'white'}}
          heading="Bussiness">
            <Tab2 />
          </Tab>
          <Tab 
          tabStyle={{backgroundColor:'red'}} 
          activeTabStyle={{backgroundColor:'red'}} 
          textStyle={{color:'white'}}
          heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}