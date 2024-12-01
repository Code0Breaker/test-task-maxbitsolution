import type { IDrinkResponse } from "~/store/types";

export type IDrink = Omit<IDrinkResponse, `strIngredient${number}`> & {
    ingredients: string[];
  };