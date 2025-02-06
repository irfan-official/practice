import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

const { user: userModel } = Prisma;

// // ..........................Create.................................

// // For create one user
// const main = async () => {
//   const user = await userModel.create({
//     data: {
//       name: "monster",
//       email: "support.monster@irfans.dev",
//     },
//   });
//   console.log(user);
// };

// // For Create many users
// const main = async () => {
//   const user = await userModel.createMany({
//     data: [
//       { name: "Alice", email: "alice@gmailcom" },
//       { name: "Bob", email: "bob@example.com" },
//       { name: "Aob", email: "aob@example.com" },
//       { name: "Cob", email: "cob@example.com" },
//       { name: "Dob", email: "dob@example.com" },
//       { name: "Fob", email: "fob@example.com" },
//     ],
//   });
//   console.log(user);
// };

// // ..........................Read.................................

// // For fetch all user
// const main = async () => {
//   const user = await userModel.findMany();
//   console.log(user);
// };

// // For feth a user with unique value
// const main = async () => {
//   const user = await userModel.findUnique({
//     where: { id: 1 },
//   });
//   console.log(user);
// };

// // For find a user with any value
// const main = async () => {
//   const user = await userModel.findMany({
//     //where: { name: "Irfan" },
//     where: { id: 5 },
//   });
//   console.log(user);
// };

// // ..........................Update.................................

// // For update a unique user with new value
// const main = async () => {
//   const user = await userModel.update({
//     where: { id: 3 },
//     data: { name: "BobTheBuilder" },
//   });
//   console.log(user);
// };

// // For update all user found with conditions with new value
// const main = async () => {
//   const user = await userModel.updateMany({
//     where: { name: "Irfan" },
//     data: { name: "BobTheBuilder" },
//   });
//   console.log(user);
// };

// // ..........................Delete.................................

// // For Delete a unique rows in userModel found with conditions
// const main = async () => {
//   const user = await userModel.delete({
//     where: { id: 3 },
//   });
//   console.log(user);
// };

// // For Delete all the rows in userModel found with conditions
// const main = async () => {
//   const user = await userModel.deleteMany({
//     where: { name: "Cob" },
//   });
//   console.log(user);
// };


// // ..........................Recap.................................


// userModel.create()
// userModel.createMany()
// userModel.findUnique()
// userModel.findMany()
// userModel.update()
// userModel.updateMany()
// userModel.delete()
// userModel.deleteMany()


main()
  .catch((err) => console.log(err))
  .finally(async () => await Prisma.$disconnect);
