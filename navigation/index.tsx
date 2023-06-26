import {ColorSchemeName} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen"
import LoginScreenV1 from "../screens/LoginScreenV1";


const Stack = createNativeStackNavigator()
export default function Index({colorScheme}: { colorScheme: ColorSchemeName }){
    return(
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme: DefaultTheme}
        >
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Login1" component={LoginScreenV1} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}