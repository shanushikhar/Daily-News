import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import TabsScreen from '../Screens/TabScreen'
import DetailsScreen from '../Screens/Details'


const screens = createStackNavigator({
    details: {
        screen: DetailsScreen
    },
    tabs: TabsScreen,
}, {
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default createAppContainer(screens)

