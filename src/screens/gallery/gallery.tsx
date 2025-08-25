import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Dimensions, FlatList, Pressable, View } from "react-native";

import { GALLERY_COLUMNS, GALLERY_GAP } from "./gallery.constants";
import { GALLERY_IMAGES } from "./gallery.dummy-data";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = (width - 2 * 16 - GALLERY_GAP) / GALLERY_COLUMNS;
const ITEM_HEIGHT = ITEM_WIDTH * 1.3;

export function Gallery() {
  return (
    <View className="flex-1 bg-neutral-50 dark:bg-black">
      <FlatList
        data={GALLERY_IMAGES}
        numColumns={GALLERY_COLUMNS}
        keyExtractor={(it) => it.id}
        columnWrapperStyle={{ gap: GALLERY_GAP, paddingHorizontal: 16 }}
        contentContainerStyle={{ gap: GALLERY_GAP, paddingVertical: 24 }}
        renderItem={({ item, index }) => (
          <View style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }}>
            <Pressable
              className="overflow-hidden rounded-2xl active:opacity-90"
              onPress={() =>
                router.push({
                  pathname: "/gallery-modal",
                  params: { selectedImageIndex: index },
                })
              }
            >
              <Image
                source={{ uri: item.uri }}
                style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }}
                contentFit="cover"
                transition={150}
              />
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
