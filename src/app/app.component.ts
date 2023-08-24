import { Component } from '@angular/core';
import { ObservibleService } from './service/observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  errorMsg : any;
  constructor(
    private api : ObservibleService
  ){  }

  ngOnInit(){
    this.api.getData().subscribe(res =>{
      this.data = res;
      console.log(this.data);
    }, error => {
      this.errorMsg = error;
    });
  }
}
