exports.resolvers = {
    Query: {
        getAllRecipes: async (root, args, {Recipe}) => {
            const allRecipes = await Recipe.find();
            return allRecipes;
        }
    }
};