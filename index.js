function theBeatlesPlay(musicians, instruments){
  var pairings = [];
  for (var i = 0; i < musicians.length; i++){
    pairings.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return pairings;
}

function johnLennonFacts(facts){
  var answer = [];
  var i = 0
  while (i < facts.length){
    answer.push(`${facts[i]}!!!`);
    i++;
  }
  return answer;
}


function iLoveTheBeatles(num){
  var answer = [];
  do {
    answer.push("I love the Beatles!");
    num++
  } while (num < 15);
  return answer;
}
