export interface IDrinkResponse {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strAlcoholic:string;
    strGlass: string;
    strInstructions: string;
    [key: `strIngredient${number}`]: string | null;
    strDrinkThumb: string;
}