use jaskis
switched to db jaskis
db
jaskis
db.createCollection('bounties')
{ ok: 1 }
show collections
bounties
use jaskis
already on db jaskis
show collections
bounties
db.bounties.insertOne({
name: "Thanoceros",
species: "Rhinoceros",
location: "Grasslands",
wantedFor: "Eating too much grass",
client: "Songbird",
reward: 10000,
captured: false
})
{
  acknowledged: true,
  insertedId: ObjectId('65b6a9568326115301a62a53')
}
db.bounties.find()
{
  _id: ObjectId('65b6a9568326115301a62a53'),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false
}
db.bounties.insertMany({
[
  {
    "name": "Lokinkajou",
    "species": "Kinkajou",
    "location": "Tropical rainforest",
    "wantedFor": "Partying too late at night",
    "client": "White tiger",
    "reward": 1000,
    "captured": false
  },
  {
    "name": "Nebullama",
    "species": "Llama",
    "location": "Grasslands",
    "wantedFor": "Drinking all the water from the ocean",
    "client": "Songbird",
    "reward": 2500,
    "captured": false
  },
  {
    "name": "Polarwind",
    "species": "Polar Bear",
    "location": "Arctic",
    "wantedFor": "Not hibernating",
    "client": "Sabertooth",
    "reward": 4000,
    "captured": false
  },
  {
    "name": "Wrecking Crows",
    "species": "Crow",
    "location": "Grasslands",
    "wantedFor": "Cawing too loudly",
    "client": "Red wolf",
    "reward": 40000,
    "captured": false
  },
  {
    "name": "Grandhog",
    "species": "Groundhog",
    "location": "Woodlands",
    "wantedFor": "Not coming out of the hole on time and prolonging winter",
    "client": "Songbird",
    "reward": 50000,
    "captured": false
  },
  {
    "name": "Grim Panda",
    "species": "Giant Panda",
    "location": "Temperate forest",
    "wantedFor": "Eating all the bamboo",
    "client": "Red wolf",
    "reward": 5000,
    "captured": false
  }
]})
SyntaxError: Unexpected token, expected "]" (11:3)

   9 |     "reward": 1000,
  10 |     "captured": false
> 11 |   },
     |    ^
  12 |   {
  13 |     "name": "Nebullama",
  14 |     "species": "Llama",
db.bounties.insertMany(
[
  {
    "name": "Lokinkajou",
    "species": "Kinkajou",
    "location": "Tropical rainforest",
    "wantedFor": "Partying too late at night",
    "client": "White tiger",
    "reward": 1000,
    "captured": false
  },
  {
    "name": "Nebullama",
    "species": "Llama",
    "location": "Grasslands",
    "wantedFor": "Drinking all the water from the ocean",
    "client": "Songbird",
    "reward": 2500,
    "captured": false
  },
  {
    "name": "Polarwind",
    "species": "Polar Bear",
    "location": "Arctic",
    "wantedFor": "Not hibernating",
    "client": "Sabertooth",
    "reward": 4000,
    "captured": false
  },
  {
    "name": "Wrecking Crows",
    "species": "Crow",
    "location": "Grasslands",
    "wantedFor": "Cawing too loudly",
    "client": "Red wolf",
    "reward": 40000,
    "captured": false
  },
  {
    "name": "Grandhog",
    "species": "Groundhog",
    "location": "Woodlands",
    "wantedFor": "Not coming out of the hole on time and prolonging winter",
    "client": "Songbird",
    "reward": 50000,
    "captured": false
  },
  {
    "name": "Grim Panda",
    "species": "Giant Panda",
    "location": "Temperate forest",
    "wantedFor": "Eating all the bamboo",
    "client": "Red wolf",
    "reward": 5000,
    "captured": false
  }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('65b6a9c28326115301a62a54'),
    '1': ObjectId('65b6a9c28326115301a62a55'),
    '2': ObjectId('65b6a9c28326115301a62a56'),
    '3': ObjectId('65b6a9c28326115301a62a57'),
    '4': ObjectId('65b6a9c28326115301a62a58'),
    '5': ObjectId('65b6a9c28326115301a62a59')
  }
}
db.bounties.find()
{
  _id: ObjectId('65b6a9568326115301a62a53'),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false
}
{
  _id: ObjectId('65b6a9c28326115301a62a54'),
  name: 'Lokinkajou',
  species: 'Kinkajou',
  location: 'Tropical rainforest',
  wantedFor: 'Partying too late at night',
  client: 'White tiger',
  reward: 1000,
  captured: false
}
{
  _id: ObjectId('65b6a9c28326115301a62a55'),
  name: 'Nebullama',
  species: 'Llama',
  location: 'Grasslands',
  wantedFor: 'Drinking all the water from the ocean',
  client: 'Songbird',
  reward: 2500,
  captured: false
}
{
  _id: ObjectId('65b6a9c28326115301a62a56'),
  name: 'Polarwind',
  species: 'Polar Bear',
  location: 'Arctic',
  wantedFor: 'Not hibernating',
  client: 'Sabertooth',
  reward: 4000,
  captured: false
}
{
  _id: ObjectId('65b6a9c28326115301a62a57'),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  client: 'Red wolf',
  reward: 40000,
  captured: false
}
{
  _id: ObjectId('65b6a9c28326115301a62a58'),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  client: 'Songbird',
  reward: 50000,
  captured: false
}
{
  _id: ObjectId('65b6a9c28326115301a62a59'),
  name: 'Grim Panda',
  species: 'Giant Panda',
  location: 'Temperate forest',
  wantedFor: 'Eating all the bamboo',
  client: 'Red wolf',
  reward: 5000,
  captured: false
}
db.bounties.find({location: "Grasslands"})
{
  _id: ObjectId('65b6a9568326115301a62a53'),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false
}
{
  _id: ObjectId('65b6a9c28326115301a62a55'),
  name: 'Nebullama',
  species: 'Llama',
  location: 'Grasslands',
  wantedFor: 'Drinking all the water from the ocean',
  client: 'Songbird',
  reward: 2500,
  captured: false
}
{
  _id: ObjectId('65b6a9c28326115301a62a57'),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  client: 'Red wolf',
  reward: 40000,
  captured: false
}
db.bounties.find({reward: { $gte: 10000}})
{
  _id: ObjectId('65b6a9568326115301a62a53'),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false
}
{
  _id: ObjectId('65b6a9c28326115301a62a57'),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  client: 'Red wolf',
  reward: 40000,
  captured: false
}
{
  _id: ObjectId('65b6a9c28326115301a62a58'),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  client: 'Songbird',
  reward: 50000,
  captured: false
}
db.bounties.find({}, {client: 0})
{
  _id: ObjectId('65b6a9568326115301a62a53'),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  reward: 10000,
  captured: false
}
{
  _id: ObjectId('65b6a9c28326115301a62a54'),
  name: 'Lokinkajou',
  species: 'Kinkajou',
  location: 'Tropical rainforest',
  wantedFor: 'Partying too late at night',
  reward: 1000,
  captured: false
}
{
  _id: ObjectId('65b6a9c28326115301a62a55'),
  name: 'Nebullama',
  species: 'Llama',
  location: 'Grasslands',
  wantedFor: 'Drinking all the water from the ocean',
  reward: 2500,
  captured: false
}
{
  _id: ObjectId('65b6a9c28326115301a62a56'),
  name: 'Polarwind',
  species: 'Polar Bear',
  location: 'Arctic',
  wantedFor: 'Not hibernating',
  reward: 4000,
  captured: false
}
{
  _id: ObjectId('65b6a9c28326115301a62a57'),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  reward: 40000,
  captured: false
}
{
  _id: ObjectId('65b6a9c28326115301a62a58'),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  reward: 50000,
  captured: false
}
{
  _id: ObjectId('65b6a9c28326115301a62a59'),
  name: 'Grim Panda',
  species: 'Giant Panda',
  location: 'Temperate forest',
  wantedFor: 'Eating all the bamboo',
  reward: 5000,
  captured: false
}
db.bounties.find({species:  {$and: "Woodlands"}})
MongoServerError: unknown operator: $and
db.bounties.find({
$and: [
  {species: "Groundhog"},
  {location: "Grasslands"}
]})
db.bounties.find({
species: "Groundhog",
location: "Grasslands"
})
db.bounties.find({
species: "Groundhog",
location: "Woodlands"
})
{
  _id: ObjectId('65b6a9c28326115301a62a58'),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  client: 'Songbird',
  reward: 50000,
  captured: false
}
db.bounties.updateOne(
  { name: "Polarwind"},
  { $set: { reward: 10000}}
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.bounties.deleteOne({ name: "Lokinkajou"})
{
  acknowledged: true,
  deletedCount: 1
}
db.bounties.deleteMany({ client: "Songbird"})
{
  acknowledged: true,
  deletedCount: 3
}
db.bounties.updateMany({captured: true})
MongoInvalidArgumentError: Update document requires atomic operators
db.bounties.updateMany(
  { captured: false},
  { $set: { captured: true}}
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
jaskis