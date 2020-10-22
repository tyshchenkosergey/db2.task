The API lets unauthenticated users read alredy posted messages and post their own messages in chat so others can read them. All messages are being saved in database

API methods:

GET - View all messages
/messages

GET - View single message by unique identifier
/messages/single/:id

GET - View all messages grouped by 10 per request
/messages/list/:pageNum

POST - Add new messages
/message

Please refer to the documentation on https://documenter.getpostman.com/view/11931541/TVYCAKn3
