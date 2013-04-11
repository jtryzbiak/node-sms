userId = ObjectId();

db.users.insert({
  "_id": userId,
  "first_name" : "test", 
  "last_name" : "user", 
  "email" : "testuser@foo.com",
  "phone_number" : "111-222-3333"
});

db.conversations.insert({
  "owner" : userId,
  "conversationWith" : '555-111-2222',
  "messages" : [
    {
      "to" : '111-222-3333',
      "from" : '555-111-2222',
      "body" : 'External user: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      "to" : '555-111-2222',
      "from" : '111-222-3333',
      "body" : 'Test User: Pellentesque pretium turpis a tellus venenatis eget tincidunt arcu tristique. Nam quis tortor sem. Cras pulvinar sollicitudin.'
    }
  ]
});

db.conversations.insert({
  "owner" : userId,
  "conversationWith" : '555-222-3333',
  "messages" : [
    {
      "to" : '555-222-3333',
      "from" : '111-222-3333',
      "body" : 'Test User: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      "to" : '111-222-3333',
      "from" : '555-222-3333',
      "body" : 'External User: Pellentesque pretium turpis a tellus venenatis eget tincidunt arcu tristique. Nam quis tortor sem. Cras pulvinar sollicitudin.'
    }
  ]
});