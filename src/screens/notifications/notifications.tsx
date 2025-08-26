import { Image } from "expo-image";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NotificationItem } from "./notifications.components";
import { BG_IMAGE, SPACING } from "./notifications.constants";
import { NOTIFICATIONS } from "./notifications.dummy-data";

export function Notifications() {
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <View className="flex-1 bg-background ">
        <Image
          source={{ uri: BG_IMAGE }}
          className="absolute top-0 left-0 right-0 bottom-0"
          blurRadius={80}
        />
        <FlatList
          data={NOTIFICATIONS}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{
            padding: SPACING,
          }}
          renderItem={({ item, index }) => (
            <NotificationItem notification={item} index={index} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
