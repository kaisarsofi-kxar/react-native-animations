import { Text, View } from "react-native";
import { Checkbox } from "./checkbox.components";
import { useCuisines } from "./checkbox.hooks";

export function CheckboxInteractions() {
  const { cuisines, toggleCuisine } = useCuisines();
  return (
    <View className="flex-1 bg-background pt-6">
      <Text className="font-bold text-2xl text-center text-black dark:text-white">
        What are your favourite cuisines?
      </Text>
      <View className="pl-6 flex-row flex-wrap gap-3 pr-4 mt-6 ">
        {cuisines.map((cuisine) => {
          return (
            <Checkbox
              key={cuisine.id}
              label={cuisine.name}
              checked={cuisine.selected}
              onPress={() => {
                toggleCuisine(cuisine.id);
              }}
            />
          );
        })}
      </View>
    </View>
  );
}
