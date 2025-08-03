import { Item } from "./gilded-rose";

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

export const updateItemBrie = (item: Item) => {
  if (item.quality < MAX_QUALITY) {
    item.quality = item.quality + 1;
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < MIN_QUALITY && item.quality < MAX_QUALITY) {
    item.quality = item.quality + 1;
  }
};

export const updateItemPass = (item: Item) => {
  if (item.quality < MAX_QUALITY) {
    item.quality = item.quality + 1;

    if (item.sellIn < 11 && item.quality < MAX_QUALITY) {
      item.quality = item.quality + 1;
    }
    if (item.sellIn < 6 && item.quality < MAX_QUALITY) {
      item.quality = item.quality + 1;
    }
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < MIN_QUALITY) {
    item.quality = item.quality - item.quality;
  }
};

export const updateItemSulfuras = (item: Item) => {};

export const updateItemConjured = (item: Item) => {};

export const updateItem = (item: Item) => {
  if (item.quality > MIN_QUALITY) {
    item.quality = item.quality - 1;
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < MIN_QUALITY && item.quality > MIN_QUALITY) {
    item.quality = item.quality - 1;
  }
};
