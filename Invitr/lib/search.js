const Users = new Mongo.Collection('users')
const UsersIndex = new Index({
   collection: Users,
   fields: ['name'],
   engine: new MinimongoEngine(),
})