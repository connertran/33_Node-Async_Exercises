let deckId;
let $gimmeBtn = $(".gimme-btn");

function getRandomAngle() {
  const num = Math.random();

  const randomAngle = num * 61 - 30;

  return randomAngle;
}
function getRandomPosition() {
  const p1 = Math.floor(Math.random() * 21 - 10);
  const p2 = Math.floor(Math.random() * 21 - 10);
  return [p1, p2];
}

async function getDeckId() {
  try {
    let res = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    deckId = res.data.deck_id;
  } catch (e) {
    console.log(`error ${e}`);
  }
}

async function DrawACard() {
  $gimmeBtn.prop("disabled", true);
  if (deckId === undefined) {
    await getDeckId();
  }
  try {
    let res = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    );
    if (res.data.remaining === 0) {
      $gimmeBtn.remove();
    }
    console.log(res);
    console.log(res.data.remaining);
    console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`);
    const randomAngle = getRandomAngle();
    const [p1, p2] = getRandomPosition();
    $(".cards-div").append(
      `<img class="rotated" src="${res.data.cards[0].image}" alt="card" style="transform: rotate(${randomAngle}deg); left: ${p1}px; right: ${p2}px">`
    );
  } catch (e) {
    console.log(`Error: ${e}`);
  }
  $gimmeBtn.prop("disabled", false);
}

$gimmeBtn.on("click", DrawACard);
