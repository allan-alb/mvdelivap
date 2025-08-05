import { FC } from "react";
import { useHeaderModel } from "./header.model";
import { HeaderView } from "./header.view";

export interface HeaderProps {
  selectedCategory: string;
  handleCategorySelect: (category: string) => void;
}

export const Header: FC<HeaderProps> = (params) => {
  const props = useHeaderModel();

  return <HeaderView model={props} {...params} />;
};
