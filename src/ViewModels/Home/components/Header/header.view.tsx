import { FC } from "react";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import { useHeaderModel } from "./header.model";
import { styles } from "./styles";
import { HeaderProps } from ".";

interface HeaderViewProps extends HeaderProps {
  model: ReturnType<typeof useHeaderModel>;
}

export const HeaderView: FC<HeaderViewProps> = ({
  model,
  selectedCategory,
  handleCategorySelect,
}) => {
  const { categories } = model;

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContentContainer}
      >
        <TouchableOpacity
          key="all"
          onPress={() => handleCategorySelect("")}
          style={[
            styles.categoryButton,
            !selectedCategory && styles.categoryButtonSelected,
          ]}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.categoryText,
              !selectedCategory && styles.categoryTextSelected,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        {categories?.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <TouchableOpacity
              key={category}
              onPress={() => handleCategorySelect(category)}
              style={[
                styles.categoryButton,
                isSelected && styles.categoryButtonSelected,
              ]}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.categoryText,
                  isSelected && styles.categoryTextSelected,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
