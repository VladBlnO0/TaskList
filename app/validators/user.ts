import vine from '@vinejs/vine'

const email = () => vine.string().email().maxLength(254)

export const signupValidator = vine.create({
  username: vine.string().nullable(),
  email: email().unique({ table: 'users', column: 'email' }),
})
