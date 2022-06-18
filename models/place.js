const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const placeSchema=new Schema({
placeName: String,
photo: String,
country: String
});

const Place=mongoose.model('Places', placeSchema);

module.exports=Place;