import { Redirect } from "expo-router";

const App = () => {
  return <Redirect href="/home" />;

  // return (
  //   <SafeAreaView>
  //     <View className="mt-6 mx-2.5">
  //       <Text className="text-3xl font-work-black text-primary">
  //         Hola mundo
  //       </Text>
  //       <Text className="text-3xl text-secondary-100">Hola mundo</Text>

  //       <Link href="/products">Productos</Link>
  //     </View>
  //   </SafeAreaView>
  // );
};

export default App;
