import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  imageArray = [
    {
      id: 1,
      name: '../../assets/img/img1.jpg',
      title: 'Beauty and care',
    },
    {
      id: 2,
      name: '../../assets/img/img2.jpg',
      title: 'Vitamins and Supplements',
    },
    {
      id: 3,
      name: '../../assets/img/img3.jpg',
      title: 'Medicinal and prophylactic means',
    },
    {
      id: 4,
      name: '../../assets/img/img4.jpg',
      title: 'Mother and child',
    },
    {
      id: 5,
      name: '../../assets/img/img5.jpg',
      title: 'Optics',
    },
    {
      id: 6,
      name: '../../assets/img/img6.jpg',
      title: 'Hygiene',
    },
    {
      id: 7,
      name: '../../assets/img/img7.jpg',
      title: 'COVID-19',
    },
    {
      id: 8,
      name: '../../assets/img/img8.jpg',
      title: 'Perfumes',
    },
  ];
}
