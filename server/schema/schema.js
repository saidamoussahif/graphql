// const Project = require('../models/Project');
const Item = require("../models/Item");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  //   GraphQLNonNull
} = require("graphql");

// Item type
const ItemType = new GraphQLObjectType({
  name: "Item",
  fields: () => ({
    id: { type: GraphQLID },
    Brand_name: { type: GraphQLString },
    IPR: { type: GraphQLString },
    Designation: { type: GraphQLString },
    Status: { type: GraphQLString },
    Number: { type: GraphQLString },
    Office: { type: GraphQLString },
    Nice: { type: GraphQLString },
    Nice_classification: { type: GraphQLString },
    Owner: { type: GraphQLString },
  }),
});

const RoutQuery = new GraphQLObjectType({
  name: "RoutQueryType",
  fields: {
    items: {
      type: new GraphQLList(ItemType),
      resolve(parent, args) {
        return Item.find();
      },
    },
    item: {
      type: ItemType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Item.findById(args.id);
      },
    },
  },
});

// mutation
const mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    addItem: {
      type: ItemType,
      args: {
        Brand_name: { type: GraphQLString },
        IPR: { type: GraphQLString },
        Designation: { type: GraphQLString },
        Status: { type: GraphQLString },
        Number: { type: GraphQLString },
        Office: { type: GraphQLString },
        Nice: { type: GraphQLString },
        Nice_classification: { type: GraphQLString },
        Owner: { type: GraphQLString },
      },
      resolve(parent, args) {
        const item = new Item({
          Brand_name: args.Brand_name,
          IPR: args.IPR,
          Designation: args.Designation,
          Status: args.Status,
          Number: args.Number,
          Office: args.Office,
          Nice: args.Nice,
          Nice_classification: args.Nice_classification,
          Owner: args.Owner,
        });
        return item.save();
      },
    },

    // Delete client
    deleteItem: {
      type: ItemType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Item.findByIdAndRemove(args.id);
      },
    },

    // update item
    UpdateItem: {
      type: ItemType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        Brand_name: { type: GraphQLString },
        IPR: { type: GraphQLString },
        Designation: { type: GraphQLString },
        Status: { type: GraphQLString },
        Number: { type: GraphQLString },
        Office: { type: GraphQLString },
        Nice: { type: GraphQLString },
        Nice_classification: { type: GraphQLString },
        Owner: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Item.findByIdAndUpdate(
          args.id,
          {
            $set:{
              Brand_name: args.Brand_name,
              IPR: args.IPR,
              Designation: args.Designation,
              Status: args.Status,
              Number: args.Number,
              Office: args.Office,
              Nice: args.Nice,
              Nice_classification: args.Nice_classification,
              Owner: args.Owner
            }
          }
          );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RoutQuery,
  mutation,
});
