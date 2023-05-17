import { randomBytes } from 'node:crypto'

export function generateUsername(name: string) {
    const id = randomBytes(2).toString('hex')
    return `${name.slice(0.5)}${id}`
}