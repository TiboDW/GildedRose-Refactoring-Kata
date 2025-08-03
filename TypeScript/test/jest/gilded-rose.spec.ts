import { GildedRose } from "@/gilded-rose";
import { Item } from "@/types/item";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should update quality for Aged Brie", () => {
    let gildedRose = new GildedRose([new Item("Aged Brie", 10, 20)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
    expect(items[0].sellIn).toBe(9);

    gildedRose = new GildedRose([new Item("Aged Brie", 0, 20)]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
    expect(items[0].sellIn).toBe(-1);

    gildedRose = new GildedRose([new Item("Aged Brie", -1, 20)]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
    expect(items[0].sellIn).toBe(-2);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(4);
  });

  it("should update quality for Conjured", () => {
    let gildedRose = new GildedRose([new Item("Conjured", 3, 6)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
    expect(items[0].sellIn).toBe(2);

    gildedRose = new GildedRose([new Item("Conjured", 0, 6)]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
    expect(items[0].sellIn).toBe(-1);

    gildedRose = new GildedRose([new Item("Conjured", -1, 6)]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
    expect(items[0].sellIn).toBe(-2);

    gildedRose = new GildedRose([new Item("Conjured", 5, 0)]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(4);
  });

  it("should update quality for default (normal item)", () => {
    let gildedRose = new GildedRose([new Item("default", 10, 10)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
    expect(items[0].sellIn).toBe(9);

    gildedRose = new GildedRose([new Item("default", 0, 10)]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
    expect(items[0].sellIn).toBe(-1);

    gildedRose = new GildedRose([new Item("default", -1, 2)]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(-2);

    gildedRose = new GildedRose([new Item("default", 5, 0)]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(4);
  });

  it("should update quality for Sulfuras", () => {
    let gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 15, 20),
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(15);

    gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 0, 20),
    ]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(0);

    gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", -1, 20),
    ]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(-1);

    gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 5, 80),
    ]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(5);
  });

  it("should update quality for Backstage passes", () => {
    let gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
    expect(items[0].sellIn).toBe(14);

    gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
    ]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
    expect(items[0].sellIn).toBe(9);

    gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20),
    ]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
    expect(items[0].sellIn).toBe(4);

    gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20),
    ]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(-1);
  });
});
