import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import TabsScreen from '../Screens/TabScreen'
import DetailsScreen from '../Screens/Details'

import Test from '../../test'
import Test2 from '../../test2'

// const screens = createStackNavigator({
//     details: {
//         screen: Test
//     },
//     Article: Test2,
// }, {
//     defaultNavigationOptions: {
//         headerShown: false
//     }
// })

const screens = createStackNavigator({
    tabs: TabsScreen,
    details: {
        screen: DetailsScreen
    },
}, {
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default createAppContainer(screens)

