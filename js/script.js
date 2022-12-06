const bodyElem = document.querySelector(".mainBody");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "24aebfe348msh81adad22fbacaefp15befejsn42b35fd8ecd2",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

let result = "";

const retrieveData = async () => {
  const data = await fetch(
    "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  result = await data.data;

  result.map((res) => {
    const dataContainer = document.createElement("div");
    const detailContainer = document.createElement("div");
    const mainContainer = document.createElement("div");

    dataContainer.setAttribute("class", "cityBody");
    detailContainer.setAttribute("class", "detailBody");
    mainContainer.setAttribute("class", "mainContainer");

    const cityCode = document.createElement("h3");
    const cityName = document.createElement("h3");

    const actualName = document.createElement("h1");
    const longitude = document.createElement("h3");
    const latitude = document.createElement("h3");
    const region = document.createElement("h3");
    const regionCode = document.createElement("h1");

    cityCode.textContent = res.countryCode;
    cityName.textContent = res.country;
    actualName.textContent = res.name;
    longitude.textContent = res.longitude;
    latitude.textContent = res.latitude;
    region.textContent = res.region;
    regionCode.textContent = res.regionCode;

    detailContainer.appendChild(cityName);
    detailContainer.appendChild(region);
    detailContainer.appendChild(cityCode);
    detailContainer.appendChild(longitude);
    detailContainer.appendChild(latitude);

    dataContainer.append(actualName);
    dataContainer.append(regionCode);

    mainContainer.appendChild(dataContainer);
    mainContainer.appendChild(detailContainer);
    bodyElem.appendChild(mainContainer);
  });

  console.log(result);
};

retrieveData();
