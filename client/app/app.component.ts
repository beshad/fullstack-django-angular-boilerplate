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
  thing: Thing = {
    id: 0,
    username: 'nil',
    email: 'nil',
    interests: 'nil'
  }

  constructor(private api: ApiService) {

    this.getThings()
  }

  getThings = () => {
    this.api.getAllThings().subscribe(
      data => {
        this.things = data
      }, error => {
        console.log(error)
      })
  }

  thingClicked = id => {
    this.api.getThing(id).subscribe(data => {
      this.thing = data;
    }, error => {
      // do something with error
    })
  }

  updateThing = () => {
    this.api.updateThing(this.thing).subscribe(() => {
      // do something with success
    }, error => {
        // do something with error
      })
  }
}

interface Thing {
  id?: number;
  username?: string;
  email?: string;
  interests?: string;
}
