import { defineStore } from "pinia"
import type { IDrinkResponse } from "./types";
import type { IDrink } from "~/shared/types";
import { buildDrinkData } from "./utils";

export const useStore = defineStore('store', {
    state: (): { product: IDrink | null } => ({
        product: null
    }),
    actions: {
        async fetchProduct(category: string) {
            try {
                const { drinks } = await $fetch<{ drinks: IDrinkResponse[] }>(
                    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${category}`
                );

                if (drinks?.length) {
                    this.product = buildDrinkData(drinks[0]);
                } else {
                    this.product = null;
                }
            } catch (error) {
                console.error("Failed to fetch product data", error);
                this.product = null;
            } finally {
                return this.product
            }
        },
    }
})