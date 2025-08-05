import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../shared/services/products.service";
import { formatProducts } from "../../shared/utils/product.utils";

export const useHomeModel = () => {
  const perPage = 5;
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

  const { data, fetchNextPage, isFetching, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products", selectedCategory],
      queryFn: ({ pageParam }) =>
        getProducts({ page: pageParam, perPage, category: selectedCategory }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, _allPages, lastPageParam) => {
        if (!lastPage || lastPageParam >= lastPage.totalPages) {
          return undefined;
        }

        return lastPageParam + 1;
      },
    });

  const products = data?.pages.flatMap((page) => page.items) ?? [];

  const handleCategorySelect = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory(undefined);
    } else {
      setSelectedCategory(category);
    }
  };

  return {
    products: formatProducts(products),
    isFetching,
    hasNextPage,
    isFetchingNextPage,
    selectedCategory,
    fetchNextPage,
    handleCategorySelect,
  };
};
