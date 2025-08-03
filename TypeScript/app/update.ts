import { Item } from "./gilded-rose";

export const updateItemBrie = (item: Item) => {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0 && item.quality < 50) {
    item.quality = item.quality + 1;
  }
};

export const updateItemPass = (item: Item) => {
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

export const updateItemSulfuras = (item: Item) => {};

export const updateItemConjured = (item: Item) => {};

export const updateItem = (item: Item) => {
  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0 && item.quality > 0) {
    item.quality = item.quality - 1;
  }
};
