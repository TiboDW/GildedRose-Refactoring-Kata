import {
  updateItem,
  updateItemBrie,
  updateItemConjured,
  updateItemPass,
  updateItemSulfuras,
} from "./update";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const ItemTypes = {
  AGED_BRIE: "Aged Brie",
  BACKSTAGE_PASS: "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS: "Sulfuras, Hand of Ragnaros",
  CONJURED: "Conjured",
};

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case ItemTypes.AGED_BRIE:
          updateItemBrie(item);
          break;
        case ItemTypes.BACKSTAGE_PASS:
          updateItemPass(item);
          break;
        case ItemTypes.SULFURAS:
          updateItemSulfuras(item);
          break;
        case ItemTypes.CONJURED:
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
