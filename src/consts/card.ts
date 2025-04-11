import MedalEmoji from '../assets/medalEmoji.svg'
import HealtEmoji from '../assets/healtEmoji.svg'
import PigEmoji from '../assets/pigEmoji.svg'

export const EmojiCard = {

    healt: {
        id: "Salud",
        title: "Salud y Cuidado",
        description: "Criamos nuestros puercos con estrictos estándares de bienestar, alimentación balanceada y control veterinario, garantizando animales sanos y de alto rendimiento.",
        color: "bg-[#f998a9]",
        image: {
            logo: HealtEmoji,
            width: 70,
            height: 70
        }
    },

    quality: {
        id: "Porcino",
        title: "Calidad Garantizada",
        description: "Aplicamos un riguroso proceso de crianza y crecimiento, asegurando prácticas responsables que optimizan el desarrollo saludable de cada animal.",
        color: "bg-[#addeb0]",
        image: {
            logo: PigEmoji,
            width: 70,
            height: 70
        }
    },

    medal: {
        id: "Compra",
        title: "Facilidad de Compra",
        description: "Ofrecemos un proceso de adquisición simple y accesible, adaptado a las necesidades de nuestros clientes para brindar una experiencia sin complicaciones.",
        color: "bg-[#f9de99]",
        image: {
            logo: MedalEmoji,
            width: 70,
            height: 70
        }
    }
}