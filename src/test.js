async function test() {
  let response = await fetch(
    "https://rest.immobilienscout24.de/restapi/api/search/v1.0/search/region?realestatetype=apartmentbuy&geocodes=1276003001046&newbuilding=true (search for apparmentBuy in Berlin Mitte with attribute Neubau)"
  );
  let data = response.json();
  return data;
}

test()
  .then(data => console.log(data))
  .catch(error => console.log(error));
