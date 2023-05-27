import { Entity } from '../../shared/domain/Entity'

interface DinosaurProps {
    colloquialName: string
    scientificName: string
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