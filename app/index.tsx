import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Portfolio from "@/components/Portfolio";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 30 }}>
          Portfolio Site under construction...
        </Text>
        <MaterialIcons name='construction' size={80} color='black' />
      </View>

      <View style={styles.introContainer}>
        <Text style={styles.title}>Introduction</Text>
        <Image
          style={styles.img}
          source={require("../assets/images/profile.jpeg")}
        />
        <Text style={{}}>
          I'm a software engineer with a background in web and mobile
          development with most of my experience working with iOS, Android, and
          React Native. I enjoy what I do and have developed a passion for it.
        </Text>
      </View>
      <View style={styles.portfolio}>
        <Text style={styles.title}>Portfolio</Text>
        <Portfolio />
      </View>
      <View style={styles.techStack}>
        <Text style={styles.title}>Tech I use</Text>
      </View>
    </ScrollView>
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
    backgroundColor: "#000",
  },
  techStack: {
    height: 500,
    backgroundColor: "#fff",
  },
});
