import { Component, OnInit } from '@angular/core';
import mapboxGl from 'mapbox-gl';
import {MAPBOX_TOKEN} from '../constants';
import {GeoNamesService} from '../../../services/geo-names/geo-names.service';
import {LoggerService} from '../../../services/logger/logger.service';
import {pipe} from 'rxjs';
import {NominatimService} from '../../../services/nominatim/nominatim.service';
@Component({
  selector: 'app-poverty-map',
  templateUrl: './poverty-map.component.html',
  styleUrls: ['./poverty-map.component.css']
})
export class PovertyMapComponent implements OnInit {

  TAG = 'PovertyMapComponent';

  constructor(
    // private geoNamesService: GeoNamesService,
    private geoService: NominatimService,
    private logger: LoggerService) { }

  ngOnInit() {
    mapboxGl.accessToken = MAPBOX_TOKEN;
    const CONTAINER_ID = 'map-container';
    const map = new mapboxGl.Map({
      container: CONTAINER_ID,
      style: 'mapbox://styles/mapbox/streets-v9'
    });
    map.on('click', (e) => {
      console.log(e);
      new mapboxGl.Popup()
        .setLngLat(e.lngLat)
        .setText(`${e.lngLat.lng} : ${e.lngLat.lat}`)
        .addTo(map);
    });
  }

  onSearch(query: string): void {
    this.logger.info(this.TAG, `start search: q = ${query}`);
    if (!query) { return; }
    this.geoService.search(query)
      .subscribe(res => {
        this.logger.info(this.TAG, 'get', res);
      });
  }

}
