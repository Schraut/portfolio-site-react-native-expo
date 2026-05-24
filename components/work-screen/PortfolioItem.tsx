import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface PortfolioItemProps {
  isAppStillPublished?: boolean;
  sourceAppImage: any;
  title: string;
  openPressAppStoreLink?: () => void;
  openPressGooglePlayLink?: () => void;
}

export default function PortfolioItem({
  isAppStillPublished = true,
  sourceAppImage,
  title,
  openPressAppStoreLink,
  openPressGooglePlayLink,
}: PortfolioItemProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.contentRow}>
        <View style={styles.appIconShadow}>
          <Image style={styles.appIcon} source={sourceAppImage} />
        </View>

        <View style={styles.techIcons}>
          <Image
            style={styles.techIcon}
            resizeMode="contain"
            source={require("../../assets/images/react-native-icon.png")}
          />
          <Image
            style={styles.techIcon}
            resizeMode="contain"
            source={require("../../assets/images/expo-icon.png")}
          />
        </View>
      </View>

      {isAppStillPublished ? (
        <View style={styles.storeLinks}>
          <Pressable
            onPress={openPressAppStoreLink}
            style={({ pressed }) => [
              styles.storeBadgeWrap,
              pressed && styles.pressed,
            ]}
          >
            <Image
              style={styles.storeBadge}
              resizeMode="contain"
              source={require("../../assets/images/app-store-badge/512x512.png")}
            />
          </Pressable>

          <Pressable
            onPress={openPressGooglePlayLink}
            style={({ pressed }) => [
              styles.storeBadgeWrap,
              pressed && styles.pressed,
            ]}
          >
            <Image
              style={styles.storeBadge}
              resizeMode="contain"
              source={require("../../assets/images/google-play-badge/512x512.png")}
            />
          </Pressable>
        </View>
      ) : (
        <Text style={styles.deprecated}>This app is no longer available.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 400,
    width: 400,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    margin: 16,
    gap: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    color: "#111",
    fontSize: 22,
    fontWeight: "600",
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  appIconShadow: {
    borderRadius: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  appIcon: {
    height: 120,
    width: 120,
    borderRadius: 28,
  },
  techIcons: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  techIcon: {
    height: 56,
    width: 56,
  },
  storeLinks: {
    flexDirection: "row",
    gap: 12,
  },
  storeBadgeWrap: {
    borderRadius: 8,
    overflow: "hidden",
  },
  storeBadge: {
    height: 148,
    width: 148,
  },
  pressed: {
    opacity: 0.65,
  },
  deprecated: {
    color: "#888",
    fontSize: 14,
    fontStyle: "italic",
  },
});
