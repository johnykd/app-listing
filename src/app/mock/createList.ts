import { ISizeItems, IConditionItems, IEquipmentItems } from "../common/types/createList";

export const categoryItems: any[] = [
    { id: 1, name: 'shoes' },
    { id: 2, name: 'apparel' },
    { id: 3, name: 'collectibles'},
    { id: 4, name: 'accessories'},
    { id: 5, name: 'bags'},
  ];
  
 export const shoesSizeItems: ISizeItems[] = [
    { id: 1, size: 4.5 ,sizeText: '4.5 US' },
    { id: 2, size: 5 ,sizeText: '5 US' },
    { id: 3, size: 5.5 ,sizeText: '5.5 US' },
    { id: 4, size: 6 ,sizeText: '6 US' },
    { id: 5, size: 6.5 ,sizeText: '6.5 US' },
    { id: 6, size: 7 ,sizeText: '7 US' },
  ];
  
 export const apparelSizeItems: any[] = [
    { id: 1, size: 'xxxs' ,sizeText: 'xxxs' },
    { id: 2, size: 'xxs' ,sizeText: 'xxs' },
    { id: 3, size: 'xs' ,sizeText: 'xs' },
    { id: 4, size: 's' ,sizeText: 's' },
    { id: 5, size: 'm' ,sizeText: 'm' },
    { id: 6, size: 'l' ,sizeText: 'l' },
  ];
  
 export const conditionItems: IConditionItems[] = [
    {
      id: 1,
      value: "brand_new",
      text: "Brand new"
    },
    {
      id: 2,
      value: "like_new",
      text: "Pre-owned"
    }
  ]
  
 export const shoesEquipmentItems: IEquipmentItems[] = [
    {
      id: 1,
      equipment: "ORIGINAL_BOX_NO_DEFECT",
      equipmentText: "Box"
    },
    {
      id: 2,
      equipment: "ORIGINAL_BOX_WITH_DEFECT",
      equipmentText: `Box (defect)"`
    }
  ]
  
 export const apparelEquipmentItems: IEquipmentItems[] = [
    {
      id: 1,
      equipment: "DETAILS_TAG",
      equipmentText: "Tags"
    },
    {
      id: 2,
      equipment: "DETAILS_DUST_BAG",
      equipmentText: "Dust bag"
    }
  ]