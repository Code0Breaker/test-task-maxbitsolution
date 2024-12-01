<script setup lang="ts">
import { routes } from '../../constants/constants';
import CategoriesList from '../../ui/CategoriesList/CategoriesList.vue';

</script>

<template>
    <CategoriesList>
        <template #list-item>
            <li v-for="route in routes" :key="route.route">
                <NuxtLink :to="route.route" class="categories__list-item">
                    {{ route.title }}
                </NuxtLink>
            </li>
        </template>
    </CategoriesList>
</template>

<style lang="scss">
@import url('./style.scss');
</style>