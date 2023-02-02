
import TabsNavigator from "./app/Navigation/BottomTabNavigation";
import StackNavigator from "./app/Navigation/StackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {

  return (
    <SafeAreaProvider>
      <TabsNavigator/>
      <StackNavigator/>
    </SafeAreaProvider>

  );
}
