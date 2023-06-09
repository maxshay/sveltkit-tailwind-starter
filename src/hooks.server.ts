import { pb } from "$lib/server/pocketbase"

export async function handle({ event, resolve }) {
    event.locals.pb = pb
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

    if (event.locals.pb.authStore.isValid) {
        event.locals.user = structuredClone(event.locals.pb.authStore.model)
    } else {
        event.locals.user = null
    }

    const response = await resolve(event)
    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }))

    return response
}
