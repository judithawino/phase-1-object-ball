function gameObject(){
  const teams = {
    home:{
        teamName:"Brooklyn Nets",
        colors:["Blak","White"],
        players:{
          "Alan Anderson": {
            number:0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks:1,
            slamDunks:1,
          },
          "Reggie Evans": {
            number:30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks:12,
            slamDunks:7,
          },
          "Brook Lopez":{
            number:30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks:12,
            slamDunks:7,
          },
          "Mason Plumlee":{
            number:1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks:8,
            slamDunks:5,
          },
          "Jason Terry":{
            number:31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks:11,
            slamDunks:1,
          },
          
        }
      },
    away: {
      teamName:"Charlotte Hornets",
      colors:["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {          
            number:4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks:7,
            slamDunks:2,          
        },
        "Bismak Biyombo": {          
            number:0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks:15,
            slamDunks:10,          
        },
        "DeSagna Diop": {          
            number:2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks:5,
            slamDunks:5,
        },
        "Ben Gordon": {          
            number:8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks:1,
            slamDunks:0,
        },
        "Brendan Haywood": {         
            number:33,
            shoe:15,
            points:6,
            rebounds:12,
            assists:12,
            steals:22,
            blocks:5,
            slamDunks:12,
        }
      }
    }
  }
  return teams
}
console.log(gameObject());

function homeTeamName(){
  let object = gameObject()
  return object["home"]["teamName"]
}
console.log(homeTeamName())

const game = gameObject()
const players= playersObject()
const teamVar= Object.values(game);

function playersObject(){
  return {...game.home.players, ...game.away.players};  
}
console.log (playersObject());

function numPointsScored(playerName="Brendan Haywood"){
  return players[playerName].points;
}
console.log (numPointsScored("Jason Terry"));

function shoeSize(playerName="Brendan Haywood"){
 return players[playerName].shoe;
}
console.log (shoeSize("Jason Terry"));

function teamNameFind(teamName="Brooklyn Nets"){
  return teamVar.find((teamVar)=>teamName===teamName);
}
console.log(teamNameFind())

function teamColors(teamName="Charlotte Hornets"){
    return teamNameFind(teamName).colors;
}
console.log (teamColors("Brooklyn Nets"));

function teamNames(){
  return teamVar.map(function(team){return team.teamName});  
}
console.log(teamNames());

function playerNumbers(teamNameArg="Charlotte Hornets"){
  for (let team of teamVar) {
    if (team.teamName===teamNameArg) {
      let stat = Object.values(team.players);
      return stat.map(function(stat){return stat.number});
    }
    
  }
}
console.log(playerNumbers())

function playerStats(playerName="Ben Gordon"){
  return players[playerName]
  
}
console.log (playerStats())

function bigShoeRebounds(){
  //finding the player with the largest shoe size
  let largest=Object.values(players).sort(function(a,b){
    if (a.shoe > b.shoe)return -1;
    debugger;
    if (a.shoe < b.shoe)return 1;
    debugger;
    if (a.shoe===b.shoe)return 0;

    
    return largest
  })[0];
  console.log(largest)
  return largest.rebounds
}
console.log(bigShoeRebounds())

function mostPointsScored(){
  //finding the player with the most points
      //using Object.entries() to return an array of playersObject enumerating its keys and values then applying .sort()to sort the array
  let mostPoints=Object.entries(players).sort(function(a,b){
    if (a[1].shoe > b[1].shoe)return -1;
    debugger;
    if (a[1].shoe < b[1].shoe)return 1;
    debugger;
    if (a[1].shoe===b[1].shoe)return 0; 
    
  });  
  return mostPoints[0][0]//accessing nested arrays
}
console.log(mostPointsScored())
