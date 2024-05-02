import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons';

import Settings from "../screens/Settings"
import Home from "../screens/Home"
import Books from "../screens/Books"

const Tab =  createBottomTabNavigator()

export default function TabRoutes(){
    return (
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    backgroundColor: "#E6E6E6",
                    borderTopWidth: 0,
                    height: 60
                },
                tabBarActiveTintColor: "#005BF5"
                }}>
            <Tab.Screen
                name= "home"
                component={Home}
                options={{
                    tabBarIcon: ({color, size, focused}) => <FontAwesome5  name={"home"} size={32} color={color} />
                }}
            />
            <Tab.Screen
                name= "books"
                component={Books}
                options={{
                    tabBarIcon: ({color, size, focused}) => <FontAwesome5 name={"book-open"} size={32} color={color} />
                }}
            />
            <Tab.Screen
                name= "config"
                component={Settings}
                options={{
                    tabBarIcon: ({color, size, focused}) => <Ionicons  name={"settings-sharp"} size={32} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}
