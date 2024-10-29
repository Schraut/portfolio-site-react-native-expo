import Header from "@/components/Header";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Stack.Screen name='index' />
      <Stack.Screen name='about' />
      <Stack.Screen name='work' />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "blue",
    fontSize: 30,
  },
  img: {
    height: 180,
    width: 180,
    borderRadius: 140,
  },
  introContainer: {
    height: 500,
    backgroundColor: "grey",
  },
  portfolio: {
    //height: 500,
    // backgroundColor: "#000",
  },
  techStack: {
    height: 500,
    backgroundColor: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
