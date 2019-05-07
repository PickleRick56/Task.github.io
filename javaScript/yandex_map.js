ymaps.ready(init);

var placemarks = [
    {
      latitude: 51.812676,
      longitude: 55.181478,
      hintContent: '<div class="map__hint">ул. Салмышская 71</div>',
      balloonContent: [
        '<div class="map__balloon">',
        '<img class="map__img" src="image/sprite1.png" alt="WebStudia"/>',
        'Best of The Best',
        '</div>'
      ]
    },
    {
      latitude: 51.808483,
      longitude: 55.096614,
      hintContent: '<div class="map__hint">ул. Салмышская 71</div>',
      balloonContent: [
        '<div class="map__balloon">',
        '<img class="map__img" src="image/sprite1.png" alt="WebStudia"/>',
        'Best of The Best',
        '</div>'
      ]
    },
    {
      latitude: 51.778637,
      longitude: 55.154918,
      hintContent: '<div class="map__hint">ул. Салмышская 71</div>',
      balloonContent: [
        '<div class="map__balloon">',
        '<img class="map__img" src="image/sprite1.png" alt="WebStudia"/>',
        'Best of The Best',
        '</div>'
      ]
    }
  ],
  geoObjects = [];

function init() {
  var map = new ymaps.Map('map', {
    center: [51.808016, 55.151142],
    zoom: 10,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });

  // map.behaviors.disable('drag');
  // map.behaviors.disable('multiTouch');

  for (var i = 0; i < placemarks.length; i++) {
    geoObjects[i] = new ymaps.Placemark(
      [placemarks[i].latitude, placemarks[i].longitude],
      {
        hintContent: placemarks[i].hintContent,
        balloonContent: placemarks[i].balloonContent.join('')
      },
      {
        iconLayout: 'default#image',
        iconImageHref: 'image/sprite1.png',
        iconImageSize: [46, 57],
        iconImageOffset: [0, -110],
        iconImageClipRect: [[863, 65], [930, 137]]
      }
    );
  }

  var clusterer = new ymaps.Clusterer({
    clusterIcons: [
      {
        href: 'image/WebStudia.png',
        size: [150, 100],
        offset: [-50, -50]
      }
    ],
    clusterIconContentLayout: null
  });

  map.geoObjects.add(clusterer);
  clusterer.add(geoObjects);

  var mapElement = document.getElementById('map');

  function fitMapToViewport() {
    // Вызываем перерасчет размеров контейнера карты.
    // Это может происходить автоматически при помощи опции autoFitToViewport
    // http://api.yandex.ru/maps/doc/jsapi/beta/ref/reference/Map.xml#param-options.autoFitToViewport
    map.container.fitToViewport();
  }

  // if (document.documentElement.clientWidth < 575.98) {
  //   mapElement.className = 'small';
  //   fitMapToViewport();
  // } else if (document.documentElement.clientWidth < 767.98) {
  //   mapElement.className = 'medium';
  //   fitMapToViewport();
  // } else if (document.documentElement.clientWidth < 991.98) {
  //   mapElement.className = 'large';
  //   fitMapToViewport();
  // } else {
  //   mapElement.className = 'large';
  //   fitMapToViewport();
  // }

  function mapResizer() {
    if (document.documentElement.clientWidth > 991.98) {
      mapElement.style.height = 569 + 'px';
      fitMapToViewport();
    } else {
      mapElement.style.height =
        document.documentElement.clientHeight * 0.5 + 'px';
      fitMapToViewport();
    }
  }
  mapResizer();

  window.onresize = mapResizer;
}
