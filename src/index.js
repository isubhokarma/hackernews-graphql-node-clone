const { GraphQLServer } = require("graphql-yoga");

let links = [
	{
		id: "link-0",
		url: "www.howtographql.com",
		description: "Fullstack tuts for GraphQL"
	}
];

let idCount = links.length;

const resolvers = {
	Query: {
		info: () => `This is a an API of a HAckerNews Clone`,
		feed: () => links
	},

	Mutation: {
		post: (parent, args) => {
			const link = {
				id: `link-${idCount++}`,
				description: args.description,
				url: args.url
			};

			links.push(link);
			return link;
		}
	}
};

const server = new GraphQLServer({
	typeDefs: "./src/schema.graphql",
	resolvers
});

server.start(() => console.log(`Server is running on localhost:4000`));
