import { ChainClaspType } from "../../../util/item/chain/ChainClaspType";
import { ChainMaterial } from "../../../util/item/chain/ChainMaterial";
import { ChainStyle } from "../../../util/item/chain/ChainStyle";

export class ChainDto {
    id: number | null = null;
    itemId: number | null = null;
    material: ChainMaterial | null = null;
    style: ChainStyle | null = null;
    claspType: ChainClaspType | null = null;
    length: number | null = null;

    constructor(
        id: number | null = null,
        itemId: number | null = null,
        material: ChainMaterial | null = null,
        style: ChainStyle | null = null,
        claspType: ChainClaspType | null = null,
        length: number | null = null
    ) {
        this.id = id;
        this.itemId = itemId;
        this.material = material;
        this.style = style;
        this.claspType = claspType;
        this.length = length;
    }
    toArray(): (number | ChainMaterial | ChainStyle | ChainClaspType | null)[] {
        return [
            this.id,
            this.itemId,
            this.material,
            this.style,
            this.claspType,
            this.length
        ];
    }
}