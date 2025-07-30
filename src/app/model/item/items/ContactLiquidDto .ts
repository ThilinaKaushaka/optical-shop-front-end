import { SolutionType } from "../../../util/item/contact-lens-liquid/SolutionType";

export class ContactLiquidDto {
    id: number | null = null;
    itemId: number | null = null;
    volume: number | null = null;
    preservatives: boolean | null = null;
    type: SolutionType | null = null;

    constructor(
        id: number | null = null,
        itemId: number | null = null,
        volume: number | null = null,
        preservatives: boolean | null = null,
        type: SolutionType | null = null
    ) {
        this.id = id;
        this.itemId = itemId;
        this.volume = volume;
        this.preservatives = preservatives;
        this.type = type;
    }
    toArray(): (number | boolean | SolutionType | null)[] {
        return [
            this.id,
            this.itemId,
            this.volume,
            this.preservatives,
            this.type
        ];
    }
}