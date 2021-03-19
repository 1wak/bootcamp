const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Kate {
    uuid: String
    name: String
    addresss: String
    phoneNumber: String
    hobbies: String
    occupation: String
  }
  type Query {
    katepe: [Kate]
  }
`;

const katepe = [
  {
    uuid: "eee3e3ea-7578-3013-bf52-99a9025ee6c3",
    name: "Chelsie Conroy",
    addresss: "2122 Maggio Pine",
    phoneNumber: "+8484786389240",
    hobbies: "Eevee",
    occupation: "odit",
  },
  {
    uuid: "5115738a-92f2-3e4b-89cf-5c8529435022",
    name: "Flavio Stracke",
    addresss: "713 Deckow Key Apt. 854",
    phoneNumber: "+8894518971056",
    hobbies: "Ho-oh",
    occupation: "consequatur",
  },
  {
    uuid: "b6d16002-afba-3698-9d86-38f118b577cf",
    name: "Zena Wintheiser",
    addresss: "3301 Klein Lodge Suite 479",
    phoneNumber: "+2083965119707",
    hobbies: "Servine",
    occupation: "soluta",
  },
  {
    uuid: "85107dc3-14ed-3abf-ac27-f0a1f99a80a9",
    name: "Joel Runolfsson",
    addresss: "52950 Runolfsson Run Apt. 784",
    phoneNumber: "+1735621329988",
    hobbies: "Goldeen",
    occupation: "alias",
  },
  {
    uuid: "bbd04033-e71f-31f1-9b81-7e7f6735d1af",
    name: "Rae Trantow",
    addresss: "622 Parker Well",
    phoneNumber: "+9596500637011",
    hobbies: "Seismitoad",
    occupation: "placeat",
  },
  {
    uuid: "33550c50-9376-34a5-8bae-a14976d6ff88",
    name: "Clementina Emmerich",
    addresss: "22585 Lockman Loop Suite 159",
    phoneNumber: "+2973390739521",
    hobbies: "Minior",
    occupation: "vitae",
  },
  {
    uuid: "93feae18-f0e7-367a-9d91-fd25558bcec7",
    name: "Cheyanne Rice",
    addresss: "95642 Bruce Islands Apt. 094",
    phoneNumber: "+4780430236650",
    hobbies: "Mawile",
    occupation: "voluptas",
  },
  {
    uuid: "69dc73e8-e245-33ff-9b46-0e3367197864",
    name: "Karen Smitham",
    addresss: "4569 Rolfson Crossing",
    phoneNumber: "+9933836637548",
    hobbies: "Nidorino",
    occupation: "et",
  },
  {
    uuid: "f4aaf82a-3479-3832-89a6-22d42eb0f2ff",
    name: "Guido Hamill",
    addresss: "957 Kohler Station",
    phoneNumber: "+9697657280917",
    hobbies: "Absol",
    occupation: "ratione",
  },
  {
    uuid: "35b62ebc-755f-3bb4-a300-527a3e7ba598",
    name: "Gavin Littel",
    addresss: "688 Bednar Keys Suite 891",
    phoneNumber: "+9806410928165",
    hobbies: "Archen",
    occupation: "ad",
  },
  {
    uuid: "efd9bd52-ee90-38e9-82ab-51da4f99ba6f",
    name: "King Gulgowski",
    addresss: "60999 Labadie Prairie",
    phoneNumber: "+8462967560248",
    hobbies: "Parasect",
    occupation: "enim",
  },
  {
    uuid: "ae7571a4-721d-36e5-b5d0-e8b584b36d5c",
    name: "Alvah Kub",
    addresss: "3559 Kertzmann Path",
    phoneNumber: "+2080940322312",
    hobbies: "Illumise",
    occupation: "ut",
  },
  {
    uuid: "a930942b-9b0a-3eae-b921-f02e65c55eaa",
    name: "Kyle Kreiger",
    addresss: "7347 Bernhard Roads Apt. 186",
    phoneNumber: "+1308150999946",
    hobbies: "Zekrom",
    occupation: "illum",
  },
  {
    uuid: "63a5caa2-e98f-317b-9021-9aafbb6c566a",
    name: "Afton Raynor",
    addresss: "8337 Larue Stravenue Suite 413",
    phoneNumber: "+9665622069576",
    hobbies: "Exeggutor",
    occupation: "molestias",
  },
  {
    uuid: "7f1962b1-486f-3b45-98fb-4c8810e5da9f",
    name: "Lenny Walker",
    addresss: "208 Reinhold Meadows",
    phoneNumber: "+2697079158929",
    hobbies: "Weavile",
    occupation: "dolorem",
  },
  {
    uuid: "0724411e-9e86-3dd7-8d7d-820b2f6449ab",
    name: "Gabe Sawayn",
    addresss: "9368 Buckridge Mission Apt. 313",
    phoneNumber: "+3738586045738",
    hobbies: "Ariados",
    occupation: "ut",
  },
  {
    uuid: "c0ed7722-c7bc-36ff-a9af-5a9a39abbcab",
    name: "Ayana Kulas",
    addresss: "719 Koss Highway Suite 489",
    phoneNumber: "+3160087341036",
    hobbies: "Fraxure",
    occupation: "ex",
  },
  {
    uuid: "ec70b14f-0e1e-3cf8-998b-02b8ed4498b0",
    name: "Edna Haag",
    addresss: "515 Felicity Square",
    phoneNumber: "+9167584213102",
    hobbies: "Golduck",
    occupation: "enim",
  },
  {
    uuid: "7409e296-34f8-333c-a1a1-961966f6ac47",
    name: "Jonathon Bradtke",
    addresss: "361 Trantow Court Suite 270",
    phoneNumber: "+8486288326787",
    hobbies: "Vibrava",
    occupation: "rerum",
  },
  {
    uuid: "3c103828-4fd1-3495-a65b-038332d46425",
    name: "Nova Windler",
    addresss: "31353 Jacobi Pines",
    phoneNumber: "+7964426033012",
    hobbies: "Krabby",
    occupation: "accusamus",
  },
  {
    uuid: "cc698da3-6069-3692-9277-92f24427c595",
    name: "Peter Dach",
    addresss: "7072 Maximillian Crest Suite 680",
    phoneNumber: "+9987980823253",
    hobbies: "Flareon",
    occupation: "voluptas",
  },
  {
    uuid: "b60fb41d-45f1-3864-a08a-c9b951d03fc7",
    name: "Vicenta Kerluke",
    addresss: "262 Leuschke Ridges Apt. 054",
    phoneNumber: "+9460843493854",
    hobbies: "Croconaw",
    occupation: "facere",
  },
  {
    uuid: "1905c5b3-b78d-386b-8ae8-96d1d12e739b",
    name: "Halle Swift",
    addresss: "536 Jane Pine",
    phoneNumber: "+5149266622405",
    hobbies: "Gumshoos",
    occupation: "placeat",
  },
  {
    uuid: "ea4c5fef-5130-3df0-b96c-6562ff42a7cc",
    name: "Garnet Hudson",
    addresss: "999 Willms Harbor",
    phoneNumber: "+4698152800239",
    hobbies: "Slugma",
    occupation: "exercitationem",
  },
  {
    uuid: "eb9d4cb8-1906-30d2-98af-f2bccd317c9a",
    name: "Kristy Beahan",
    addresss: "67593 Caitlyn Place",
    phoneNumber: "+5008616486378",
    hobbies: "Slowbro",
    occupation: "possimus",
  },
  {
    uuid: "da2b01ed-0d87-3876-adaa-807a14b41ead",
    name: "Allie Waelchi",
    addresss: "2227 Swift Divide Apt. 558",
    phoneNumber: "+7054570479392",
    hobbies: "Diancie",
    occupation: "nisi",
  },
  {
    uuid: "38da4adf-d49b-3ce6-81ca-6d5bedb2130a",
    name: "Adrian Cassin",
    addresss: "639 Krystal Walk",
    phoneNumber: "+9314004006980",
    hobbies: "Purugly",
    occupation: "sit",
  },
  {
    uuid: "fa6ca53f-a91a-35be-93da-66f4dd5f905f",
    name: "Doug Crooks",
    addresss: "81754 Ruecker Mountains Suite 694",
    phoneNumber: "+1156304789550",
    hobbies: "Doduo",
    occupation: "velit",
  },
  {
    uuid: "157162ad-162d-375e-a272-4da6aaa3242a",
    name: "Kaya Kautzer",
    addresss: "7099 Bennie Oval Apt. 948",
    phoneNumber: "+8158895908856",
    hobbies: "Piplup",
    occupation: "repellendus",
  },
  {
    uuid: "3dd2c448-76f4-3acf-90a1-8c93f748c5a3",
    name: "Meaghan Kovacek",
    addresss: "8395 Mraz Spring Suite 882",
    phoneNumber: "+2650381210293",
    hobbies: "Purugly",
    occupation: "veritatis",
  },
  {
    uuid: "4a1a4fc8-e9c1-3123-96be-617c21585f58",
    name: "Enrico Reinger",
    addresss: "37950 Blanca Plains Apt. 689",
    phoneNumber: "+9463145355270",
    hobbies: "Seismitoad",
    occupation: "qui",
  },
  {
    uuid: "c86b5dfd-dc54-3c5e-a18c-335ed7840d18",
    name: "Elisa Crona",
    addresss: "86731 Name Summit Apt. 124",
    phoneNumber: "+9483286951166",
    hobbies: "Diancie",
    occupation: "quam",
  },
  {
    uuid: "09c4f5e7-2124-31fb-82ec-a723c0edbcc4",
    name: "Zula Schimmel",
    addresss: "534 Selena Route",
    phoneNumber: "+9694542691376",
    hobbies: "Wynaut",
    occupation: "dolore",
  },
  {
    uuid: "622c85ed-0d4e-3e1f-b46b-5c65964f7f31",
    name: "Annabel Block",
    addresss: "719 Elaina Springs",
    phoneNumber: "+5170523554225",
    hobbies: "Sableye",
    occupation: "beatae",
  },
  {
    uuid: "f3f7c8ad-1edc-385b-bd95-69324b9569b8",
    name: "Alek Schmeler",
    addresss: "55714 Sister Fall",
    phoneNumber: "+5539734937778",
    hobbies: "Golem",
    occupation: "sint",
  },
  {
    uuid: "0b2ff0f7-82ce-37ae-b268-ee62af501cdf",
    name: "Bailey Gleason",
    addresss: "867 Hammes Alley",
    phoneNumber: "+2399118591144",
    hobbies: "Cubchoo",
    occupation: "optio",
  },
  {
    uuid: "710afbbf-9c21-3152-a45a-69563d24378c",
    name: "Beverly Grant",
    addresss: "20410 Collins Rest",
    phoneNumber: "+2498432315231",
    hobbies: "Hariyama",
    occupation: "autem",
  },
  {
    uuid: "9ab52ec7-4765-3060-beac-71e5145e553c",
    name: "Osvaldo Labadie",
    addresss: "1395 Reinger Mount",
    phoneNumber: "+8103122600440",
    hobbies: "Drapion",
    occupation: "minus",
  },
  {
    uuid: "689af294-10a9-3920-a0cd-8dd7169364fa",
    name: "Brook Kuhn",
    addresss: "439 Bartell Fork",
    phoneNumber: "+1173640767452",
    hobbies: "Ponyta",
    occupation: "totam",
  },
  {
    uuid: "69022fef-1d4f-3162-b03e-8767aebcb0d3",
    name: "Lupe Beahan",
    addresss: "78715 Kirlin Port Suite 399",
    phoneNumber: "+7067973318785",
    hobbies: "Beldum",
    occupation: "recusandae",
  },
  {
    uuid: "c1ed5353-ead5-36e8-83f4-93f933886078",
    name: "Kamille Parisian",
    addresss: "893 McKenzie Expressway Apt. 263",
    phoneNumber: "+9027644989371",
    hobbies: "Araquanid",
    occupation: "ipsum",
  },
  {
    uuid: "1ce75fd0-0e1d-3a72-aa4c-1e112290b569",
    name: "Katrine Becker",
    addresss: "86124 Schultz Rest",
    phoneNumber: "+5196513834081",
    hobbies: "Quilava",
    occupation: "perferendis",
  },
  {
    uuid: "7f829390-f31c-37c2-b1a4-cea98650fc1f",
    name: "Robin Haag",
    addresss: "4362 Lauren Fields",
    phoneNumber: "+3574872614881",
    hobbies: "Hoopa",
    occupation: "impedit",
  },
  {
    uuid: "14e64d6b-b383-3b9b-81a0-2faf6f5342e9",
    name: "Karina Wiegand",
    addresss: "59052 Lebsack View Suite 150",
    phoneNumber: "+7772056512953",
    hobbies: "Swirlix",
    occupation: "ducimus",
  },
  {
    uuid: "a629959b-a3d2-3e3c-b019-9b66c7f653be",
    name: "Kane Oberbrunner",
    addresss: "220 Deborah Vista Apt. 767",
    phoneNumber: "+4619346387746",
    hobbies: "Foongus",
    occupation: "beatae",
  },
  {
    uuid: "c0fbfca5-d151-332d-8b6a-2bfcb889f2da",
    name: "Reva Wilderman",
    addresss: "790 Wuckert Village Apt. 566",
    phoneNumber: "+4415234504679",
    hobbies: "Camerupt",
    occupation: "dicta",
  },
  {
    uuid: "24843df7-c066-332c-9734-cef70e64c5a4",
    name: "Alexie Hintz",
    addresss: "60638 Dusty Ville Apt. 894",
    phoneNumber: "+8608870709754",
    hobbies: "Magearna",
    occupation: "sint",
  },
  {
    uuid: "e8562857-df3e-3000-90b0-86afe5450d6c",
    name: "Hulda Little",
    addresss: "9223 Gibson Place Suite 795",
    phoneNumber: "+2310705841610",
    hobbies: "Smeargle",
    occupation: "eveniet",
  },
  {
    uuid: "89f1d873-0853-35ce-8685-23f38a6128bb",
    name: "Frederique Toy",
    addresss: "4190 Donato Groves Suite 668",
    phoneNumber: "+4395879268418",
    hobbies: "Mandibuzz",
    occupation: "voluptas",
  },
  {
    uuid: "b684b335-def3-30a0-8fea-2976d4472b83",
    name: "Micheal Feeney",
    addresss: "1987 McLaughlin Valleys Apt. 237",
    phoneNumber: "+1811233759311",
    hobbies: "Ferroseed",
    occupation: "sit",
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    katepe: () => katepe,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
