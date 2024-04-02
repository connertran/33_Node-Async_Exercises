// 1
try {
  let favoriteNum = 10;
  let url1 = `http://numbersapi.com/${favoriteNum}?json`;

  async function getFact() {
    let res = await axios.get(url1);
    console.log(res.data.text);
  }

  getFact();
} catch (e) {
  console.log(`The error: ${e}`);
}

// 2
let numList = [1, 2, 3];
let url2 = `http://numbersapi.com/`;
for (let i = 0; i < numList.length; i++) {
  if (i === numList.length - 1) {
    url2 += numList[i];
  } else {
    url2 += numList[i] + ",";
  }
}
try {
  async function getFactManyNum() {
    let res2 = await axios.get(url2, { params: { json: true } });
    console.log(res2.data);
  }
  getFactManyNum();
} catch (e) {
  console.log(`The error: ${e}`);
}

// 3
let $factsDiv = $(".facts-div");
let favoriteNum3 = 11;
let url3 = `http://numbersapi.com/${favoriteNum3}?json`;

try {
  async function get4Fact() {
    for (let i = 0; i < 4; i++) {
      let res = await axios.get(url3);
      $factsDiv.append(`<p>${res.data.text}</p>`);
    }
  }
  get4Fact();
} catch (e) {
  console.log(`The error: ${e}`);
}
