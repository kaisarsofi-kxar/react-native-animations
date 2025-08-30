import { Image } from "expo-image";
import { View } from "react-native";
import Animated, {
  clamp,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { NotificationItem } from "./notifications.components";
import {
  BG_IMAGE,
  CONTENT_PADDING_TOP,
  ITEM_SIZE,
  SPACING,
} from "./notifications.constants";
import { NOTIFICATIONS } from "./notifications.dummy-data";

export function Notifications() {
  const scrollY = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = clamp(
        event.contentOffset.y,
        0,
        NOTIFICATIONS.length * ITEM_SIZE
      );
    },
  });
  return (
    <View className="flex-1 bg-background ">
      <Image
        source={{ uri: BG_IMAGE }}
        className="absolute top-0 left-0 right-0 bottom-0"
        blurRadius={80}
      />
      <Animated.FlatList
        data={NOTIFICATIONS}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: CONTENT_PADDING_TOP,
        }}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        renderItem={({ item, index }) => (
          <NotificationItem
            notification={item}
            index={index}
            scrollY={scrollY}
          />
        )}
      />
    </View>
  );
}
