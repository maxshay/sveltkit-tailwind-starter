import PocketBase from 'pocketbase';
import { SECRET_BACKEND_API_URL } from '$env/static/private';

export const pb = new PocketBase(SECRET_BACKEND_API_URL);
