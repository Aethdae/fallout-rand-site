//@ts-nocheck
export function getKarma(karmaTypes: string[]) {
  try {
    let x = getRandomNumber(karmaTypes.length);
    return karmaTypes[x];
  } catch (err) {
    console.error(err);
    return "Neutral";
  }
}

export function getSkills(skillsData) {
  let skills = [];
  let skillOptions = skillsData;

  for (let x = 0; x < 3; x++) {
    var rand = getRandomNumber(skillOptions.length);
    skills.push(skillOptions[rand]);
    skillOptions.splice(rand, 1);
  }
  return skills;
}

export function getSpecial() {
  let special = [1, 1, 1, 1, 1, 1, 1];
  let x = 0;
  while (x < 33) {
    let rand = getRandomNumber(7);
    if (special[rand] < 10) {
      special[rand]++;
      x++;
    }
  }
  return special;
}

export function getChallenges(challengeOptions: object, amount: number) {
  console.log(challengeOptions);
  try {
    let challenges = [];
    let challengeTypes = getChallengeTypes(challengeOptions);
    if (amount == 3) {
      challenges.push(
        challengeOptions.gameChanger[
          getRandomNumber(challengeOptions.gameChanger.length)
        ],
      );
      challenges.push(
        challengeOptions.impactful[
          getRandomNumber(challengeOptions.impactful.length)
        ],
      );
      challenges.push(
        challengeOptions.lowImpact[
          getRandomNumber(challengeOptions.lowImpact.length)
        ],
      );
    } else if (amount == 2) {
      let getChall = [];
      let startChallenges = [];

      let randCat1 = getRandomNumber(challengeTypes.length);

      getChall.push(challengeTypes[randCat1]);
      challengeTypes.splice(randCat1, 1);

      getChall.push(challengeTypes[getRandomNumber(challengeTypes.length)]);

      startChallenges.push(challengeOptions[getChall[0]]);
      startChallenges.push(challengeOptions[getChall[1]]);

      for (let x = 0; x < 2; x++) {
        challenges.push(
          startChallenges[x][getRandomNumber(startChallenges[x].length)],
        );
      }
      challenges.push("N/A");
    } else if (amount == 1) {
      let getChall = [];
      let startChallenges = [];

      let randCat1 = getRandomNumber(challengeTypes.length);

      getChall.push(challengeTypes[randCat1]);
      startChallenges.push(challengeOptions[getChall[0]]);
      challenges.push(
        startChallenges[0][getRandomNumber(startChallenges[0].length)],
      );
      challenges.push("N/A");
      challenges.push("N/A");
    } else if (amount == 0) {
      return ["N/A", "N/A", "N/A"];
    }
    return challenges;
  } catch (err) {
    console.error(err);
    return ["", "", ""];
  }
}

function getChallengeTypes(challengeOptions: object) {
  let arr = [];
  for (const key of Object.keys(challengeOptions)) {
    arr.push(key);
  }
  return arr;
}

function getRandomNumber(upper: number) {
  return Math.floor(Math.random() * upper);
}
