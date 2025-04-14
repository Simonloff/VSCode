// Lista de 50 ciudades con su zona horaria, población y país
const cities = [
    { city: "Nueva York",       timezone: "America/New_York",        population: 8400000,  country: "Estados Unidos" },
    { city: "Los Ángeles",      timezone: "America/Los_Angeles",       population: 3900000,  country: "Estados Unidos" },
    { city: "Chicago",          timezone: "America/Chicago",           population: 2700000,  country: "Estados Unidos" },
    { city: "Houston",          timezone: "America/Chicago",           population: 2300000,  country: "Estados Unidos" },
    { city: "Miami",            timezone: "America/New_York",          population: 470000,   country: "Estados Unidos" },
    { city: "Londres",          timezone: "Europe/London",             population: 9000000,  country: "Reino Unido" },
    { city: "París",            timezone: "Europe/Paris",              population: 2100000,  country: "Francia" },
    { city: "Berlín",           timezone: "Europe/Berlin",             population: 3600000,  country: "Alemania" },
    { city: "Madrid",           timezone: "Europe/Madrid",             population: 3300000,  country: "España" },
    { city: "Roma",             timezone: "Europe/Rome",               population: 2800000,  country: "Italia" },
    { city: "Moscú",            timezone: "Europe/Moscow",             population: 12000000, country: "Rusia" },
    { city: "Estambul",         timezone: "Europe/Istanbul",           population: 15000000, country: "Turquía" },
    { city: "Pekín",            timezone: "Asia/Shanghai",             population: 21000000, country: "China" },
    { city: "Shanghái",         timezone: "Asia/Shanghai",             population: 24000000, country: "China" },
    { city: "Tokio",            timezone: "Asia/Tokyo",                population: 14000000, country: "Japón" },
    { city: "Seúl",             timezone: "Asia/Seoul",                population: 9700000,  country: "Corea del Sur" },
    { city: "Singapur",         timezone: "Asia/Singapore",            population: 5600000,  country: "Singapur" },
    { city: "Hong Kong",        timezone: "Asia/Hong_Kong",            population: 7500000,  country: "China" },
    { city: "Bangkok",          timezone: "Asia/Bangkok",              population: 8300000,  country: "Tailandia" },
    { city: "Nueva Delhi",      timezone: "Asia/Kolkata",              population: 16000000, country: "India" },
    { city: "Mumbai",           timezone: "Asia/Kolkata",              population: 12000000, country: "India" },
    { city: "Bangalore",        timezone: "Asia/Kolkata",              population: 8500000,  country: "India" },
    { city: "Kuala Lumpur",     timezone: "Asia/Kuala_Lumpur",         population: 1800000,  country: "Malasia" },
    { city: "Sídney",           timezone: "Australia/Sydney",          population: 5300000,  country: "Australia" },
    { city: "Melbourne",        timezone: "Australia/Melbourne",       population: 5000000,  country: "Australia" },
    { city: "Ciudad de México", timezone: "America/Mexico_City",       population: 8900000,  country: "México" },
    { city: "Bogotá",           timezone: "America/Bogota",            population: 7400000,  country: "Colombia" },
    { city: "São Paulo",        timezone: "America/Sao_Paulo",         population: 12200000, country: "Brasil" },
    { city: "Buenos Aires",     timezone: "America/Argentina/Buenos_Aires", population: 3000000, country: "Argentina" },
    { city: "Lima",             timezone: "America/Lima",              population: 9700000,  country: "Perú" },
    { city: "El Cairo",         timezone: "Africa/Cairo",              population: 9600000,  country: "Egipto" },
    { city: "Johannesburgo",    timezone: "Africa/Johannesburg",       population: 5600000,  country: "Sudáfrica" },
    { city: "Nairobi",          timezone: "Africa/Nairobi",            population: 4700000,  country: "Kenia" },
    { city: "Casablanca",       timezone: "Africa/Casablanca",         population: 3700000,  country: "Marruecos" },
    { city: "Dubai",            timezone: "Asia/Dubai",                population: 3300000,  country: "Emiratos Árabes Unidos" },
    { city: "Abu Dhabi",        timezone: "Asia/Dubai",                population: 1450000,  country: "Emiratos Árabes Unidos" },
    { city: "Doha",             timezone: "Asia/Qatar",                population: 2400000,  country: "Catar" },
    { city: "Riad",             timezone: "Asia/Riyadh",               population: 7600000,  country: "Arabia Saudita" },
    { city: "Caracas",          timezone: "America/Caracas",           population: 1900000,  country: "Venezuela" },
    { city: "Montreal",         timezone: "America/Toronto",           population: 1700000,  country: "Canadá" },
    { city: "Toronto",          timezone: "America/Toronto",           population: 2930000,  country: "Canadá" },
    { city: "Vancouver",        timezone: "America/Vancouver",         population: 631000,   country: "Canadá" },
    { city: "San Francisco",    timezone: "America/Los_Angeles",       population: 884000,   country: "Estados Unidos" },
    { city: "Boston",           timezone: "America/New_York",          population: 675000,   country: "Estados Unidos" },
    { city: "Seattle",          timezone: "America/Los_Angeles",       population: 744000,   country: "Estados Unidos" },
    { city: "Atlanta",          timezone: "America/New_York",          population: 506000,   country: "Estados Unidos" },
    { city: "Auckland",         timezone: "Pacific/Auckland",          population: 1600000,  country: "Nueva Zelanda" },
    { city: "Wellington",       timezone: "Pacific/Auckland",          population: 412500,   country: "Nueva Zelanda" },
    { city: "Jakarta",          timezone: "Asia/Jakarta",              population: 10770000, country: "Indonesia" },
    { city: "Manila",           timezone: "Asia/Manila",               population: 1780000,  country: "Filipinas" }
  ];
  
  // Se recupera (o inicializa) la lista de Favoritos desde localStorage
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  
  // Variable para el criterio de ordenamiento actual (por defecto: nombre ascendente)
  let currentSort = "name-asc";
  
  /**
   * Función para ordenar un arreglo de objetos ciudad según el criterio seleccionado.
   * @param {Array} arr Arreglo de objetos ciudad.
   * @returns {Array} El arreglo ordenado.
   */
  function sortCities(arr) {
    return arr.sort((a, b) => {
      if (currentSort === "name-asc") {
        return a.city.localeCompare(b.city);
      } else if (currentSort === "name-desc") {
        return b.city.localeCompare(a.city);
      } else if (currentSort === "pop-asc") {
        return a.population - b.population;
      } else if (currentSort === "pop-desc") {
        return b.population - a.population;
      } else {
        return 0;
      }
    });
  }
  
  /**
   * Actualiza la hora en todos los elementos que tengan el atributo data-time-city.
   */
  function updateTime() {
    document.querySelectorAll("[data-time-city]").forEach(el => {
      const cityName = el.getAttribute("data-time-city");
      const cityObj = cities.find(c => c.city === cityName);
      if (cityObj) {
        el.innerText = new Date().toLocaleTimeString("es-ES", { timeZone: cityObj.timezone });
      }
    });
  }
  
  /**
   * Crea una tarjeta para una ciudad determinada.
   * @param {Object} cityObj Objeto con datos de la ciudad.
   * @returns {HTMLElement} La tarjeta de la ciudad.
   */
  function createCityCard(cityObj) {
    const card = document.createElement('div');
    card.className = 'city-card';
    card.setAttribute('data-city', cityObj.city);
    card.innerHTML = `
      <h3>${cityObj.city}</h3>
      <p data-time-city="${cityObj.city}">${new Date().toLocaleTimeString("es-ES", { timeZone: cityObj.timezone })}</p>
      <p class="population">Población: ${cityObj.population.toLocaleString()}</p>
      <p class="country">País: ${cityObj.country}</p>
      <button onclick="toggleFavorito('${cityObj.city}')">
        ${favoritos.includes(cityObj.city) ? '★' : '☆'}
      </button>
    `;
    return card;
  }
  
  /**
   * Renderiza la lista de ciudades en la sección "Ciudades".
   * Se muestran solo las ciudades que NO están en Favoritos.
   */
  function renderCities() {
    const container = document.getElementById('ciudades');
    container.innerHTML = "";
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    let filteredCities = cities.filter(cityObj =>
      cityObj.city.toLowerCase().includes(searchQuery) && !favoritos.includes(cityObj.city)
    );
    // Ordenar según el criterio seleccionado
    filteredCities = sortCities(filteredCities);
    filteredCities.forEach(cityObj => {
      container.appendChild(createCityCard(cityObj));
    });
  }
  
  /**
   * Renderiza la sección de Favoritos.
   */
  function renderFavoritos() {
    const container = document.getElementById('favoritos');
    container.innerHTML = "";
    // Se crea un arreglo a partir de los nombres en Favoritos
    let favCities = favoritos.map(cityName => cities.find(c => c.city === cityName));
    favCities = sortCities(favCities);
    favCities.forEach(cityObj => {
      container.appendChild(createCityCard(cityObj));
    });
  }
  
  /**
   * Agrega o quita una ciudad de Favoritos. Actualiza el localStorage y re-renderiza ambas secciones.
   * @param {string} cityName Nombre de la ciudad.
   */
  function toggleFavorito(cityName) {
    if (favoritos.includes(cityName)) {
      favoritos = favoritos.filter(c => c !== cityName);
    } else {
      favoritos.push(cityName);
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    renderFavoritos();
    renderCities();
  }
  
  // Hacer accesible la función globalmente para los botones creados dinámicamente
  window.toggleFavorito = toggleFavorito;
  
  // Listener para el buscador en vivo.
  document.getElementById('searchInput').addEventListener('input', renderCities);
  
  // Listener para el selector de ordenamiento.
  document.getElementById('sortSelect').addEventListener('change', function() {
    currentSort = this.value;
    renderCities();
    renderFavoritos();
  });
  
  // Listener para el botón de modo oscuro/claro.
  document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  
  // Renderizado inicial y actualización continua de la hora.
  renderFavoritos();
  renderCities();
  setInterval(updateTime, 1000);
  