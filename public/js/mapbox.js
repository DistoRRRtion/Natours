/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZGlzdG9ycnJ0aW9uIiwiYSI6ImNsZmxnMWN6ejAxanYzcXA2YmhzZGg2YnAifQ.V3Ie6yk6C9NhMwiGucQynQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/distorrrtion/clfljbte7009o01p4k2aho0jl',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 7,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
