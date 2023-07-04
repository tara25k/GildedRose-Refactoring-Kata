import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
});

describe('Gilded Rose', () => {
  it('degrades twice as fast after sell by date', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

describe('Gilded Rose', () => {
  it('degrades by one before sell by date', () => {
    const gildedRose = new GildedRose([new Item('foo', 1, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });
});

describe('Gilded Rose', () => {
  it('quality is never 0', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 2)]);
    gildedRose.updateQuality();
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

describe('Gilded Rose', () => {
  it('quality is never more than 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 1, 50)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});

describe('Gilded Rose', () => {
  it('sulfuras never decreases in quality', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 2, 80)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
});

describe('Gilded Rose', () => {
  it('sulfuras never changes sellin date', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 2, 80)]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(2);
  });
});

describe('Gilded Rose', () => {
  it('quality of backstage pass drops to 0 after concert', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 80)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

describe('Gilded Rose', () => {
  it('quality of backstage passes increases by 2 when there are 10 days or less', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 7, 10)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
  });
});

describe('Gilded Rose', () => {
  it('quality of backstage passes increases by 3 when there are 5 days or less', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  });
});

describe('Gilded Rose', () => {
  it('conjured items degrade twice as fast as normal items when in date', () => {
    const gildedRose = new GildedRose([new Item('Conjured Item', 10, 10)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });
});

describe('Gilded Rose', () => {
  it('conjured items degrade twice as fast as normal items when out of date', () => {
    const gildedRose = new GildedRose([new Item('Conjured Item', -1, 10)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });
});




