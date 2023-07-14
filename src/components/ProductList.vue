<template>
<section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <ProductCart v-for="product in products" :key="product.id" :item="product"/>
        </div>
    </div>
</section>
</template>

<script>
import ProductCart from './ProductCart.vue';
import {mapState} from 'vuex';
export default{

    components:{
        ProductCart,
    },
    computed:{
        ...mapState(['products'])
        //products(){return this.$store.state.products;}
    },
};

</script>

<style scoped>

</style>