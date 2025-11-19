import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text className="text-3xl">Hola mundo</Text>

        <Text className="text-3xl font-work-black">Hola mundo</Text>
        <Text className="text-3xl ">Hola mundo</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
