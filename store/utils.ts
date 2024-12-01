import type { IDrink } from "~/shared/types";
import type { IDrinkResponse } from "./types";

export const buildDrinkData = (drink: IDrinkResponse): IDrink => {
    const ingredients = Object.keys(drink).reduce<string[]>((acc, key) => {
        if (key.startsWith("strIngredient") && drink[key as keyof IDrinkResponse] !== null) {
            acc.push(drink[key as keyof IDrinkResponse] as string);
        }
        return acc;
    }, []);

    return {
        idDrink: drink.idDrink,
        strDrink: drink.strDrink,
        strCategory: drink.strCategory,
        strGlass: drink.strGlass,
        strAlcoholic: drink.strAlcoholic,
        strInstructions: drink.strInstructions,
        strDrinkThumb: drink.strDrinkThumb,
        ingredients: ingredients
    };
}