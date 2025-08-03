import { Item } from "./types/item";
import { ItemType } from "./types/itemType";
import {
  updateItem,
  updateItemBrie,
  updateItemConjured,
  updateItemPass,
  updateItemSulfuras,
} from "./update";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case ItemType.AGED_BRIE:
          updateItemBrie(item);
          break;
        case ItemType.BACKSTAGE_PASS:
          updateItemPass(item);
          break;
        case ItemType.SULFURAS:
          updateItemSulfuras(item);
          break;
        case ItemType.CONJURED:
          updateItemConjured(item);
          break;
        default:
          updateItem(item);
          break;
      }
    }

    return this.items;
  }
}
