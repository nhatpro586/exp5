import {userModel} from '../mongo-config/initSchema.js'

export const resolvers = {
  user:(parent, param, context) => {
    console.log(JSON.stringify(parent))
    return null
  },

  Query: {
    user:async(parent,param,context) => {
      const getUsers = await userModel.find({name: param.name})
      return getUsers
    }
  },

  Mutation: {
    createUser:async (parent, param, context) => {
      const model = await userModel.create(param.input)
      return model
    },
    updateUser:async(parent, param, context) => {
      console.log(param)
      const updateUser = await userModel.findByIdAndUpdate(param._id, {age: param.age})
      return updateUser
    }
  }
}