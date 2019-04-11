exports.typeDefs = `

type Recipe{
    _id: ID
    name: String!
    category: String!
    description: String!
    instructions: String!
    createDate: String
    likes: Int
    username: String
}

type User{
    _id: ID
    username: String! @unique
    password: String!
    email: String!
    joinedDate: String
    favorites: [Recipe]

}

type Query{
getAllRecipes: [Recipe]

}
`;

// ! = required
