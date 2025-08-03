import { Item } from "./types/item";

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

const QUALITY_SULFURAS = 80;

const decreaseSellIn = (item: Item, amount: number = 1) => {
  item.sellIn -= amount;
};
const increaseQuality = (item: Item, amount: number = 1) => {
  item.quality = Math.min(MAX_QUALITY, item.quality + amount);
};
const decreaseQuality = (item: Item, amount: number = 1) => {
  item.quality = Math.max(MIN_QUALITY, item.quality - amount);
};

export const updateItemBrie = (item: Item) => {
  increaseQuality(item);

  decreaseSellIn(item);

  if (item.sellIn < MIN_QUALITY) {
    increaseQuality(item);
  }
};

export const updateItemPass = (item: Item) => {
  increaseQuality(item);

  if (item.sellIn < 11) {
    increaseQuality(item);
  }
  if (item.sellIn < 6) {
    increaseQuality(item);
  }

  decreaseSellIn(item);

  if (item.sellIn < MIN_QUALITY) {
    item.quality = 0;
  }
};

export const updateItemSulfuras = (item: Item) => {
  item.quality = QUALITY_SULFURAS;
};

export const updateItemConjured = (item: Item) => {
  decreaseQuality(item, 2);

  decreaseSellIn(item);

  if (item.sellIn < MIN_QUALITY) {
    decreaseQuality(item, 2);
  }
};

export const updateItem = (item: Item) => {
  decreaseQuality(item);

  decreaseSellIn(item);

  if (item.sellIn < MIN_QUALITY) {
    decreaseQuality(item);
  }
};
