var convertBtn = document.querySelector(".convert-button");
var infoBtn = document.querySelector(".info-button");
var testBtn = document.querySelector(".test-button");
var URLinput = document.querySelector(".URL-input");

convertBtn.addEventListener("click", () => {
  console.log(`URL: ${URLinput.value}`);
  sendURL(URLinput.value);
});

infoBtn.addEventListener("click", () => {
  console.log("Getting details: " + `URL: ${URLinput.value}`);
  getDetails(URLinput.value);
});

testBtn.addEventListener("click", () => {
  test(URLinput.value);
});

function sendURL(URL) {
  window.location.href = `http://localhost:4000/youtube/download?URL=${URL}`;
}

function getDetails(URL) {
  window.location.href = `http://localhost:4000/youtube/getdetails?URL=${URL}`;
}

function test(URL) {
  const SUB = "memes";
  const POST = 20;

  window.location.href = `http://localhost:4000/reddit?SUB=${SUB}&POST=${POST}`;

  console.log("okayy");
}
