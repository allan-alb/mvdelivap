import { SafeAreaView } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const client = new QueryClient();

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0F2A2E" }}>
      <StatusBar hidden={true} />
      <QueryClientProvider client={client}>
        <Stack
          screenOptions={{
            headerTitle: "MVVM Delivery App",
            headerShown: false,
          }}
        />
      </QueryClientProvider>
    </SafeAreaView>
  );
}
