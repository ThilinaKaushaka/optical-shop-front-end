import { LensCoating } from "../../../util/item/lens/LensCoating";
import { LensFinished } from "../../../util/item/lens/LensFinished";
import { LensMaterial } from "../../../util/item/lens/LensMaterial";
import { LensType } from "../../../util/item/lens/LensType";

export class LensDto {
    id: number | null = null;
    itemId: number | null = null;
    type: LensType ;
    material: LensMaterial ;
    coating: LensCoating ;
    finished:LensFinished;
    power: number | null = null;
    cylinder: number | null = null;
    axis: number | null = null;

    constructor(
        id: number | null = null,
        itemId: number | null = null,
        type: LensType ,
        material: LensMaterial ,
        coating: LensCoating ,
        finished:LensFinished,
        power: number | null = null,
        cylinder: number | null = null,
        axis: number | null = null
    ) {
        this.id = id;
        this.itemId = itemId;
        this.type = type;
        this.material = material;
        this.coating = coating;
        this.finished=finished;
        this.power = power;
        this.cylinder = cylinder;
        this.axis = axis;
    }
}