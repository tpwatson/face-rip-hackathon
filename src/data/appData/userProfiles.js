/*
USERS can log in and log out. They can also register a new account.
USERS can create, edit, and delete CONTENT. They can also view CONTENT.
USERS can be authenticated by social authentication

USERS can buy NFT content in their "collection" (this is a collection of NFTs that they own) and view their collection
USERS can sell their content as NFTs and view their sales history
USERS who collected other content will get faces added to their profile data, but the original creator will also have a link attribution to their content


Save users with a primary id key, this way they can have multiple socials tied to them, and they can be authenticated by any of them
This way all data that is tied to their profile can be within the same table

Start with a simple user model, then add more data to it as needed
*/