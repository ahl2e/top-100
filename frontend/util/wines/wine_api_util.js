export const fetchAllWines = () => {
  fetch('https://top-100-example.s3.amazonaws.com/t100_2018.json')
  .then(res => res.json())//response type
  .then(data => console.log(data)); //log the data;
};

export const fetchWineNote = (wineId) => {
  fetch(`https://top-100-example.s3.amazonaws.com/${wineId}.json`)
  .then(res => res.json())//response type
  .then(data => console.log(data)); //log the data;
};
