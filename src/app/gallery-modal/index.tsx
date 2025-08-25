import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

import { GALLERY_IMAGES } from "@/screens/gallery/gallery.dummy-data";
import { FlatList } from "react-native-gesture-handler";

export default function GalleryModal() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const image = GALLERY_IMAGES.find((g) => g.id === id) ?? GALLERY_IMAGES[0];

  return (
    <View className="flex-1">
      <FlatList
        data={GALLERY_IMAGES}
        renderItem={() => {
          return <View className="w-full h-full bg-red-500"></View>;
        }}
      />
    </View>
  );
}
