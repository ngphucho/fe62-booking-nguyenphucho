const createChairMap = {
  //tao so do ghe
  map1: () => {
    const map = [];
    let line = new Array(16).fill(false);
    map.push([...line].fill(true, 4, 12)); //1
    map.push([...line].fill(true, 3, 13)); //2
    map.push([...line].fill(true, 1, 15)); //3
    map.push([...line].fill(true)); //4
    map.push([...line].fill(true)); //5
    map.push([...line].fill(true)); //6
    map.push([...line].fill(true)); //7
    map.push([...line].fill(true)); //8
    map.push([...line].fill(true)); //9
    map.push([...line].fill(true)); //10
    map.push([...line].fill(true)); //11
    // map.push([...line].fill(true, 1, 15)); //11
    // map.push([...line].fill(true)); //12
    return map;
  },
};

export default createChairMap;

// map1: () => {
//   const map = [];
//   let line = new Array(16).fill(false);
//   map.push([...line].fill(true, 3, 13)); //1
//   map.push([...line].fill(true, 3, 13)); //2
//   map.push([...line].fill(true, 2, 14)); //3
//   map.push([...line].fill(true, 1, 15)); //4
//   map.push([...line].fill(true, 1, 15)); //5
//   map.push([...line].fill(true, 1, 15)); //6
//   map.push([...line].fill(true, 1, 15)); //7
//   map.push([...line].fill(true, 1, 15)); //8
//   map.push([...line].fill(true, 1, 15)); //9
//   map.push([...line].fill(true, 1, 15)); //10
//   map.push([...line].fill(true, 1, 15)); //11
//   map.push([...line].fill(true)); //12
//   return map;
// },