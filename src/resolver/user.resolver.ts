import { PubSub } from "graphql-subscriptions";
import { AppUsers } from "../../models/appUser";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

interface UserInput {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

const pubSub = new PubSub();
const USER_CREATED = "USER_CREATED";

export const userResolvers = {
  Query: {
    users: async () => {
      return await AppUsers.query();
    },
  },
  Mutation: {
    createUser: async (_: any, { name, email, password, role }: UserInput) => {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const user = await AppUsers.query().insert({
        name,
        email,
        password: hashedPassword,
        role,
      });
      await pubSub.publish(USER_CREATED, { userCreated: user });
      return user;
    },
    updateUser: async (_: any, { id, name, email }: UserInput) => {
      return await AppUsers.query().patchAndFetchById(id, { name, email });
    },
    deleteUser: async (_: any, { id }: UserInput) => {
      await AppUsers.query().deleteById(id);
      return { id };
    },
    signIn: async (_: any, { email, password }: UserInput, context: any) => {
      const user = await AppUsers.query().findOne({ email });
      if (!user) {
        throw new Error("No such user found");
      }
      const valid = await bcrypt.compare(password, user.password);
      console.log(user);
      if (!valid) {
        throw new Error("Invalid password");
      }
      const token = jwt.sign({ user: user }, process.env.JWT_SECRET_KEY!, {
        expiresIn: "7d",
      });
      return {
        token,
        user,
      };
    },
  },
  Subscription: {
    userCreated: {
      subscribe: () => pubSub.asyncIterator(USER_CREATED),
    },
  },
};

export default userResolvers;
