export const typeDefs = `
input userInput {
  name:String
  age: Int
}
type user {
  name: String
  _id: String
  age: Int
}
type Query {
  user(name: String): [user]
}
type Mutation {
  createUser(input: userInput): user
  updateUser(_id: String, age: Int): user
}
`