import { Item } from "./types/item";

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

const decreaseSellIn = (item: Item) => {
  item.sellIn--;
};

export const updateItemBrie = (item: Item) => {
  if (item.quality < MAX_QUALITY) {
    item.quality++;
  }

  decreaseSellIn(item);

  if (item.sellIn < MIN_QUALITY && item.quality < MAX_QUALITY) {
    item.quality++;
  }
};

export const updateItemPass = (item: Item) => {
  if (item.quality < MAX_QUALITY) {
    item.quality++;

    if (item.sellIn < 11 && item.quality < MAX_QUALITY) {
      item.quality++;
    }
    if (item.sellIn < 6 && item.quality < MAX_QUALITY) {
      item.quality++;
    }
  }

  decreaseSellIn(item);

  if (item.sellIn < MIN_QUALITY) {
    item.quality = 0;
  }
};

export const updateItemSulfuras = (item: Item) => {
  item.quality = 80;
};

export const updateItemConjured = (item: Item) => {
  if (item.quality > MIN_QUALITY) {
    item.quality -= 2;
    if (item.quality < MIN_QUALITY) {
      item.quality = MIN_QUALITY;
    }
  }

  decreaseSellIn(item);

  if (item.sellIn < MIN_QUALITY && item.quality > MIN_QUALITY) {
    item.quality -= 2;
    if (item.quality < MIN_QUALITY) {
      item.quality = MIN_QUALITY;
    }
  }
};

export const updateItem = (item: Item) => {
  if (item.quality > MIN_QUALITY) {
    item.quality--;
  }

  decreaseSellIn(item);

  if (item.sellIn < MIN_QUALITY && item.quality > MIN_QUALITY) {
    item.quality--;
  }
};
