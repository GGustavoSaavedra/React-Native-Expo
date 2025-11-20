import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/drawer/tabs/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          onPress={() => router.push("/drawer/tabs/profile")}
          className="mb-2"
          color="secondary"
        >
          Perfil
        </CustomButton>

        <CustomButton
          onPress={() => router.push("/drawer/tabs/settings")}
          className="mb-2"
          color="tertiary"
        >
          Ajustes
        </CustomButton>

        <Link href="/drawer/tabs/products" asChild>
          <CustomButton variant="text-only" className="mb-10" color="primary">
            Productos
          </CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
