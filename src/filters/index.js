import * as language from '@/languages'

export const translate = key => language['en'][key]

export const round = value => Math.round(value)
