import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { HomeView } from "../ViewModels/Home/home.view";
import { useHomeModel } from "../ViewModels/Home/home.model";

export default function Home() {
  const props = useHomeModel();

  return <HomeView {...props} />;
}
