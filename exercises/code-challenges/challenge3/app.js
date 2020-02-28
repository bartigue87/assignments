const data = [
  { state: "UT", city: "Salt Lake City" },
  { state: "CA", city: "San Diego" },
  { state: "CA", city: "San Francisco" },
  { state: "CO", city: "Denver" }
];

function makeStateObj(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const { state, city } = arr[i];
    // if result doesn't have a .arr[i].state
    // result.arr[i].state = []
    // ex: if result doesnt have a .UT
    if (!result[arr[i].state]) {
      result[state] = [city];
    }
    // result.UT = ["salt lake city"]
    //else
    else {
      result[state].push(city);
    }
    // result.push(city)
  }
  return result;
}

console.log(makeStateObj(data));

const answer = {
  UT: ["Salt Lake City"],
  CA: ["San Diego", "San Francisco"],
  CO: ["Denver"]
};
