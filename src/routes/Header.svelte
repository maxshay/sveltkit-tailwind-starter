<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav class="bg-black font-bold">
		<ul class="flex">
			<li class="p-4" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li class="p-4" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/products">Products</a>
			</li>
		</ul>
	</nav>
</header>
