type LineaProducto =
    | 'Líneas Cardona'
    | 'Líneas Fundación'
    | 'Líneas Shipley x Swine'
    | 'Líneas Truck'
    | 'Líneas Hypo'
    | 'Líneas Solid Rock'
    | 'Líneas Hypor'

type CerdoId =
    | 'duroc-1'
    | 'duroc-2'
    | 'landrace'
    | 'yorkshire'
    | 'pietrain'
    | 'hampshire'
    | 'large-white'

export interface SkillRating {
    label: string
    rating: number
}

export interface CerdoBase {
    id: CerdoId
    nombre: string
    nickname: string
    linea: LineaProducto
    description: string
    image: {
        logo: any
        width: number
        height: number
    }
    price: number
    skills: SkillRating[]
}

export interface Macho extends CerdoBase {
    tipo: 'macho'
}

export interface Hembra extends CerdoBase {
    tipo: 'hembra'
}

export type Cerdo = Macho | Hembra
