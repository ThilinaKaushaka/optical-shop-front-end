import { FrameGender } from "../../../util/item/frame/FrameGender";
import { FrameMaterial } from "../../../util/item/frame/FrameMaterial";
import { FrameShape } from "../../../util/item/frame/FrameShape";

export class FrameDto {
    id: number | null = null;
    itemId: number | null = null;
    material: FrameMaterial | null = null;
    shape: FrameShape | null = null;
    gender: FrameGender | null = null;

    constructor(
        id: number | null = null,
        itemId: number | null = null,
        material: FrameMaterial | null = null,
        shape: FrameShape | null = null,
        gender: FrameGender | null = null
    ) {
        this.id = id;
        this.itemId = itemId;
        this.material = material;
        this.shape = shape;
        this.gender = gender;
    }
}