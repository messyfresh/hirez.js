# Hi-Rez.js
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Promise based Object Oriented Node.js API Wrapper for Hi-Rez Studios games. 
Currently supporting the following games:
+ Smite
+ Paladins

Supporting all platforms.

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
process.env variable. The variables are as follows:
+ Smite:
  + PC === `process.env.SMITE_PC_SESSION`
  + XBOX === `process.env.SMITE_XBOX_SESSION`
  + PS4 === `process.env.SMITE_PS4_SESSION`
+ Paladins:
  + PC === `process.env.PALADINS_PC_SESSION`
  + XBOX === `process.env.PALADINS_XBOX_SESSION`
  + PS4 === `process.env.PALADINS_PS4_SESSION`

I did this because I was tired of passing the same few variables to every
single call to the api.  This library will pass all of those variables
for you auto-magically.

##### Generate a session

The 'smite' reference below can be interchanged with the desired game
+ smite
+ paladins

Also 'platform' reference can be interchanged with the desired platform
+ pc
+ xbox
+ ps4

```javascript
hirez.smite('platform').session.generate()
  .then((res) => {
  // The res variable with be your sessionId
  // It is also assigned to a process.env variable
})
```

Test the session
```javascript
hirez.smite('platform').test().then((response) => {
  // Successful or failed response
})
```

Smite
-----
Get Friends
```javascript
hirez.smite('platform').getFriends('Username')
```

Get Esports Pro League Details
```javascript
hirez.smite('platform').getEsportsProLeagueDetails()
```

Get God Ranks
```javascript
hirez.smite('platform').getGodRanks('Username')
```

Get Gods
```javascript
hirez.smite('platform').getGods()
```

Get God Skins
```javascript
hirez.smite('platform').getGodSkins('God Id')
```

Get God Recommended Items
```javascript
hirez.smite('platform').getGodRecommendedItems('God Id')
```

Get Items
```javascript
hirez.smite('platform').getItems()
```

Get Match Details
```javascript
hirez.smite('platform').getMatchDetails('Match Id')
```

Get Player Match Details
```javascript
hirez.smite('platform').getMatchPlayerDetails('Match Id')
```

Get Match Ids By Queue
```javascript
hirez.smite('platform').getMatchIdsByQueue('Queue Id', 'Date', 'Time')
```

Get League Leaderboard
```javascript
hirez.smite('platform').getLeagueLeaderBoard('Queue Id', 'Tier', 'Season')
```

Get League Seasons
```javascript
hirez.smite('platform').getLeagueSeasons('Queue Id')
```

Get Match History
```javascript
hirez.smite('platform').getMatchHistory('Username')
```

Get Match of the Day (MotD)
```javascript
hirez.smite('platform').getMotd()
```

Get Player
```javascript
hirez.smite('platform').getPlayer('Username')
```

Get Player Status
```javascript
hirez.smite('platform').getPlayerStatus('Username')
```

Get Queue Stats
```javascript
hirez.smite('platform').getQueueStats('Username', 'Queue Id')
```

Get Team Details
```javascript
hirez.smite('platform').getTeamDetails('Team Id')
```

Get Team Players
```javascript
hirez.smite('platform').getTeamPlayers('Team Id')
```

Get Top Matches
```javascript
hirez.smite('platform').getTopMatches()
```

Search Teams
```javascript
hirez.smite('platform').searchTeams('Search Term')
```

Get Player Achievements
```javascript
hirez.smite('platform').getPlayerAchievements('Player Id')
```

Get Patch Version
```javascript
hirez.smite('platform').getPatchInfo()
```

Ping API Webservice
```javascript
hirez.smite('platform').ping()
```

Get Data Used
```javascript
hirez.smite('platform').getDataUsed()
```

Paladins
--------

Get Friends
```javascript
hirez.paladins('platform').getFriends('Username')
```

Get Champion Ranks
```javascript
hirez.paladins('platform').getChampionRanks('Username')
```

Get Champions
```javascript
hirez.paladins('platform').getChampions()
```

Get Champion Skins
```javascript
hirez.paladins('platform').getChampionSkins('Champion Id')
```

Get Items
```javascript
hirez.paladins('platform').getItems()
```

Get Match Details
```javascript
hirez.paladins('platform').getMatchDetails('Match Id')
```

Get Match History
```javascript
hirez.paladins('platform').getMatchHistory('Username')
```

Get Player
```javascript
hirez.paladins('platform').getPlayer('Username')
```

Get Player Status
```javascript
hirez.paladins('platform').getPlayerStatus('Username')
```

Get Player Achievements
```javascript
hirez.paladins('platform').getPlayerAchievements('Player Id')
```

Get Patch Info
```javascript
hirez.paladins('platform').getPatchInfo()
```

Ping API Webservice
```javascript
hirez.paladins('platform').ping()
```

Get Data Used
```javascript
hirez.paladins('platform').getDataUsed()
```
