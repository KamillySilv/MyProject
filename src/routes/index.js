import { NavigationContainer} from "@react-navigation/native"
import TabRoutes from "./TabNavigation"

export default function Routes(){
    return(
        <NavigationContainer>
            <TabRoutes/>
        </NavigationContainer>
    )
}