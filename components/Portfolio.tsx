import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface PortfolioItemProps {
  //sourceiOS: any;
  // sourceAndroid: any;
  isAppStillPublished?: boolean;
  sourceAppImage: any;
  title: string;
  openPressAppStoreLink?: () => void;
  openPressGooglePlayLink?: () => void;
}

function PortfolioItem({
  //sourceiOS,
  isAppStillPublished = true,
  sourceAppImage,
  title,
  openPressAppStoreLink,
  openPressGooglePlayLink,
}: PortfolioItemProps) {
  return (
    <View style={styles.portfolioItem}>
      <Text style={styles.portfolioTitle}>{title}</Text>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            height: 140,
            width: 140,
            shadowColor: "#000000",
            shadowOffset: {
              width: 1,
              height: 3,
            },
            shadowRadius: 5,
            shadowOpacity: 1.0,
            elevation: 5,
            borderRadius: 30,
          }}
        >
          <Image style={styles.imgAppStore} source={sourceAppImage} />
        </View>

        <View
          style={{
            height: 140,
            marginLeft: 40,
            //backgroundColor: "green"
          }}
        >
          <Image
            style={styles.imgIcon}
            resizeMode='contain'
            source={require("../assets/images/react-native-icon.png")}
          />
          <Image
            style={styles.imgIcon}
            resizeMode='contain'
            source={require("../assets/images/expo-icon.png")}
          />
        </View>
      </View>
      <View>
        {isAppStillPublished ? (
          <View style={styles.downloadLinks}>
            <Pressable onPress={openPressAppStoreLink}>
              <Image
                style={styles.imgDownloadApp}
                source={require("../assets/images/app-store-badge/512x512.png")}
              />
            </Pressable>

            <Pressable onPress={openPressGooglePlayLink}>
              <Image
                style={styles.imgDownloadApp}
                source={require("../assets/images/google-play-badge/512x512.png")}
              />
            </Pressable>
          </View>
        ) : (
          <Text style={styles.portfolioTitle}>
            This app is no longer being used.
          </Text>
        )}
      </View>
    </View>
  );
}

export default function Portfolio() {
  const openLink = (storeLink: string) => {
    Linking.openURL(storeLink);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Apps I've built using React Native & Expo
      </Text>
      <View style={styles.portfolioContainer}>
        <PortfolioItem
          title={"SEIS Tracker"}
          sourceAppImage={{
            uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/27/1f/ab/271faba4-3530-cc24-d16d-19926c7b6d26/AppIcon-0-0-1x_U007epad-0-85-220.png/460x0w.webp",
          }}
          openPressAppStoreLink={() =>
            openLink("https://apps.apple.com/us/app/seis-tracker/id1437211511")
          }
          openPressGooglePlayLink={() =>
            openLink(
              "https://play.google.com/store/apps/details?id=com.cedrsystems.seistracker&hl=en_US",
            )
          }
        />
        <PortfolioItem
          title={"STAART"}
          sourceAppImage={{
            uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c2/a7/7c/c2a77c20-7250-bb32-8301-faf392879bfc/AppIcon-0-0-1x_U007epad-0-85-220.png/460x0w.webp",
          }}
          openPressAppStoreLink={() =>
            openLink("https://apps.apple.com/us/app/staart/id6660725255")
          }
          openPressGooglePlayLink={() =>
            openLink(
              "https://play.google.com/store/apps/details?id=com.codestack.staart&hl=en",
            )
          }
        />
        <PortfolioItem
          title={"Cal Career"}
          sourceAppImage={{
            uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ef/79/67/ef79679d-4101-4534-3de0-3d0594a414ea/AppIcon-0-0-1x_U007epad-0-85-220.png/460x0w.webp",
          }}
          openPressAppStoreLink={() =>
            openLink(
              "https://apps.apple.com/us/app/california-career-center/id6504834313",
            )
          }
          openPressGooglePlayLink={() =>
            openLink(
              "https://play.google.com/store/apps/details?id=com.codestack.californiacareercenter&hl=en_US",
            )
          }
        />
        <PortfolioItem
          title={"CA Dashboard"}
          sourceAppImage={{
            uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6f/90/77/6f9077a5-c95d-60c7-e9e0-e30471abafae/AppIcon-0-0-1x_U007epad-0-85-220.png/460x0w.webp",
          }}
          openPressAppStoreLink={() =>
            openLink("https://apps.apple.com/us/app/ca-dashboard/id1469947640")
          }
          openPressGooglePlayLink={() =>
            openLink(
              "https://play.google.com/store/apps/details?id=gov.ca.cde.CADashboard&hl=en_US",
            )
          }
        />
        <PortfolioItem
          title={"Strong Start"}
          sourceAppImage={{
            uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/73/c3/3a/73c33a73-4051-cbf2-1695-2d8375acd812/AppIcon-1x_U007epad-85-220.png/460x0w.webp",
          }}
          openPressAppStoreLink={() =>
            openLink("https://apps.apple.com/us/app/strong-start/id1517861555")
          }
          openPressGooglePlayLink={() =>
            openLink(
              "https://play.google.com/store/apps/details?id=org.codestack.departmenttoolkit.strongstart&hl=en_US",
            )
          }
        />
        <PortfolioItem
          title={"CSC Live 2024"}
          sourceAppImage={{
            uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c8/41/60/c841607c-0ea3-644d-ef66-4640cddbd8e3/AppIcon-0-0-1x_U007epad-0-85-220.png/460x0w.webp",
          }}
          openPressAppStoreLink={() =>
            openLink("https://apps.apple.com/us/app/csc-live-2024/id6714479399")
          }
          openPressGooglePlayLink={() =>
            openLink(
              "https://play.google.com/store/apps/details?id=com.cedr.csclive2024",
            )
          }
        />
        <PortfolioItem
          title={"CSC Live 2023"}
          sourceAppImage={{
            uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/a7/3f/fb/a73ffb31-520c-b987-46a7-5e5599d4c707/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp",
          }}
          openPressAppStoreLink={() =>
            openLink("https://apps.apple.com/us/app/csc-live-2023/id6467466603")
          }
          openPressGooglePlayLink={() =>
            openLink(
              "https://play.google.com/store/apps/details?id=com.cedr.csclive2023&hl=en_US",
            )
          }
        />
        <PortfolioItem
          title={"CSC Live 2022"}
          sourceAppImage={{
            uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/46/ca/0b/46ca0b8b-e002-e271-6773-c98dbb1fed5b/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",
          }}
          openPressAppStoreLink={() =>
            openLink("https://apps.apple.com/us/app/csc-live-2022/id1643022755")
          }
          openPressGooglePlayLink={() =>
            openLink(
              "https://play.google.com/store/apps/details?id=com.cedr.csclive2023&hl=en_US",
            )
          }
        />
        <PortfolioItem
          title={"CAC"}
          sourceAppImage={require("../assets/images/cac.png")}
          isAppStillPublished={false}
        />
        <PortfolioItem
          title={"CAPTAIN Cadre Annual Summit"}
          sourceAppImage={require("../assets/images/captain-cadre.png")}
          isAppStillPublished={false}
        />
      </View>
      <Text style={styles.title}>
        Native Android and iOS Apps I've worked on
      </Text>
      <View style={styles.portfolioContainer}>
        <PortfolioItem
          title={"Career Surfer"}
          sourceAppImage={{
            uri: "https://play-lh.googleusercontent.com/0E3zvmXcFbq7tUHgFVay3zqcanTqUmuPBOabJf-4FBWHXPdBqhpjfopibmjk8LYIoQ=w480-h960-rw",
          }}
          openPressAppStoreLink={() =>
            openLink("https://apps.apple.com/us/app/career-surfer/id605800554")
          }
          openPressGooglePlayLink={() =>
            openLink(
              "https://play.google.com/store/apps/details?id=com.cedrsystems.careersurfer&hl=en_US",
            )
          }
        />
        <PortfolioItem
          title={"Self Screening"}
          sourceAppImage={require("../assets/images/self-screening.png")}
          openPressAppStoreLink={() =>
            openLink(
              "https://apps.apple.com/us/app/schools-self-screening/id1540141318",
            )
          }
          openPressGooglePlayLink={() =>
            openLink(
              "https://play.google.com/store/apps/details?id=org.codestack.selfscreening&hl=en_US",
            )
          }
        />
        {/* <PortfolioItem
          title={"EDJOIN Interview"}
          sourceAppImage={require("../assets/images/interview.png")}
          openPressAppStoreLink={() =>
            openLink(
              "https://apps.apple.com/us/app/edjoin-interview/id434730011",
            )
          }
          openPressGooglePlayLink={() =>
            openLink(
              "https://play.google.com/store/apps/details?id=com.cedrsystems.edjoin&hl=en_US",
            )
          }
        /> */}
        <PortfolioItem
          title={"My Stuff CAP"}
          sourceAppImage={require("../assets/images/my-stuff-cap.png")}
          isAppStillPublished={false}
        />
        <PortfolioItem
          title={"My Stuff Job Central"}
          sourceAppImage={require("../assets/images/my-stuff-job-central.png")}
          isAppStillPublished={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ///flexDirection: "row",
    backgroundColor: "#fff",
  },
  title: {
    color: "#000",
    fontSize: 30,
  },
  portfolioContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#000",
    // minHeight: 40,
  },
  portfolioItem: {
    // height: 240,
    width: 450,
    backgroundColor: "#fff",
    //borderColor: "#000",
    //borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    margin: 20,
    // shadowColor: "#fff",
    // shadowOffset: {
    //   width: 1,
    //   height: 3,
    // },
    // shadowRadius: 5,
    // shadowOpacity: 1.0,
    // elevation: 5,
  },
  portfolioTitle: {
    color: "#000",
    fontSize: 30,
  },
  imgAppStore: {
    height: 140,
    width: 140,
    borderRadius: 30,
  },
  imgAppStoreIcon: {
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  imgIcon: {
    height: 80,
    width: 80,
    // borderRadius: 10,
  },
  imgDownloadApp: {
    height: 140,
    width: 140,
  },
  downloadLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
