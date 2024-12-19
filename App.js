import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Temp from "./Temp";
import UserListScreen from "./screens/UserListScreen";
import UserDetailsScreen from "./screens/UserDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen
          name="List"
          component={UserListScreen}
          options={{ headerStyle: { backgroundColor: "#FFE1BA" } }}
        />
        <Stack.Screen
          name="Details"
          component={UserDetailsScreen}
          options={{ headerStyle: { backgroundColor: "#CEE6F2" } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
