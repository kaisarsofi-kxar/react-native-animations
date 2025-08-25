import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Dimensions, FlatList, Pressable, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { GALLERY_COLUMNS, GALLERY_GAP } from "./gallery.constants";
import { GALLERY_IMAGES } from "./gallery.dummy-data";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = (width - 2 * 16 - GALLERY_GAP) / GALLERY_COLUMNS; // 16px horizontal padding
const ITEM_HEIGHT = ITEM_WIDTH * 1.4; // portrait aspect

export function Gallery() {
  return (
    <SafeAreaView className="flex-1 bg-neutral-50 dark:bg-black">
      <View className="px-4 py-3">
        <Text className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Gallery
        </Text>
        <Text className="mt-1 text-[13px] text-neutral-500 dark:text-neutral-400">
          Tap an image to preview
        </Text>
      </View>

      <FlatList
        data={GALLERY_IMAGES}
        numColumns={GALLERY_COLUMNS}
        keyExtractor={(it) => it.id}
        columnWrapperStyle={{ gap: GALLERY_GAP, paddingHorizontal: 16 }}
        contentContainerStyle={{ gap: GALLERY_GAP, paddingBottom: 24 }}
        renderItem={({ item }) => (
          <View style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }}>
            <Pressable
              className="overflow-hidden rounded-2xl active:opacity-90"
              onPress={() =>
                router.push({
                  pathname: "/gallery-modal",
                  params: { id: item.id },
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
    </SafeAreaView>
  );
}
