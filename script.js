mapboxgl.accessToken = 'pk.eyJ1Ijoia3IzNDE4IiwiYSI6ImNtbnl3Zmx5cjA2cTQycXBtb3JxdXY2YXQifQ.o0QeMLlc__XbEGpIbeWDxQ';

// Establishing the Map paramters 
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
  
    center: [9.5, 39.5],
    zoom: 4,
  
    minZoom: 4,
  
    maxBounds: [
      [-10, 30],  // southwest corner 
      [25, 48]    // northeast corner
    ]
  });

map.addControl(new mapboxgl.NavigationControl());

/* Country color map */
const countryColors = {
  Spain: '#e63946',    // red
  Tunisia: '#2ecc71',  // green 
  Italy: '#f39c12',    // orange
  France: '#3498db'    // blue 
};

/* Locations visited */
const locations = [
  {
    city: 'Barcelona',
    country: 'Spain',
    coords: [2.1734, 41.3851],
    funFact: 'Barcelona was my first time experiencing real European urbanism. Of course, had to stop by La Sagrada Familia! ',
    image: 'pictures/Barcelona.jpeg'
  },
  {
    city: 'Tunis',
    country: 'Tunisia',
    coords: [10.1815, 36.8065],
    funFact: 'Loved walking around The Medina and learning about Tunisian culture. Pic is in Kasbah Sq.',
    image: 'pictures/Tunis.jpeg'
  },
  {
    city: 'Palermo',
    country: 'Italy',
    coords: [13.3615, 38.1157],
    funFact: 'Fun and lively city. The best pasta I ever had was here.',
    image: 'pictures/Palermo.jpeg'
  },
  {
    city: 'Genova',
    country: 'Italy',
    coords: [8.9463, 44.4056],
    funFact: 'Probaly my favorite city in the trip. Great views of the coast and the gelato was 10/10 ',
    image: 'pictures/Genova.jpeg'
  },
  {
    city: 'Naples',
    country: 'Italy',
    coords: [14.2681, 40.8518],
    funFact: 'Napoli is recognized as the birthplace of pizza, so naturally we took a pizza making class. Lets just say mine did not turn out so great at the end...',
    image: 'pictures/Napoli.jpeg'
  },
  {
    city: 'Marseille',
    country: 'France',
    coords: [5.3698, 43.2965],
    funFact: 'Another coastal city where I rode a tram for the first time! stay tuned as I may or may not incorporate trams into my final project',
    image: 'pictures/Marseille.jpeg'
  }
];

locations.forEach((place) => {
    const color = countryColors[place.country] || '#000000';
  
    const markerEl = document.createElement('div');
    markerEl.className = 'custom-marker';
  
    markerEl.innerHTML = `
      <div class="marker-pin" style="background-color: ${color};"></div>
      <div class="marker-label" style="color: ${color};">${place.city}</div>
    `;
  
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
      <div class="popup-content">
        <h3>${place.city}, ${place.country}</h3>
        <p>${place.funFact}</p>
        <img src="${place.image}" alt="${place.city}">
      </div>
    `);
  
    new mapboxgl.Marker(markerEl)
      .setLngLat(place.coords)
      .setPopup(popup)
      .addTo(map);
  });
