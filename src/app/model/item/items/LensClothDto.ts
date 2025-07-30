import { LensClothMaterial } from "../../../util/item/lens-cloth/LensClothMaterial";
import { LensClothSize } from "../../../util/item/lens-cloth/LensClothSize";

export class LensClothDto {
    id: number | null = null;
    itemId: number | null = null;
    material: LensClothMaterial | null = null;
    size: LensClothSize | null = null;
    isAntiStatic: boolean | null = null;
    isPrinted: boolean | null = null;

    constructor(
        id: number | null = null,
        itemId: number | null = null,
        material: LensClothMaterial | null = null,
        size: LensClothSize | null = null,
        isAntiStatic: boolean | null = null,
        isPrinted: boolean | null = null
    ) {
        this.id = id;
        this.itemId = itemId;
        this.material = material;
        this.size = size;
        this.isAntiStatic = isAntiStatic;
        this.isPrinted = isPrinted;
    }
    toArray(): (number | LensClothMaterial | LensClothSize | boolean | null)[] {
        return [
            this.id,
            this.itemId,
            this.material,
            this.size,
            this.isAntiStatic,
            this.isPrinted
        ];
    }
}