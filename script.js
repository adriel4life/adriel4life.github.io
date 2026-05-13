const recommendations = [
  "Linkin Park - In the End",
  "Korn - Freak on a Leash",
  "Slipknot - Duality",
  "Deftones - Change",
  "Limp Bizkit - Rollin'"
];

const pickButton = document.getElementById("pick-button");
const dailyPick = document.getElementById("daily-pick");

if (pickButton && dailyPick) {
  pickButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * recommendations.length);
    dailyPick.textContent = "Today's recommendation: " + recommendations[randomIndex];
  });
}

const moodSelect = document.getElementById("mood-select");
const moodResult = document.getElementById("mood-result");

if (moodSelect && moodResult) {
  moodSelect.addEventListener("change", function () {
    const mood = moodSelect.value;
    let message = "Your suggestion will appear here.";

    if (mood === "angry") {
      message = "Try Slipknot - Duality for an intense, heavy track.";
    } else if (mood === "emotional") {
      message = "Try Linkin Park - In the End for an emotional and reflective song.";
    } else if (mood === "dark") {
      message = "Try Deftones - Change for a darker, atmospheric sound.";
    } else if (mood === "fun") {
      message = "Try Limp Bizkit - Rollin' for a fun and energetic rap-rock track.";
    }

    moodResult.textContent = message;
  });
}
