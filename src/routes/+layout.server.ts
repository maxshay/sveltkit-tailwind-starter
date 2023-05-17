export function load({ locals }) {
    const data: { user: App.Locals["user"] } = { user: null }

    if (locals.user) {
        data.user = locals.user
        return data
    }

    return data
}
