<script setup lang="ts">
import ErrorComponent from '~/shared/components/ErrorComponent/ErrorComponent.vue';
import LoadingComponent from '~/shared/components/LoadingComponent/LoadingComponent.vue';
import { useStore } from '~/store/productStore';

const ProductView = defineAsyncComponent({
    loader: () => import('~/modules/product/views/ProductView/ProductView.vue'),
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    delay: 100,
    timeout: 2000,
    suspensible: false
});
const route = useRoute()
const routeParam = computed(() => route.params)
const { fetchProduct } = useStore();

await useAsyncData(
    `product-${route.params.product}`,
    () => fetchProduct(route.params.product as string),
    {
        watch: [routeParam],
        deep: true
    }
);

</script>
<template>
    <ProductView />
</template>