import {
  Image,
  ImageSourcePropType,
  ScrollView,
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
    <View style={styles.skillItem}>
      <Image style={styles.skillIcon} resizeMode="contain" source={source} />
      <Text style={styles.skillLabel}>{title}</Text>
    </View>
  );
}

export default function About() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.profileRow}>
        <Image
          style={styles.profileImage}
          source={require("../assets/images/profile.jpeg")}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Dan Shrout</Text>
          <Text style={styles.role}>Software Engineer</Text>
          <Text style={styles.experience}>10+ Years Experience</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        I'm a software engineer with over 10 years of experience specializing in
        mobile and web development. My focus has been building production iOS,
        Android, and React Native apps — and I genuinely enjoy the craft. I've
        spent a good portion of my career in startup environments, where moving
        fast and wearing multiple hats comes with the territory. I've taken
        products from zero to production. I like staying sharp — picking up new
        frameworks, languages, and tools is something I actively seek out, not
        just endure.
      </Text>

      <View style={styles.skillsSection}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsGrid}>
          <SkillItem
            source={require("../assets/images/expo-icon-symbol.png")}
            title="Expo"
          />
          <SkillItem
            source={require("../assets/images/react-logo.png")}
            title="React Native"
          />
          <SkillItem
            source={require("../assets/images/typescript-icon.png")}
            title="TypeScript"
          />
          <SkillItem
            source={require("../assets/images/javascript.png")}
            title="JavaScript"
          />
          <SkillItem
            source={require("../assets/images/nodejs-icon.png")}
            title="Node.js"
          />
          <SkillItem
            source={require("../assets/images/redux-icon.png")}
            title="Redux"
          />
          <SkillItem
            source={require("../assets/images/apple-icon.png")}
            title="iOS"
          />
          <SkillItem
            source={require("../assets/images/swift-icon.png")}
            title="Swift"
          />
          <SkillItem
            source={require("../assets/images/android-icon.png")}
            title="Android"
          />
          <SkillItem
            source={require("../assets/images/kotlin_icon.png")}
            title="Kotlin"
          />
          <SkillItem
            source={require("../assets/images/git-icon.png")}
            title="Git"
          />
          <SkillItem
            source={require("../assets/images/firebase-icon.png")}
            title="Firebase"
          />
          <SkillItem
            source={require("../assets/images/azure-icon.png")}
            title="Azure"
          />
          <SkillItem
            source={require("../assets/images/ruby-icon.png")}
            title="Ruby"
          />
          <SkillItem
            source={require("../assets/images/postgresql-icon.png")}
            title="PostgreSQL"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  content: {
    padding: 24,
    gap: 24,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  profileImage: {
    height: 110,
    width: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: "#333",
  },
  profileInfo: {
    flex: 1,
    gap: 4,
  },
  name: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
  },
  role: {
    color: "#aaa",
    fontSize: 16,
    fontWeight: "500",
  },
  experience: {
    color: "#666",
    fontSize: 14,
  },
  bio: {
    color: "#ccc",
    fontSize: 17,
    lineHeight: 26,
  },
  skillsSection: {
    gap: 16,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  skillItem: {
    width: 100,
    alignItems: "center",
    backgroundColor: "#111",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
    gap: 8,
    borderWidth: 1,
    borderColor: "#222",
  },
  skillIcon: {
    height: 48,
    width: 48,
  },
  skillLabel: {
    fontSize: 13,
    color: "#ddd",
    textAlign: "center",
  },
});
