import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  getImages() {

    const images = [
      {
        itemImageSrc: 'promo1.png',
        thumbnailImageSrc: 'addi1.png',
        alt: 'Producto 1',
        title: 'Título Producto 1'
      },
      {
        itemImageSrc: 'promo2.png',
        thumbnailImageSrc: 'addi2.png',
        alt: 'Producto 2',
        title: 'Título Producto 2'
      },
      {
        itemImageSrc: 'promo3.png',
        thumbnailImageSrc: 'addi3.png',
        alt: 'Producto 3',
        title: 'Título Producto 3'
      }
    ];
    
    return Promise.resolve(images);
  }
}
