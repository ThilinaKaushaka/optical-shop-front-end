import { BoxMaterial } from "../../../util/item/box/BoxMaterial";
import { BoxSize } from "../../../util/item/box/BoxSize";

export class BoxDto {
    id: number | null = null;
    itemId: number | null = null;
    material: BoxMaterial | null = null;
    size: BoxSize | null = null;
    isLockable: boolean | null = null;
    isWaterProof: boolean | null = null;

    constructor(
        id: number | null = null,
        itemId: number | null = null,
        material: BoxMaterial | null = null,
        size: BoxSize | null = null,
        isLockable: boolean | null = null,
        isWaterProof: boolean | null = null
    ) {
        this.id = id;
        this.itemId = itemId;
        this.material = material;
        this.size = size;
        this.isLockable = isLockable;
        this.isWaterProof = isWaterProof;
    }
}