import type { Social } from '../types/social'

import Instagram from "../assets/instagram.svg"
import Facebook from "../assets/facebook.svg"
import TikTok from "../assets/tiktok.svg"
import WhatsApp from "../assets/whatsapp.svg"

export const SOCIAL: Social[] = [
    {
        id: "instagram",
        name: "Instagram",
        url: "https://www.instagram.com/granjarodrizoficial/",
        label: "granjarodrizoficial",
        image: {
            logo: Instagram,
            width: 24,
            height: 24
        }
    },
    {
        id: "facebook",
        name: "Facebook",
        url: "https://www.facebook.com/GranjaRodriz/",
        label: "granjarodriz",
        image: {
            logo: Facebook,
            width: 24,
            height: 24
        },
    },

    {
        id: "tiktok",
        name: "TikTok",
        url: "https://www.tiktok.com/@granjaporcicolarodriz",
        label: "granjaporcicolarodriz",
        image: {
            logo: TikTok,
            width: 24,
            height: 24
        }
    },
    {
        id: "whatsapp",
        name: "WhatsApp",
        url: "https://api.whatsapp.com/send?phone=5217721199599",
        label: "+5217721199599",
        image: {
            logo: WhatsApp,
            width: 24,
            height: 24
        }
    }
]