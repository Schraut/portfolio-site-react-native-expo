import {
  Dimensions,
  Image,
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

export default function Index() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.text}>Dan Shrout</Text>
        <Text style={styles.text}>Mobile Developer</Text>
        <Image
          style={styles.img}
          resizeMode='contain'
          source={require("../assets/images/pexels-pixabay-356056.jpg")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },
  img: {
    height: height,
    width: width,
  },
});
