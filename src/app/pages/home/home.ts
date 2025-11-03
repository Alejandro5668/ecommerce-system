import { GalleriaModule } from 'primeng/galleria';
import {Component, model, OnInit} from '@angular/core';
import { PhotoService } from '../../services/photo-service';

interface Image {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-home',
  imports: [GalleriaModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [PhotoService]
})
export class Home implements OnInit {
   images = model<Image[]>([]);

    responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images.set(images));
    }
}
