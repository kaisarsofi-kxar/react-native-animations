import { Dimensions } from "react-native";

export const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const CAROUSEL_ITEM_SIZE = SCREEN_WIDTH * 0.24;
export const SPACING = 12;
export const SCROLL_EVENT_THROTTLE = 16;
export const PADDING_HORIZONTAL = (SCREEN_WIDTH - CAROUSEL_ITEM_SIZE) / 2;
export const LIST_HEIGHT = CAROUSEL_ITEM_SIZE * 2;
export const ITEM_TOTAl_SIZE = CAROUSEL_ITEM_SIZE + SPACING;
