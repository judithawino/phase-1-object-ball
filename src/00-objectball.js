function gameObject(){
  const teams = {
    home:{
        teamName:"Brooklyn Nets",
        colors:["Blak","White"],
        players:{
          "Alan Anderson": {stat:
          {
            number:0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks:1,
            slamDunks:1,
          }},
          "Reggie Evans": {stat:
          {
            number:30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks:12,
            slamDunks:7,
          }},
          "Brook Lopez":{stat:
            {
            number:30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks:12,
            slamDunks:7,
            }
                        },
          "Mason Plumlee":{stat:
            {
            number:1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks:8,
            slamDunks:5,
            }
                        },
          "Jason Terry":{stat:
            {
            number:31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks:11,
            slamDunks:1,
            }
                        },
          
        }
      },
    away: {
      teamName:"Charlotte Hornets",
      colors:["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          stat: {
            number:4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks:7,
            slamDunks:2,
          }
        },
        "Bismak Biyombo": {
          stat: {
            number:0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks:15,
            slamDunks:10,
          }
        },
        "DeSagna Diop": {
          stat: {
            number:2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks:5,
            slamDunks:5,
          }
        },
        "Ben Gordon": {
          stat: {
            number:8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks:1,
            slamDunks:0,
          }
        },
        "Brendan Haywood": {
          stat: {
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
  }
  return teams
}
console.log(gameObject());

//create a game variable and use it to store the gameObject function
const game = gameObject()
//create a players variable and use it to store playersObject function
const players= playersObject()
//create a teams variable and use it to store the values of gameObject function
const teams= Object.values(game);

//create a function that uses the spread operator to create and return a new object that combines players both in home and away with all their stats
function playersObject(){
    
  return {...game.home.players, ...game.away.players};  
}
console.log (playersObject());

//using the players variable, the numPointsScored function calls the PlayersObject function and returns the points of a given player based on playerName
function numPointsScored(playerName){
  return players[playerName].points;
}
console.log (numPointsScored(playerName));

function shoeSize(playerName){
  return players[playerName].shoe;
}
console.log (shoeSize(playerName));

function teamNameFind(teamName){
  return teamVar.find(function(){teamName===teamName});
}
console.log(teamNameFind())

function teamColors(teamName){
    return teamNameFind(teamName).colors;
}
console.log (teamColors());

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
    return players[playerName];
}
console.log(playerStats());

function bigShoeRebounds(){
  //finding the player with the largest shoe size
  let largest=Object.values(players).sort(function(a,b){
    if (a.shoe > b.shoe)return -1;
    debugger;
    if (a.shoe < b.shoe)return 1;
    debugger;
    if (a.shoe===b.shoe)return 0;

    
    return largest
  })[0];//index 0 signfies the index of the player with the largest shoe
  console.log(largest)
  return largest.rebounds
}
console.log(bigShoeRebounds())


