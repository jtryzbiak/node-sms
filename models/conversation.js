var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var ConversationSchema = new Schema({
  owner: { type: Schema.ObjectId, ref: 'User'},
  conversationWith: { type: String },
  messages : [{
    to : { type: String },
    from : { type : String },
    body : { type : String },
    status : { type : String},
    created : { type: Date, default : Date.now }
  }],
  created: {type: Date, default : Date.now } 
});

ConversationSchema.statics = {

  list: function(criteria, callback) {
     
    this.find(criteria)
      .populate('owner')
      .where('messages').slice(-1)
      .sort({'created' : -1})
      .exec(callback);
  }
};

mongoose.model('Conversation', ConversationSchema);