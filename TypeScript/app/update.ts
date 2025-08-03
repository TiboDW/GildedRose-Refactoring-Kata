import { Item } from "./types/item";

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

const QUALITY_SULFURAS = 80;

const decreaseSellIn = (item: Item, amount: number = 1) => {
  item.sellIn -= amount;
};
const increaseQuality = (item: Item, amount: number = 1) => {
  item.quality += amount;
};
const decreaseQuality = (item: Item, amount: number = 1) => {
  item.quality -= amount;
};

export const updateItemBrie = (item: Item) => {
  if (item.quality < MAX_QUALITY) {
    increaseQuality(item);
  }

  decreaseSellIn(item);

  if (item.sellIn < MIN_QUALITY && item.quality < MAX_QUALITY) {
    increaseQuality(item);
  }
};

export const updateItemPass = (item: Item) => {
  if (item.quality < MAX_QUALITY) {
    increaseQuality(item);

    if (item.sellIn < 11 && item.quality < MAX_QUALITY) {
      increaseQuality(item);
    }
    if (item.sellIn < 6 && item.quality < MAX_QUALITY) {
      increaseQuality(item);
    }
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
  if (item.quality > MIN_QUALITY) {
    decreaseQuality(item, 2);
    if (item.quality < MIN_QUALITY) {
      item.quality = MIN_QUALITY;
    }
  }

  decreaseSellIn(item);

  if (item.sellIn < MIN_QUALITY && item.quality > MIN_QUALITY) {
    decreaseQuality(item, 2);
    if (item.quality < MIN_QUALITY) {
      item.quality = MIN_QUALITY;
    }
  }
};

export const updateItem = (item: Item) => {
  if (item.quality > MIN_QUALITY) {
    decreaseQuality(item);
  }

  decreaseSellIn(item);

  if (item.sellIn < MIN_QUALITY && item.quality > MIN_QUALITY) {
    decreaseQuality(item);
  }
};
