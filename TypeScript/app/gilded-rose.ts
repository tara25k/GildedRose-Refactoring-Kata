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


export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let name = this.items[i].name
      let quality = this.items[i].quality
      let sellIn = this.items[i].sellIn

      //CHANGING QUALITY
      //if the item in question is not a special item, and has a non-zero quality, decrease it's quality by 1
      if (name != 'Aged Brie' && name != 'Backstage passes to a TAFKAL80ETC concert' && name != 'Sulfuras, Hand of Ragnaros') {
        if (quality > 0) {
          quality -- 
          //if it's a conjured item, quality degrades twice as fast, so degrade quality again
          if (name == 'Conjured Item') {
            quality --
          }

        }
      } 

      //if it's a special item, increase quality instead
      else {
        if (quality < 50) { 
          quality ++
        
          //for a backstage pass with a close sellin date, increase quality
          if (name == 'Backstage passes to a TAFKAL80ETC concert' && sellIn < 11 ){ 
              quality ++ 
            if (sellIn < 6) {
                quality ++
            }
          }
        }
      }

      //CHANGING SELLIN DATE
      //if an item is not sulfuras, decrease its sellin date
      if (name != 'Sulfuras, Hand of Ragnaros') {
        sellIn --
      }

      //FOR AN OUTDATED ITEM
      if (sellIn < 0) { 
        //if it's not a special item, degrade quality again
        if (name != 'Aged Brie' && name != 'Backstage passes to a TAFKAL80ETC concert' && name != 'Sulfuras, Hand of Ragnaros') {
            if (quality > 0) { 
                quality = quality - 1 
                if (name == 'Conjured Item') {
                  quality --
                }
            }

        //if it is a special item (that hasn't reached max quality), increase quality 
        } else {
          if (quality < 50) {
            quality = quality + 1
          }
        }
        
        //if it's a backstage pass, quality is 0
        if (name == 'Backstage passes to a TAFKAL80ETC concert'){
          quality = 0;
        }
      }
      this.items[i].quality = quality
      this.items[i].sellIn = sellIn
    }

    return this.items;
  }
}
