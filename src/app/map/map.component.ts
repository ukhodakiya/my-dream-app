import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude = 42.407211;
  longitude = -71.382439;
  LocationChosen = false;

  constructor() {
  }

  OnChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.LocationChosen = true;
  }

  ngOnInit() {
  }

}
