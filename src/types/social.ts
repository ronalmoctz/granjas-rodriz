type SocialId = "whatsapp" | "facebook" | "tiktok" | "instagram"
type SocialName = "WhatsApp" | "Facebook" | "TikTok" | "Instagram"

export interface Social {
    id: SocialId
    name: SocialName
    url: string
    label: string
    image: {
        logo: any
        width: number
        height: number
    }
}