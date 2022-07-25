import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/screens/SearchScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchScreen">
        <Stack.Screen
          options={{
            title: "Business Search",
            headerTitleAlign: "center",
          }}
          name="SearchScreen"
          component={SearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
