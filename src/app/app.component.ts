import { Component, OnInit ,AfterViewInit} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {FullScreen, defaults as defaultControls} from 'ol/control';
import TileWMS from 'ol/source/TileWMS';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  map: Map;

  ngOnInit(): void {

     this.map = new Map({
      controls: defaultControls().extend([new FullScreen()]),
       view: new View({
        projection: 'EPSG:4326',
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        // new TileLayer({
        //   source: new OSM(),
        // }),
        new TileLayer({
        extent: [-180.0, -58.49861145019531, 180.0, 83.62360382080078],
        source: new TileWMS({
          url: 'http://54.209.243.250:8080/geoserver/testWorkspace/wms?',
          //params: {VERSION: '1.1.0' ,service:'WMS' ,LAYERS: 'testWorkspace:core_country', TILED: true,   format:'image/png',srs:'EPSG:4326'},
          params: {VERSION: '1.1.0' , LAYERS: 'testWorkspace:core_country', TILED: true,   format:'image/png', },
          serverType: 'geoserver',
          crossOrigin: 'Anonymous',
          // Countries have transparency, so do not fade tiles:
          //transition: 0,
    }),
  }),
      ],
      target: 'ol-map'
     });

    // this.map = new Map({
    //   controls: defaultControls().extend([new FullScreen()]),
    //   view: new View({
    //     center: [0, 0],
    //     zoom: 1,
    //   }),
    //   layers: [
    //     new TileLayer({
    //       source: new OSM(),
    //     }),
    //   ],
    //   target: 'ol-map'
    // });
  }
}
