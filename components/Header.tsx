import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Link href='/' style={styles.button}>
        Home
      </Link>
      <View style={styles.rightContainer}>
        <Link href='/about' style={styles.button}>
          About
        </Link>
        <Link href='/portfolio' style={styles.button}>
          Projects
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  rightContainer: {
    flexDirection: "row",
  },
  button: {
    fontSize: 20,
    //textDecorationLine: "underline",
    //color: "#fff",
    marginHorizontal: 10,
  },
});
