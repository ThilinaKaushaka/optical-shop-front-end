import { ContactLensDuration } from "../../../util/item/contact-lens/ContactLensDuration";
import { ContactLensMaterial } from "../../../util/item/contact-lens/ContactLensMaterial";
import { ContactLensType } from "../../../util/item/contact-lens/ContactLensType";

export class ContactLensDto {
    id: number | null = null;
    itemId: number | null = null;
    type: ContactLensType | null = null;
    duration: ContactLensDuration | null = null;
    material: ContactLensMaterial | null = null;
    waterContent: number | null = null;
    baseCurve: number | null = null;
    diameter: number | null = null;
    power: number | null = null;
    cylinder: number | null = null;
    axis: number | null = null;
    colour: string | null = null;
    uvProtection: boolean | null = null;

    constructor(
        id: number | null = null,
        itemId: number | null = null,
        type: ContactLensType | null = null,
        duration: ContactLensDuration | null = null,
        material: ContactLensMaterial | null = null,
        waterContent: number | null = null,
        baseCurve: number | null = null,
        diameter: number | null = null,
        power: number | null = null,
        cylinder: number | null = null,
        axis: number | null = null,
        colour: string | null = null,
        uvProtection: boolean | null = null
    ) {
        this.id = id;
        this.itemId = itemId;
        this.type = type;
        this.duration = duration;
        this.material = material;
        this.waterContent = waterContent;
        this.baseCurve = baseCurve;
        this.diameter = diameter;
        this.power = power;
        this.cylinder = cylinder;
        this.axis = axis;
        this.colour = colour;
        this.uvProtection = uvProtection;
    }

    toArray(): (number | string | boolean | ContactLensType | ContactLensDuration | ContactLensMaterial | null)[] {
        return [
            this.id,
            this.itemId,
            this.type,
            this.duration,
            this.material,
            this.waterContent,
            this.baseCurve,
            this.diameter,
            this.power,
            this.cylinder,
            this.axis,
            this.colour,
            this.uvProtection
        ];
    }
}