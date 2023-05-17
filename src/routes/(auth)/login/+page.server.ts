import { error, redirect } from '@sveltejs/kit'

export const actions = {
    login: async function ({ locals, request }) {
        const body = Object.fromEntries(await request.formData())

        try {
            await locals.pb.collection('users').authWithPassword(body.email as string, body.password as string)
            // await locals.pb.collection('users').confirmVerification(body.email as string)
        } catch (e) {
            console.log(" > error:", e)
            throw error(500, "Something went wrong logging in")
        } finally {
            throw redirect(303, "/")
        }
    }
}