import { FC } from "react";
import { View, Image, Text } from "react-native";
import { Product } from "../../../../shared/interfaces/product";
import { styles } from "./styles";

interface ProductItemProps {
  product: Product;
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">{product.name}</Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">{product.description}</Text>
      </View>
    </View>
  );
};
