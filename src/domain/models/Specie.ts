import { Entity } from '../../shared/domain/Entity'

export interface SpecieProps {
    colloquialName: string
    scientificName: string
    habitat: string
}

export class Specie extends Entity<SpecieProps> {

    private constructor(props: SpecieProps, id?: string) {
        super(props, id)
    }

    static create(props: SpecieProps): Specie {
        const specie = new Specie(props)

        return specie
    }

    static getValue(specie: Specie): SpecieProps {
        return specie.props
    }
}