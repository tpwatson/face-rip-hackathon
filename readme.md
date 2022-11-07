Hackathon Functional NFTs:
What would be the function outside of just being an NFT?
Users will log in via their socials, and mint their content as NFTs (which can be sold, bought, etc).
The holder of the NFT will be able to display it on our website to try to grow their face collections.
The NFT will be a link to their content.
They could also sell NFTs which allow monetization via the usual variety of ads, and sponsorships.


Value Proposition:
Solving bordem in the NFT space with a unique twist, thus giving a whole new community access to creating highly valuable NFTs.

Content creators can see real reactions to their content (funny content gives them lots of real laughing and smiling faces). Their content can be minted into NFTs (that have a history of face reactions). The NFTs can then be sold at a high price do to their intrinsic value.
Content consumers have a new way to view content, stuff that doesn't cause a reaction gets filtered out, and content that is so good it creates reactions will rise.
They also can engage in a more social and real form of social media because their face is in it.
Using faces, wallets, and real world value we can eliminate many bots, spammers, scammers.
On XRPL we can have lots of small transactions occuring often.

Identify Customers & Acquisition Plan:

XRP Community, NFT Community, funny content creators, Twitch Community, People who didn't join TikTok but want to jump on the next thing
Start with launching to the XRP + NFT Community, try to get the funniest people from those communities to post their best content and start the virtuous cycle.
Add the different game modes and MM-Async ideas as best as possible to keep the communities engaged and entertained with new ways to spend their time interacting.
IF faces start rolling in, and sharing content is implemented fully, try to get funny content creators on (Comedians with an interest in new monetization strategies)
Reach out to biggest name comedians and make this the platform that is built for them.
Then create twitch extension to increase broader adoption.
Then if we make it to this point the last large segment will naturally be attracted to join.

Identify Problems or challenges your customers have:
NFT space is saturated. AI is making certain art styles obsolete. 
Crypto communities are thirsty for new dapps and creative fun new ideas to play around with.
Content posted on 3rd party social media platforms can be bought and sold.
There isn't a platform built for comedians specifically. (Edit: Elon just asked Twitter if he should bring back Vine)
Social media is cancelling people and people don't like it. Social media is swarmed by bots and fake people. 

Solution: 
FaceRip, a combination of a social media platform and NFT marketplace, where people's real faces are an integral part of user interactions.
Using face recognition, and wallet log-ins, we also eliminate bots, fake accounts, and scammers.



Start with skeleton, just pages and links no content or design yet

Index page
Feed Page
Profile Page
Authentication

Next build the nav bar v1
Logo (placeholder) on left, a search bar (non func), upload button, login button (highlighted), settings icon (non func)

Now determine how to best display content units.

If users can share youtube, twitter, tiktok, or upload - what is the best way?

Cards for each type.

When a user watches the content we need to engage the camera, and recognize face then start playing.


1✔️) Add way to upload a piece of content (ipfs) using web3.storage for simplicity
✔️Save uploaded content to the db with metadata attached
Perhaps save user data in the web app's state
Make it so only logged in users can upload content
Make it so content is stored in the database with the ipfs hash, and the user's account


2 ✔️) save data to DB (somewhere)
✔️Postgre Needed to facilitate

3 ✔️) Create new user
Create user on sign up page

4) Log in with user
Associate youtube or twitter account
Post content from social

5) mint NFTObject to XRPL
Create an NFT of the posted content
Get a feel for the costs and frictions for user to mint NFTs onto XRPL


6) view on content single page
engage camera while viewing content and perform face recog reaction detection
save reaction image and update user's face-collection with the correct data
On user profile page make a grid of their face-collection
Automatically make user connected sharing links for viewers to share content with those on other social media. (Growth hack)

7) Post latest uploads/posts in feed

Main purpose needed:
Creator upload/mint funny content
Viewer View content
If laugh, save face or landmark data somewhere linked to creator's profile data
Poster's profile shows collected faces


How to implement rewarding of users who share links?
Who ever clicks the special user attached link to the content, if they react to it the face will go to the sharer.
This will reward industrious sharers and encourage them to share more.