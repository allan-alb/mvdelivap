import { FC } from "react";
import { SectionList, Text } from "react-native";
import { useHomeModel } from "./home.model";
import { ProductItem } from "./components/ProductItem";
import { styles } from "./styles";
import { Header } from "./components/Header";

export const HomeView: FC<ReturnType<typeof useHomeModel>> = ({
  products,
  isFetching,
  hasNextPage,
  isFetchingNextPage,
  selectedCategory,
  fetchNextPage,
  handleCategorySelect,
}) => {
  return (
    <SectionList
      sections={products}
      keyExtractor={(item) => item.id.toString()}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
      renderItem={({ item }) => (
        <ProductItem key={`product-${item.id.toString()}`} product={item} />
      )}
      onEndReached={() => {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage?.();
        }
      }}
      ListHeaderComponent={
        <Header
          handleCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory ?? ""}
        />
      }
      onEndReachedThreshold={0.5}
      style={styles.container}
    />
  );
};
