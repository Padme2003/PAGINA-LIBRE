import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  products:any[]=[,
    { id: 1, nombre: "Cien años de soledad", precio: 19.99, categoria_id: "RENACIMIENTO", stock: 15, estado: "Completo", image: "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg" },
    { id: 2, nombre: "Don Quijote de la Mancha", precio: 16.99, categoria_id: "RENACIMIENTO", stock: 20, estado: "Completo", image: "https://images.cdn3.buscalibre.com/fit-in/360x360/7d/24/7d24d9c22d4e5622619802bdd0618f64.jpg" },
    { id: 3, nombre: "1984", precio: 14.99, categoria_id: "RENACIMIENTO", stock: 12, estado: "Incompleto", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnERW35pkvLcJcJdm8kP-cKFIxA9FyILzeBw&s" },
    { id: 4, nombre: "Matar a un Ruiseñor", precio: 22.50, categoria_id: "RENACIMIENTO", stock: 5, estado: "Completo", image: "https://images.cdn3.buscalibre.com/fit-in/360x360/1b/d7/1bd7b432c94ccdcf816c917d8abe8e83.jpg" },
    { id: 5, nombre: "La sombra del viento", precio: 18.99, categoria_id: "EPOCA ACTUAL", stock: 8, estado: "Completo", image: "https://images.cdn2.buscalibre.com/fit-in/360x360/ab/87/ab87acaf98e410b8e041df35d99abaf4.jpg" },
    { id: 6, nombre: "Harry Potter y la piedra filosofal", precio: 12.50, categoria_id: "EPOCA ACTUAL", stock: 10, estado: "Completo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwLf96ffjYPXSe4EAwLlMMeUBi1EbKHlMqg&s" },
    { id: 7, nombre: "El Principito", precio: 13.99, categoria_id: "EPOCA ACTUAL", stock: 18, estado: "Incompleto", image: "https://images.cdn3.buscalibre.com/fit-in/360x360/02/fb/02fb19970ccf22763313a73744bfdaf7.jpg" },
    { id: 8, nombre: "Crimen y Castigo", precio: 25.00, categoria_id: "EPOCA ACTUAL", stock: 30, estado: "Completo", image: "https://images.cdn3.buscalibre.com/fit-in/360x360/7c/6e/7c6ed151d1dad50f179f2da5dc3e55a9.jpg" },
    { id: 9, nombre: "Orgullo y Perjuicio", precio: 19.00, categoria_id: "EPOCA ACTUAL", stock: 7, estado: "Completo", image: "https://http2.mlstatic.com/D_NQ_NP_873739-MLM78708011643_082024-O.webp" },
    { id: 10, nombre: "Cumbres Borroscosas", precio: 16.00, categoria_id: "EPOCA ACTUAL", stock: 14, estado: "Incompleto", image: "https://www.mrbooks.com/mrbooks/portadas/9788491819431.webp" }
  ];
  cols: any[]=[];
openNew(){
  
}

editProduct(prod:any){

}

deleteProduct(prod:any){

}
}
 