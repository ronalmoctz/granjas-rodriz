import type { Cerdo } from '../types/porcs'


export const CERDOS: Cerdo[] = [
    // Machos
    {
        id: 'duroc-1',
        tipo: 'macho',
        nombre: 'Duroc',
        nickname: 'Bolillo',
        linea: 'Líneas Cardona',
        description: 'La raza porcina Duroc se distingue por su pelaje rojo brillante, musculatura bien desarrollada y eficiencia en la conversión alimenticia. Renombrada por su carne jugosa y marmoleada, es apreciada en la industria cárnica. Su temperamento tranquilo y adaptabilidad la convierten en una opción valiosa tanto para la cría comercial como para la producción de carne de calidad.',
        image: {
            logo: "/images/duroc.webp",
            width: 300,
            height: 300
        },
        price: 400,
        skills: [
            {
                label: 'T. Crecimiento',
                rating: 4
            },
            {
                label: 'C. Alimentación',
                rating: 5
            },
            {
                label: 'Carne Magra',
                rating: 3
            },
            {
                label: 'Calidad Carne',
                rating: 5
            },
        ]
    },
    {
        id: 'duroc-2',
        tipo: 'macho',
        nombre: 'Duroc',
        nickname: 'Ragnar',
        linea: 'Líneas Cardona',
        description: 'El cerdo Duroc es conocido por su pelaje rojo intenso y musculatura desarrollada. Destaca en la producción de carne jugosa y marmoleada, apreciada por su calidad en la industria cárnica. Su temperamento tranquilo y adaptabilidad hacen del Duroc una elección confiable tanto para cría comercial como para obtener cortes de carne premium.',
        image: {
            logo: '/images/duroc2.webp',
            width: 300,
            height: 300
        },
        price: 400,
        skills: [
            {
                label: 'T. Crecimiento',
                rating: 4.5
            },
            {
                label: 'C. Alimentación',
                rating: 5
            },
            {
                label: 'Carne Magra',
                rating: 3
            },
            {
                label: 'Calidad Carne',
                rating: 5
            },
        ]
    },
    {
        id: 'pietrain',
        tipo: 'macho',
        nombre: 'Pietrain',
        nickname: 'Pinacate',
        linea: 'Líneas Cardona',
        description: 'La raza porcina Pietrain destaca por su musculatura desarrollada y patrón moteado en blanco y negro. Conocida por su alta tasa de crecimiento y carne magra de calidad, es apreciada en la industria cárnica. Su carácter vigoroso y eficiente la convierte en una opción popular para la cría comercial.',
        image: {
            logo: '/images/pietrain.webp',
            width: 300,
            height: 300
        },
        price: 500,
        skills: [
            {
                label: 'T. Crecimiento',
                rating: 3
            },
            {
                label: 'C. Alimentación',
                rating: 4
            },
            {
                label: 'Carne Magra',
                rating: 5
            },
            {
                label: 'Calidad Carne',
                rating: 3
            },
        ]
    },
    {
        id: 'hampshire',
        tipo: 'macho',
        nombre: 'Hampshire',
        nickname: 'Bola 8',
        linea: 'Líneas Shipley x Swine',
        description: 'El cerdo Hampshire se caracteriza por su cuerpo oscuro con una banda blanca en la parte media del cuerpo y orejas erectas. Destaca en el crecimiento eficiente, carne magra y calidad de jamones. Su temperamento equilibrado y adaptabilidad lo convierten en una elección valiosa para la cría porcina comercial y la producción de carne.',
        image: {
            logo: '/images/hampshire.png',
            width: 300,
            height: 300
        },
        price: 400,
        skills: [
            {
                label: 'T. Crecimiento',
                rating: 4
            },
            {
                label: 'C. Alimentación',
                rating: 4
            },
            {
                label: 'Carne Magra',
                rating: 3
            },
            {
                label: 'Calidad Carne',
                rating: 4
            },
        ]
    },

    // Hembras
    {
        id: 'landrace',
        tipo: 'hembra',
        nombre: 'Landrace',
        nickname: 'Atomo',
        linea: 'Líneas Hypo',
        description: 'La raza porcina Landrace se destaca por su cuerpo largo, orejas caídas y piel blanca. Valiosa en la producción de carne magra y alta fertilidad, es popular en la cría comercial. Su temperamento dócil y adaptabilidad la convierten en una elección preferida para sistemas de manejo intensivo y programas de mejoramiento genético.',
        image: {
            logo: '/images/Landrace.webp',
            width: 300,
            height: 300
        },
        price: 400,
        skills: [
            {
                label: 'Lech. Camada',
                rating: 5
            },
            {
                label: 'Lech. Destetado',
                rating: 4
            },
            {
                label: 'Gan. de Peso',
                rating: 2.5
            },
            {
                label: 'Crias al año',
                rating: 4
            },
        ]
    },
    {
        id: 'yorkshire',
        tipo: 'hembra',
        nombre: 'Yorkshire',
        nickname: 'Santanero',
        linea: 'Líneas Solid Rock',
        description: 'El cerdo Yorkshire, se caracteriza por su cuerpo grande, piel blanca y orejas erectas. Reconocido por su capacidad de crecimiento eficiente y alta producción de lechones, es una raza preferida en la industria porcina. Su temperamento calmado y adaptabilidad la hacen ideal para sistemas de producción modernos y comerciales.',
        image: {
            logo: '/images/Yorkshire.webp',
            width: 300,
            height: 300
        },
        price: 400,
        skills: [
            {
                label: 'Lech. Camada',
                rating: 4.5
            },
            {
                label: 'Lech. Destetado',
                rating: 4
            },
            {
                label: 'Gan. de Peso',
                rating: 4
            },
            {
                label: 'Crias al año',
                rating: 5
            },
        ]
    },
    {
        id: 'large-white',
        tipo: 'hembra',
        nombre: 'Large White',
        nickname: 'Lutus',
        linea: 'Líneas Hypor',
        description: 'El Large White es una raza popular por su excelente capacidad reproductiva y su carne de alta calidad. Es ideal para la producción comercial.',
        image: {
            logo: '/images/large-white.png',
            width: 300,
            height: 300
        },
        price: 800,
        skills: [
            {
                label: 'Lech. Camada',
                rating: 4
            },
            {
                label: 'Lech. Destetado',
                rating: 5
            },
            {
                label: 'Gan. de Peso',
                rating: 3
            },
            {
                label: 'Crias al año',
                rating: 5
            },
        ]
    }
]