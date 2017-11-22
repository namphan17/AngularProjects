import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages = [];
  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id == id);
  }
}

const IMAGES = [
  {"id": 1, "category": "beauty", "caption":"Action", "url": "assets/img/image1.jpg"},
  {"id": 2, "category": "beauty", "caption":"Action", "url": "assets/img/image2.png"},
  {"id": 3, "category": "funny", "caption":"Action", "url": "assets/img/image3.png"},
  {"id": 4, "category": "beauty", "caption":"Action", "url": "assets/img/image4.png"},
  {"id": 5, "category": "beauty", "caption":"Action", "url": "assets/img/image4.png"},
  {"id": 6, "category": "beauty", "caption":"Action", "url": "assets/img/image6.png"},
  {"id": 7, "category": "dota", "caption":"Action", "url": "assets/img/image7.png"},
  {"id": 8, "category": "dota", "caption":"Action", "url": "assets/img/image8.png"},
  {"id": 9, "category": "dota", "caption":"Action", "url": "assets/img/image9.png"},
  {"id": 10, "category": "funny", "caption":"Action", "url": "assets/img/image10.png"},
  {"id": 11, "category": "beauty", "caption":"Action", "url": "assets/img/image11.png"},
  {"id": 12, "category": "funny", "caption":"Action", "url": "assets/img/image12.png"},
  {"id": 13, "category": "funny", "caption":"Action", "url": "assets/img/image13.png"},
  {"id": 14, "category": "funny", "caption":"Action", "url": "assets/img/image14.png"},
  {"id": 15, "category": "funny", "caption":"Action", "url": "assets/img/image15.png"},
  {"id": 16, "category": "funny", "caption":"Action", "url": "assets/img/image16.png"},
  {"id": 17, "category": "beauty", "caption":"Action", "url": "assets/img/image17.png"},
  {"id": 18, "category": "funny", "caption":"Action", "url": "assets/img/image18.png"},
  {"id": 19, "category": "funny", "caption":"Action", "url": "assets/img/image19.png"},
  {"id": 20, "category": "beauty", "caption":"Action", "url": "assets/img/image20.png"},
  {"id": 21, "category": "funny", "caption":"Action", "url": "assets/img/image21.png"}
];
