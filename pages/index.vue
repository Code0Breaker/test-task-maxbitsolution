<script setup lang="ts">
import CategoriesListView from '~/modules/categories/views/CategoriesListView/CategoriesListView.vue';
definePageMeta({
    middleware: 'default-route-middleware'
})

</script>
<template>
    <div class="products_page">
        <CategoriesListView />
        <NuxtPage />
    </div>
</template>