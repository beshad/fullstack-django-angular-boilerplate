import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent {

  things: any

  constructor(private api:ApiService) {
    this.getThings()
  }

  getThings = () => {
    this.api.getAllThings().subscribe(
      data => {
        this.things = data
        console.log(this.things)
      }, error => {
        console.log(error)
      })
  }
}
