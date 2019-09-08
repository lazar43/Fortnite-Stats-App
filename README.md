# Fortnite Stats App

Fortnite Stats it's a simple app that provide players stats by typing player name and platform where his playing

![Screenshot (8)](https://user-images.githubusercontent.com/44750763/63176235-dc21f480-c045-11e9-81aa-cb3ec1f55ad4.png)

## Used technologies

- HTML5
- CSS3
- Bootstrap
- Javascript(ES6)

## API

If you want to use this API you first need to register on this link https://thetrackernetwork.com/auth/register?domain=fortnitetracker.com.
After registration you need to create application where you will be get the API Key,than you need to include it in fetching headers...

## Example

```js
const headers = {
  "TRN-Api-Key": "YOUR API KEY"
};

fetch(`https://api.fortnitetracker.com/v1/profile/${platform}/${name}`, {
  headers
});
```

**<b>Note:</b> This App is for example.Your API Key need to be private,be sure if you want to deploy on the web,you must put your API Key as environment variable... **

<b>Get Fornite BR Player Stats</b>

GET https://api.fortnitetracker.com/v1/profile/{platform}/{epic-nickname}

Platforms: pc, xbl, psn

<b>Get Fornite Match History</b>

GET https://api.fortnitetracker.com/v1/profile/account/{accountId}/matches

Account ID: A Guid, found in the Get BR Player Stats Endpoint.

<b>Get Current Fortnite Store</b>

GET https://api.fortnitetracker.com/v1/store

<b>Get Current Active Challenges</b>

GET https://api.fortnitetracker.com/v1/challenges
