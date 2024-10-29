import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHOBRNmBd_tRHf6acgf82t3gAX85ccXQE",
  authDomain: "dan-shrout-portfolio.firebaseapp.com",
  databaseURL: "https://dan-shrout-portfolio.firebaseio.com",
  projectId: "dan-shrout-portfolio",
  storageBucket: "dan-shrout-portfolio.appspot.com",
  messagingSenderId: "594370423558",
  appId: "1:594370423558:web:75950982e3e35d84890c87",
  measurementId: "G-67G7Y7N6RC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let height = Dimensions.get("window").height;
let width = Dimensions.get("window").width;

interface MyLinkProps {
  onPress: () => void;
  image: any;
}
function MyLink({ onPress, image }: MyLinkProps) {
  return <Pressable onPress={onPress}>{image}</Pressable>;
}

export default function Index() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <View />
      <View style={{ paddingLeft: 30 }}>
        <Text style={styles.nameText}>Dan Shrout</Text>
        <Text style={styles.titleText}>Mobile Developer</Text>
      </View>

      <View style={styles.bottomView}>
        <View style={styles.links}>
          <MyLink
            image={
              <Image
                style={styles.iconImg}
                source={require("../assets/images/linkedin.png")}
              />
            }
            onPress={() => openLink("https://www.linkedin.com/in/dan-shrout/")}
          />
          <MyLink
            image={
              <Image
                style={styles.iconImg}
                source={require("../assets/images/github.png")}
              />
            }
            onPress={() => openLink("https://github.com/Schraut")}
          />
          {/* <MyLink
            onPress={() => openLink("https://www.linkedin.com/in/dan-shrout/")}
            source={require("../assets/images/linkedin.png")}
          />
          <MyLink
            onPress={() => openLink("https://github.com/Schraut")}
            source={require("../assets/images/github.png")}
          /> */}
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#fff" }}>
            This website was built with React Native and Expo.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000",
  },
  nameText: {
    color: "#fff",
    fontSize: 40,
  },
  titleText: {
    color: "#fff",
    fontSize: 25,
  },
  iconImg: {
    height: 60,
    width: 60,
    // backgroundColor: "blue",
  },
  links: {
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "yellow",
  },
  bottomView: {
    paddingBottom: 30,
  },
});
