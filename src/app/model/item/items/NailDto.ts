import { NailMaterial } from "../../../util/item/nail/NailMaterial";
import { NailThreadType } from "../../../util/item/nail/NailThreadType";
import { NailUsage } from "../../../util/item/nail/NailUsage";

export class NailDto {
    id: number | null = null;
    itemId: number | null = null;
    size: string | null = null;
    isNutAndBolt: boolean | null = null;
    material: NailMaterial | null = null;
    usages: NailUsage | null = null;
    threadType: NailThreadType | null = null;

    constructor(
        id: number | null = null,
        itemId: number | null = null,
        size: string | null = null,
        isNutAndBolt: boolean | null = null,
        material: NailMaterial | null = null,
        usages: NailUsage | null = null,
        threadType: NailThreadType | null = null
    ) {
        this.id = id;
        this.itemId = itemId;
        this.size = size;
        this.isNutAndBolt = isNutAndBolt;
        this.material = material;
        this.usages = usages;
        this.threadType = threadType;
    }
}