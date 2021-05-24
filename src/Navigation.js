import React from 'react';
// import {
//   createAppContainer
// } from 'react-navigation';
// import {
//   createMaterialTopTabNavigator
// } from 'react-navigation-tabs';
// import {
//   createStackNavigator
// } from 'react-navigation-stack';

// //Import External Files
// import FirstPage from './Screens/Tabs/tabOne';
// import SecondPage from './Screens/Tabs/tabTwo';
// import ThirdPage from './Screens/Tabs/tabThree';

// const TabScreen = createMaterialTopTabNavigator(
//   {
//     General: { screen: FirstPage },
//     Technology: { screen: SecondPage },
//     Top_News_US: { screen: ThirdPage },
//   },
//   {
//     tabBarPosition: 'top',
//     swipeEnabled: true,
//     animationEnabled: true,
//     tabBarOptions: {
//       activeTintColor: '#FFFFFF',
//       inactiveTintColor: '#F8F8F8',
//       style: {
//         backgroundColor: '#633689',
//       },
//       labelStyle: {
//         textAlign: 'center',
//       },
//       indicatorStyle: {
//         borderBottomColor: '#87B56A',
//         borderBottomWidth: 2,
//       },
//     },
//   }
// );

// //making a StackNavigator to export as default
// const App = createStackNavigator({
//   TabScreen: {
//     screen: TabScreen,
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#633689',
//       },
//       headerTintColor: '#FFFFFF',
//       title: 'TabExample',
//     },
//   },
// });
// export default createAppContainer(App);