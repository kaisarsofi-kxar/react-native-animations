import { Image } from "expo-image";
import { cssInterop } from "nativewind";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { CAROUSEL_ITEM_SIZE } from "./gallery-modal.constants";

cssInterop(Image, { className: "style" });

export function CarousalItem({
  imageUrl,
  index,
  scrollX,
}: {
  imageUrl: string;
  index: number;
  scrollX: SharedValue<number>;
}) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [CAROUSEL_ITEM_SIZE / 3, 0, CAROUSEL_ITEM_SIZE / 3]
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        animatedStyle,
        { width: CAROUSEL_ITEM_SIZE, height: CAROUSEL_ITEM_SIZE },
      ]}
      className={"rounded-full"}
    >
      <Image
        className="flex-1 rounded-full"
        source={{ uri: imageUrl }}
        style={{ width: CAROUSEL_ITEM_SIZE, height: CAROUSEL_ITEM_SIZE }}
      />
    </Animated.View>
  );
}
