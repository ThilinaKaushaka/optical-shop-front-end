import { CleanerType } from "../../../util/item/lens-cleaner/CleanerType";

export class LensCleanerDto {
    id: number | null = null;
    itemId: number | null = null;
    volume: number | null = null;
    type: CleanerType | null = null;
    alcoholFree: boolean | null = null;
    antiFog: boolean | null = null;

    constructor(
        id: number | null = null,
        itemId: number | null = null,
        volume: number | null = null,
        type: CleanerType | null = null,
        alcoholFree: boolean | null = null,
        antiFog: boolean | null = null
    ) {
        this.id = id;
        this.itemId = itemId;
        this.volume = volume;
        this.type = type;
        this.alcoholFree = alcoholFree;
        this.antiFog = antiFog;
    }
    toArray(): (number | CleanerType | boolean | null)[] {
        return [
            this.id,
            this.itemId,
            this.volume,
            this.type,
            this.alcoholFree,
            this.antiFog
        ];
    }
}