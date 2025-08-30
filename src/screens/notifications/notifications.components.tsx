import { Image } from "expo-image";
import { Text, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { AVATAR_SIZE, ITEM_SIZE } from "./notifications.constants";

export function NotificationItem({
  notification,
  index,
  scrollY,
}: {
  notification: {
    key: string;
    image: string;
    name: string;
    jobTitle: string;
    email: string;
  };
  index: number;
  scrollY: SharedValue<number>;
}) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollY.value,
            [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 3)],
            [1, 1, 1, 0],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      className="flex-row gap-4 p-5 mb-5 bg-white/80 rounded-xl"
      style={[
        animatedStyle,
        {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 20,
        },
      ]}
    >
      <Image
        source={{ uri: notification.image }}
        style={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
        className="rounded-full "
      />
      <View className="flex-1">
        <Text className="text-xl font-extrabold ">{notification.name}</Text>
        <Text className="opacity-70">{notification.jobTitle}</Text>
        <Text className="text-sm text-[#0099cc] opacity-80">
          {notification.email}
        </Text>
      </View>
    </Animated.View>
  );
}
