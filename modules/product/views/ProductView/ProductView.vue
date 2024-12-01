<script setup lang="ts">
import { useStore } from '~/store/productStore';
const { product } = useStore();
</script>

<template>
    <div class="drink-page">
        <template v-if="product">
            <div class="drink-header">
                <div class="drink-details">
                    <h1>{{ product?.strDrink }}</h1>
                    <p><strong>Category:</strong> {{ product?.strCategory }}</p>
                    <p><strong>Alcoholic:</strong> {{ product?.strAlcoholic }}</p>
                    <p><strong>Glass:</strong> {{ product?.strGlass }}</p>
                </div>
                <div class="drink-image">
                    <img :src="product?.strDrinkThumb" :alt="product?.strCategory" />
                </div>
            </div>

            <div class="drink-instructions">
                <h2>Instructions</h2>
                <p>{{ product?.strInstructions }}</p>
            </div>

            <div class="drink-ingredients">
                <h2>List of Ingredients</h2>
                <ul>
                    <li v-for="ingredient of product?.ingredients" :key="ingredient">
                        <strong>{{ ingredient }}</strong>
                    </li>
                </ul>
            </div>
        </template>
        <template v-else>
      <div class="no-data">
        <h2>No Data Found</h2>
        <p>Sorry, we couldn't find any details for this product.</p>
      </div>
    </template>
    </div>
</template>

<style lang="scss">
@import url('./style.scss');
</style>