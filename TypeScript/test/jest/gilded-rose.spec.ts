import { GildedRose } from "@/gilded-rose";
import { Item } from "@/types/item";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
});

describe("test one", () => {
  it("Update quality selling for one day", () => {
    const gildedRose = new GildedRose([new Item("foo", 1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(0);
  });
});
