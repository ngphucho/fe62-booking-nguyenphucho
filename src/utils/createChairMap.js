const createChairMap = {
  //tao so do ghe
  map1: () => {
    const map = [];
    let line = new Array(16).fill(false);
    map.push([...line].fill(true, 3, 13)); //1
    map.push([...line].fill(true, 3, 13)); //2
    map.push([...line].fill(true, 2, 14)); //3
    map.push([...line].fill(true, 1, 15)); //4
    map.push([...line].fill(true, 1, 15)); //5
    map.push([...line].fill(true, 1, 15)); //6
    map.push([...line].fill(true, 1, 15)); //7
    map.push([...line].fill(true, 1, 15)); //8
    map.push([...line].fill(true, 1, 15)); //9
    map.push([...line].fill(true, 1, 15)); //10
    map.push([...line].fill(true, 1, 15)); //11
    map.push([...line].fill(true)); //12
    return map;
  },
};

export default createChairMap;
