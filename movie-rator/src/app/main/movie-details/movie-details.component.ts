import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie = null;
  @Output() updateMovie = new EventEmitter();
  faStar = faStar;
  rateHovered = 0 ;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  rateHover(rate){
    console.log(rate);
    this.rateHovered=rate;
  }
  rateClicked(rate){
    this.apiService.rateMovie(rate,this.movie.id).subscribe(result=> this.getDetails(),
    error =>{
      console.log(error);
    }
    )
  }
  getDetails(){
    this.apiService.getMovie(this.movie.id).subscribe(movie=>this.updateMovie.emit(movie),
    error =>{
      console.log(error);
    }
    )
  }

}
