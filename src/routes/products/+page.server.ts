import type { PageServerLoad } from './$types';
import { SECRET_BACKEND_API_URL } from '$env/static/private';

import type { ProductsResponse } from './product.model';

export const load = (async () => {
	const res = await fetch(`${SECRET_BACKEND_API_URL}/products?limit=50`);
	const data = (await res.json()) as ProductsResponse;
	return data;
}) satisfies PageServerLoad;
