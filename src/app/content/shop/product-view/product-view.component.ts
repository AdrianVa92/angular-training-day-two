import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit, OnDestroy {

  selectedProduct: any;

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
  constructor(private router: ActivatedRoute, private _globalService: GlobalService) {

  }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params) => {
        const id = params.id;

        const selected = this.products.filter(
          (product) => {
            return +product.id === +id;
          }
        );

        if (selected.length > 0){
          this.selectedProduct = selected[0];
          this._globalService.subjectName.next(this.selectedProduct.name);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this._globalService.subjectName.next('');
  }
}
