# Hi-Rez.js
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Promise based Object Oriented Node.js API Wrapper for Hi-Rez Studios games. 
Currently supporting the following games:
+ Smite
  + PC Version Only
+ Paladins
  
Xbox and PS4 not implemented.

Getting Started
---------------
 
Start with
`npm install hirez.js --save`

Fill out the form [here](https://fs12.formsite.com/HiRez/form48/secure_index.html)
to request access to the api

Initialize the module with a devId and authKey

```javascript
const Hirez = require('hirez.js')

let hirez = new Hirez({
  devId: 'Insert DevId Here',
  authKey: 'Insert AuthKey Here'
})
```

Sessions
--------

I have made this module a little opinionated in that when you generate
a Session ID, it will be returned with the promise AND stored in a
process.env variable.  The variables are as follows
+ Smite PC === process.env.smiteSession
+ Paladins PC === process.env.paladinsSession

I did this because I was tired of passing the same few variables to every
single call to the api.  This library will pass all of those variables
for you auto-magically.

##### Generate a session

The 'smite' reference below can be interchanged with the desired platform
+ smite
+ paladins

```javascript
hirez.smite.session.generate()
  .then((res) => {
  // The res variable with be your sessionId
  // It is also assigned to a process.env variable
})
```

Test the session
```javascript
hirez.session.test().then((response) => {
  // Successful or failed response
})
```

Smite
-----
Get Friends
```javascript
hirez.smite.getFriends('Username')
```

Get Esports Pro League Details
```javascript
hirez.smite.getEsportsProLeagueDetails()
```

Get God Ranks
```javascript
hirez.smite.getGodRanks('Username')
```

Get Gods
```javascript
hirez.smite.getGods()
```

Get God Skins
```javascript
hirez.smite.getGodSkins('God Id')
```

Get God Recommended Items
```javascript
hirez.smite.getGodRecommendedItems('God Id')
```

Get Items
```javascript
hirez.smite.getItems()
```

Get Match Details
```javascript
hirez.smite.getMatchDetails('Match Id')
```

Get Player Match Details
```javascript
hirez.smite.getMatchPlayerDetails('Match Id')
```

Get Match Ids By Queue
```javascript
hirez.smite.getMatchIdsByQueue('Queue Id', 'Date', 'Time')
```

Get League Leaderboard
```javascript
hirez.smite.getLeagueLeaderBoard('Queue Id', 'Tier', 'Season')
```

Get League Seasons
```javascript
hirez.smite.getLeagueSeasons('Queue Id')
```

Get Match History
```javascript
hirez.smite.getMatchHistory('/Username')
```

Get Match of the Day (MotD)
```javascript
hirez.smite.getMotd()
```

Get Player
```javascript
hirez.smite.getPlayer('Username')
```

Get Player Status
```javascript
hirez.smite.getPlayerStatus('Username')
```

Get Queue Stats
```javascript
hirez.smite.getQueueStats('Username', 'Queue Id')
```

Get Team Details
```javascript
hirez.smite.getTeamDetails('Team Id')
```

Get Team Players
```javascript
hirez.smite.getTeamPlayers('Team Id')
```

Get Top Matches
```javascript
hirez.smite.getTopMatches()
```

Search Teams
```javascript
hirez.smite.searchTeams('Search Term')
```

Get Player Achievements
```javascript
hirez.smite.getPlayerAchievements('Player Id')
```

Get Patch Version
```javascript
hirez.smite.getPatchInfo()
```

Ping API Webservice
```javascript
hirez.smite.ping()
```

Get Data Used
```javascript
hirez.smite.getDataUsed()
```

Paladins
--------

Get Friends
```javascript
hirez.paladins.getFriends('Username')
```

Get Champion Ranks
```javascript
hirez.paladins.getChampionRanks('Username')
```

Get Champions
```javascript
hirez.paladins.getChampions()
```

Get Champion Skins
```javascript
hirez.paladins.getChampionSkins('Champion Id')
```

Get Items
```javascript
hirez.paladins.getItems()
```

Get Match Details
```javascript
hirez.paladins.getMatchDetails('Match Id')
```

Get Match History
```javascript
hirez.paladins.getMatchHistory('Username')
```

Get Player
```javascript
hirez.paladins.getPlayer('Username')
```

Get Player Status
```javascript
hirez.paladins.getPlayerStatus('Username')
```

Get Player Achievements
```javascript
hirez.paladins.getPlayerAchievements('Player Id')
```

Get Patch Info
```javascript
hirez.paladins.getPatchInfo()
```

Ping API Webservice
```javascript
hirez.paladins.ping()
```

Get Data Used
```javascript
hirez.paladins.getDataUsed()
```
