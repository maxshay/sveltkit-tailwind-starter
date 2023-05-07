<script lang="ts">
	import type { Product } from './product.model';

	export let product: Product;
</script>

<div
	class="p-4 border border-white rounded-lg bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
>
	<p id={product.id + ''}>{product.title}</p>
</div>
