import { Entity } from '../../shared/domain/Entity'
import { Specie } from './Specie'

export interface DinosaurProps {
    name: string
    responsible: number
    logDate: Date
    foundAtCoordinates: number
    species?: Specie
}

export class Dinosaur extends Entity<DinosaurProps> {

    private constructor(props: DinosaurProps, id?: string) {
        super(props, id)
    }

    static create(props: DinosaurProps): Dinosaur {
        const dinosaur = new Dinosaur(props)

        return dinosaur
    }

    static getValue(dinosaur: Dinosaur): DinosaurProps {
        return dinosaur.props
    }
}