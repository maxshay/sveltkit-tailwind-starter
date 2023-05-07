<script lang="ts">
	import type { ProductsResponse } from './product.model';
	import ProductCard from './ProductCard.svelte';
	export let data: ProductsResponse;
</script>

<section class="m-4">
	<div class="flex flex-wrap gap-4">
		{#each data.products as product}
			<ProductCard {product} />
		{/each}
	</div>
</section>
