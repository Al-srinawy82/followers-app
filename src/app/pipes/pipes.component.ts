import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    {{ text | summary: 80 }} <br />
    {{ course.title | uppercase | lowercase }} <br />
    {{ course.rating | number: '2.1-1' }} <br />
    {{ course.students | number }} <br />
    {{ course.price | currency: 'AUD':true:'3.2-2' }} <br />
    {{ course.releaseDate | date: 'medium' }} <br />
  `,
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30234,
    price: 190.9,
    releaseDate: new Date(2016, 3, 1),
  };
}
