import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public playlists: object = [
    { nome: 'Albúm 1' , foto: 'https://i.scdn.co/image/ab67616d0000b273f05e5ac32fdd79d100315a20' },
    { nome: 'Albúm 2' , foto: 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/c/6/e/e/591981502889857.jpg' },
    { nome: 'Albúm 3' , foto: 'https://images-na.ssl-images-amazon.com/images/I/61uo57hXGxL._AC_SX355_.jpg' },
    { nome: 'Albúm 4' , foto: 'https://images-na.ssl-images-amazon.com/images/I/A1QsthUoerL._AC_SL1500_.jpg' },
    { nome: 'Albúm 5' , foto: 'https://images-na.ssl-images-amazon.com/images/I/71YGYpcWtvL._AC_SL1200_.jpg' }
  ]
  public slideOpts = {
    slidesPerView: 2.5,
    slidesOffsetBefore: 0,
    spaceBetween: 20,
    freeMode: true
  }
  public musics: object = [
    {foto: "https://cdns-images.dzcdn.net/images/cover/757870ddc1211505769e2be84d165351/350x350.jpg", titulo: "Lil Peep - Broken Smile", descricao: "descricao1"},
    {foto: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/f/f/f/4/605481510144584.jpg", titulo: "Joji- Will He", descricao: "descricao2"},
    {foto: "https://img.discogs.com/blmUZA0K9TAzgPecPqheTNBuwnw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-13929377-1564291894-8906.jpeg.jpg", titulo: "Cuco - Lo Que Siento", descricao: "descricao3"},
    {foto: "https://images.roughtrade.com/product/images/files/000/096/064/original/100000x100000-999-5.jpg?1503327694", titulo: "The Clash - Police & Thieves", descricao: "descricao4"},
    {foto: "https://i.ytimg.com/vi/xUNqsfFUwhY/maxresdefault.jpg", titulo: "The Beatles - Here Comes The Sun", descricao: "descricao5"},
    {foto: "https://i1.sndcdn.com/artworks-000007528587-ht5k23-t500x500.jpg", titulo: "The Ramones - Hey Ho Let's Go", descricao: "descricao6"}
  ]

  public slideOpts2 = {
    // slidesPerView: 1,
    // slidesOffsetBefore: 0,
    // spaceBetween: 20,
    // freeMode: true,
    direction: 'vertical'
  }

  constructor() {}

}
