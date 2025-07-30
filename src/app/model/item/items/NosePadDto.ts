import { NosePadMaterial } from "../../../util/item/nose-pad/NosePadMaterial";
import { NosePadMountType } from "../../../util/item/nose-pad/NosePadMountType";
import { NosePadShape } from "../../../util/item/nose-pad/NosePadShape";

export class NosePadDto {
    id: number | null = null;
    itemId: number | null = null;
    material: NosePadMaterial | null = null;
    mountType: NosePadMountType | null = null;
    shape: NosePadShape | null = null;

    constructor(
        id: number | null = null,
        itemId: number | null = null,
        material: NosePadMaterial | null = null,
        mountType: NosePadMountType | null = null,
        shape: NosePadShape | null = null
    ) {
        this.id = id;
        this.itemId = itemId;
        this.material = material;
        this.mountType = mountType;
        this.shape = shape;
    }
    toArray(): (number | NosePadMaterial | NosePadMountType | NosePadShape | null)[] {
        return [
            this.id,
            this.itemId,
            this.material,
            this.mountType,
            this.shape
        ];
    }
}