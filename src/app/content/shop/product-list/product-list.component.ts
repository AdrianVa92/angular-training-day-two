import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      id: 1,
      name:'Ford',
      description: 'Super Fast Cars',
      price:'P900,000.00',
      image: 'https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/legacy/nameplate/suvs/MY20Ecosport_2160x1440.jpg/_jcr_content/renditions/cq5dam.web.768.768.jpeg',
    },
    {
      id: 2,
      name:'Chevrolet',
      description: 'Super Fast Cars',
      price:'P1,200,000.00',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/2019_Chevrolet_Camaro_base%2C_front_11.9.19.jpg/1200px-2019_Chevrolet_Camaro_base%2C_front_11.9.19.jpg',
    },
    {
      id: 3,
      name: 'Mazda',
      description: 'Super Fast Cars',
      price:'P1,900,000.00',
      image: 'https://imgcdn.zigwheels.ph/medium/gallery/exterior/21/2169/mazda-cx-30-front-angle-low-view-387121.jpg',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
