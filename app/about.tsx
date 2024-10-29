import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface SkillItemProps {
  source: ImageSourcePropType | undefined;
  title: string;
}
function SkillItem({ source, title }: SkillItemProps) {
  return (
    <View
      style={{
        // justifyContent: "flex-start",
        // backgroundColor: "#fff",
        width: 120,
        alignItems: "center",
      }}
    >
      <Image style={styles.iconImg} resizeMode='contain' source={source} />
      <Text style={styles.iconText}>{title}</Text>
    </View>
  );
}

export default function About() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <Image
          style={styles.img}
          source={require("../assets/images/profile.jpeg")}
        />
        <Text style={styles.text}>
          My name is Dan Shrout. I'm a software engineer with a background in
          web and mobile development with most of my experience working with
          iOS, Android, and React Native. I enjoy what I do and have developed a
          passion for it.
        </Text>
      </View>
      <View style={{}}>
        <Text style={styles.skillsText}>Skills</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <SkillItem
            source={require("../assets/images/expo-icon-symbol.png")}
            title={"Expo"}
          />
          <SkillItem
            source={require("../assets/images/react-logo.png")}
            title={"React Native"}
          />

          <SkillItem
            source={require("../assets/images/typescript-icon.png")}
            title={"Typescript"}
          />
          <SkillItem
            source={require("../assets/images/javascript.png")}
            title={"Javascript"}
          />
          <SkillItem
            source={require("../assets/images/redux-icon.png")}
            title={"Redux"}
          />
          <SkillItem
            source={require("../assets/images/apple-icon.png")}
            title={"iOS"}
          />
          <SkillItem
            source={require("../assets/images/swift-icon.png")}
            title={"Swift"}
          />
          <SkillItem
            source={require("../assets/images/android-icon.png")}
            title={"Android"}
          />
          <SkillItem
            source={require("../assets/images/kotlin_icon.png")}
            title={"Kotlin"}
          />
          <SkillItem
            source={require("../assets/images/git-icon.png")}
            title={"Git"}
          />
          <SkillItem
            source={require("../assets/images/firebase-icon.png")}
            title={"Firebase"}
          />
          <SkillItem
            source={require("../assets/images/azure-icon.png")}
            title={"Azure"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    //alignItems: "center",
    paddingHorizontal: 20,
  },
  img: {
    height: 180,
    width: 180,
    borderRadius: 30,
  },
  text: {
    color: "#E3E3E3",
    fontSize: 20,
    marginLeft: 20,
  },
  portfolio: {
    //height: 500,
    // backgroundColor: "#000",
  },
  skillsText: {
    fontSize: 30,
    color: "#E3E3E3",
    marginTop: 30,
  },
  iconImg: {
    height: 80,
    width: 80,
  },
  iconText: {
    fontSize: 16,
    color: "#E3E3E3",
  },
});
