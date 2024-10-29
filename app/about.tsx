import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../assets/images/profile.jpeg")}
      />
      <Text style={styles.text}>Mobile Developer</Text>
      <Text style={styles.text}>
        I'm a software engineer with a background in web and mobile development
        with most of my experience working with iOS, Android, and React Native.
        I enjoy what I do and have developed a passion for it.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  img: {
    height: 180,
    width: 180,
    borderRadius: 30,
  },
  text: {
    color: "#E3E3E3",
  },
  portfolio: {
    //height: 500,
    // backgroundColor: "#000",
  },
  techStack: {
    height: 500,
    backgroundColor: "#fff",
  },
});
