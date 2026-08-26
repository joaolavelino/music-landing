export type Gig = {
    date: Date
    venue: string
    format: FormatKey
    region: {
        city: string
        detail?: string
    }
}

export const FORMATS = {
    solo: 'Solo',
    theAlleyOops: 'The Alley-Oops',
} as const

type FormatKey = keyof typeof FORMATS
// FormatKey vira: 'solo' | 'theAlleyOops'

export const LINKS = {
    whatsapp: 'https://wa.me/5541996974001',
    instagramSolo: 'https://instagram.com/joaoavelino.art',
    instagramDuo: 'https://instagram.com/thealleyoopscwb'

}