import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Left, Body, Title, DefaultTabBar } from 'native-base';
import Tab1 from './Tabs/tabOne';
import Tab2 from './Tabs/tabTwo';
import Tab3 from './Tabs/tabThree';

const renderTabBar = (props) => {
    props.tabStyle = Object.create(props.tabStyle);
    return <DefaultTabBar {...props} />;
};

export default class TabsExample extends Component {

    render() {
        return (
            <Container>
                <Header androidStatusBarColor="tomato" style={{ backgroundColor: '#009387' }} hasTabs >
                    <Body>
                        <Title style={{ color: 'white', alignSelf: 'center' }}>Daily News</Title>
                    </Body>
                </Header>
                <Tabs renderTabBar={renderTabBar} tabBarUnderlineStyle={{ backgroundColor: 'red' }}>
                    <Tab textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#009487' }} tabStyle={{ backgroundColor: '#009387' }} heading="General">
                        <Tab1 />
                    </Tab>
                    <Tab textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#009487' }} tabStyle={{ backgroundColor: '#009387' }} heading="Tech">
                        <Tab2 />
                    </Tab>
                    <Tab textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#009487' }} tabStyle={{ backgroundColor: '#009387' }} heading="USA">
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}