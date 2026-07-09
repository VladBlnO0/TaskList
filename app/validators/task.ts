import vine from '@vinejs/vine'

const title = () => vine.string().maxLength(254)
const description = () => vine.string()

export const taskValidator = vine.create({
  title: title(),
  description: description(),
})
