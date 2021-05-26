import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Left, Body, Title, DefaultTabBar } from 'native-base';
import Tab1 from './Tabs/tabOne';
import Tab2 from './Tabs/tabTwo';
import Tab3 from './Tabs/tabThree';
import { colors } from '../Constants';


const renderTabBar = (props) => {
    props.tabStyle = Object.create(props.tabStyle);
    return <DefaultTabBar {...props} />;
};

export default class TabsExample extends Component {

    render() {
        return (
            <Container>
                <Header androidStatusBarColor={colors.primary} style={{ backgroundColor: colors.accent }} hasTabs >
                    <Body>
                        <Title style={{ color: colors.secondary, alignSelf: 'center' }}>Daily News</Title>
                    </Body>
                </Header>
                <Tabs renderTabBar={renderTabBar} tabBarUnderlineStyle={{ backgroundColor: 'tomato' }}>
                    <Tab textStyle={{ color: colors.secondary }} activeTextStyle={{ color: colors.secondary }} activeTabStyle={{ backgroundColor: colors.accent }} tabStyle={{ backgroundColor: '#009387' }} heading="General">
                        <Tab1 navigationFromTab={this.props.navigation} />
                    </Tab>
                    <Tab textStyle={{ color: colors.secondary }} activeTextStyle={{ color: colors.secondary }} activeTabStyle={{ backgroundColor: colors.accent }} tabStyle={{ backgroundColor: '#009387' }} heading="Tech">
                        <Tab2 navigationFromTab={this.props.navigation} />
                    </Tab>
                    <Tab textStyle={{ color: colors.secondary }} activeTextStyle={{ color: colors.secondary }} activeTabStyle={{ backgroundColor: colors.accent }} tabStyle={{ backgroundColor: '#009387' }} heading="USA">
                        <Tab3 navigationFromTab={this.props.navigation} />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}