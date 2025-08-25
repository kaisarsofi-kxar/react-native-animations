import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  clamp,
  FadeIn,
  FadeOut,
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { GALLERY_IMAGES } from "../gallery/gallery.dummy-data";
import { CarousalItem } from "./gallery-modal.components";
import {
  ITEM_TOTAl_SIZE,
  LIST_HEIGHT,
  PADDING_HORIZONTAL,
  SCROLL_EVENT_THROTTLE,
  SPACING,
} from "./gallery-modal.constants";

export function GalleryModal() {
  const { selectedImageIndex } = useLocalSearchParams();
  const scrollX = useSharedValue(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Number(selectedImageIndex)
  );

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = clamp(
        event.contentOffset.x / ITEM_TOTAl_SIZE,
        0,
        GALLERY_IMAGES.length - 1
      );
      const newActiveIndex = Math.round(scrollX.value);
      if (newActiveIndex !== currentImageIndex) {
        runOnJS(setCurrentImageIndex)(newActiveIndex);
      }
    },
  });

  return (
    <View className="flex-1 justify-end">
      <Pressable
        className="absolute top-4 left-4  bg-[rgba(0,0,0,0.3)] z-[1000] items-center justify-center rounded-full p-1"
        onPress={() => router.back()}
        hitSlop={10}
      >
        <Ionicons name="close" size={24} color={"white"} />
      </Pressable>
      <Animated.Image
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(500)}
        key={`${currentImageIndex}-image`}
        source={{ uri: GALLERY_IMAGES[currentImageIndex].uri }}
        className="absolute inset-0"
      />
      <Animated.FlatList
        data={GALLERY_IMAGES}
        keyExtractor={(item) => item.id}
        horizontal
        style={{ flexGrow: 0 }}
        contentContainerStyle={{
          paddingHorizontal: PADDING_HORIZONTAL,
          height: LIST_HEIGHT,
          gap: SPACING,
        }}
        getItemLayout={(_, index) => ({
          length: ITEM_TOTAl_SIZE,
          offset: ITEM_TOTAl_SIZE * index,
          index,
        })}
        initialScrollIndex={Math.max(0, currentImageIndex)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <CarousalItem imageUrl={item.uri} index={index} scrollX={scrollX} />
          );
        }}
        onScroll={onScroll}
        scrollEventThrottle={SCROLL_EVENT_THROTTLE}
        snapToInterval={ITEM_TOTAl_SIZE}
        decelerationRate="fast"
      />
    </View>
  );
}
