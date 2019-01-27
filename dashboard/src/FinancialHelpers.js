class FinancialHelpers {
  static toFinancialString(amount) {
    return Number.parseFloat(amount).toFixed(2).replace(".", ",");
  }
  static getDetailsFromTicket(ticket) {
  	let copy = Object.assign({lines: undefined, documentTotal: undefined, settlements: undefined}, ticket)
  	delete copy.lines
  	delete copy.settlements
  	delete copy.documentTotal
  	return copy;
  }
  static __getGeoData__() {
    const brands = ['City', '', 'Hyper', 'Marché', 'Go'];

    const cities = [
      { name: "Lyon", quarters: [ 'Vieux Lyon', 'Croix-Rousse', 'Confluence', 'Bellecour', 'Part-Dieu', 'Gerland', 'Brotteaux', 'Terreaux', 'St-Just', 'Perrache', 'Monplaisir', 'États-Unis', 'Vaise' ] },
      { name: "Villeurbanne", quarters: [ 'La Doua', 'Le Tonkin', 'Gratte-Ciel', 'Buers' ] },
      { name: "Bron", quarters: [ 'A', 'B' ] },
      { name: "Vénessieux", quarters: null },
      { name: "Caluire-et-Cuire", quarters: [ 'Caluire', 'Cuire' ] },
    ];
    return [ brands, cities ];
  }

  static __getFlatGeoData__() {
    const [ brands, cities ] = FinancialHelpers.__getGeoData__();
    const flattenedDistricts = [];
    for (let i = 0; i < cities.length; i += 1) {
      if (cities[i].quarters !== null) {
        for (let j = 0; j < cities[i].quarters.length; j += 1) {
          flattenedDistricts.push(cities[i].name + (cities[i].quarters[j].indexOf(' ') > 0 ? " " : "-") + cities[i].quarters[j]);
        }
      } else {
        flattenedDistricts.push(cities[i].name);
      }
    }

    return  [ brands, flattenedDistricts ];
  }

  static getMaxStoreId() {
    const [ brands, cities ] = FinancialHelpers.__getGeoData__();
    let count = 0;
    for (let i = 0; i < cities.length; i += 1) {
      if (cities[i].quarters !== null) {
        count += cities[i].quarters.length;
      } else {
        count += 1;
      }
    }
    return (count * brands.length) - 1;
  }

  static __getStorePrintable__(brand, district) {
    return "Auchan" + (brand !== '' ? (" " + brand) : '') + " " + district;
  }

  static getStoreForId(id) {
    const [ brands, districts ] = FinancialHelpers.__getFlatGeoData__();

    return FinancialHelpers.__getStorePrintable__(brands[id % brands.length], districts[Math.floor(id / brands.length)]);
  }

  static getRandomStore() {
    const [ brands, districts ] = FinancialHelpers.__getFlatGeoData__();

    //shuffle through contents of each array, picking one entry per array
    const randBrand = brands[Math.floor(Math.random() * brands.length)];
    const randDistrict = districts[Math.floor(Math.random() * districts.length)];

    return FinancialHelpers.__getStorePrintable__(randBrand, randDistrict)
  }
}

export default FinancialHelpers