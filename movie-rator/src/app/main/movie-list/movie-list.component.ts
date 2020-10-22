import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;
  @Input() movies:any = [];
  @Output() selectedMovie = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  movieClicked(movie){
    this.selectedMovie.emit(movie);
  }

}
