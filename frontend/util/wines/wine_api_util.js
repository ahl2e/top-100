// export const fetchAllWines = () => {
//   fetch('/api/wines')
//   .then(res => res.json())//response type
//   .then(data => console.log(data)); //log the data;
// };


export const fetchAllWines = () => {
  return $.ajax({
    method: "GET",
    url: 'api/wines'
  });
};

export const fetchWineNote = (wineId) => {
  fetch(`https://top-100-example.s3.amazonaws.com/${wineId}.json`)
  .then(res => res.json())//response type
  .then(data => console.log(data)); //log the data;
};
