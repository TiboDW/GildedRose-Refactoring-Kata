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

const updateItemBrie = (item: Item) => {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0 && item.quality < 50) {
    item.quality = item.quality + 1;
  }
};

const updateItemPass = (item: Item) => {
  if (item.quality < 50) {
    item.quality = item.quality + 1;

    if (item.sellIn < 11 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
    if (item.sellIn < 6 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0) {
    item.quality = item.quality - item.quality;
  }
};

const updateItemSulfuras = (item: Item) => {};

const updateItemConjured = (item: Item) => {};

const updateItem = (item: Item) => {
  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0 && item.quality > 0) {
    item.quality = item.quality - 1;
  }
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
