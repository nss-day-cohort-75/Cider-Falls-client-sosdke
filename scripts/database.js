const database = {
  Attractions: [
    { id: 501, name: "Chamfort River", servicesID: [1, 2, 3] },
    { id: 502, name: "Lost Wolf Hiking Trail", servicesID: [4, 5, 6] },
    { id: 503, name: "Lodge", servicesID: [5, 7, 8, 9] },
    { id: 504, name: "Hotel", servicesID: 7 },
    { id: 505, name: "Restaurant", servicesID: 5 },
    { id: 506, name: "Gander River (Natural Preserve)", servicesID: [3, 4] },
    { id: 507, name: "Campgrounds", servicesID: [7, 8, 9] },
    { id: 508, name: "Office Park", servicesID: 8 },
    { id: 509, name: "Children Play Areas", servicesID: 8 },
    {
      id: 510,
      name: "Pine Bluffs Trails (Non Beginner)",
      servicesID: [4, 5, 10],
    },
    {
      id: 511,
      name: "Pine Bluffs Trails (Beginner)",
      servicesID: [4, 5, 10, 11],
    },
  ],

  Services: [
    { id: 1, name: "Rafting" },
    { id: 2, name: "Canoeing" },
    { id: 3, name: "Fishing" },
    { id: 4, name: "Hiking" },
    { id: 5, name: "Picknicking" },
    { id: 6, name: "Rock Climbing" },
    { id: 7, name: "Lodging" },
    { id: 8, name: "Parking" },
    { id: 9, name: "Information" },
    { id: 10, name: "Zip Lines" },
    { id: 11, name: "Food Vendors" },
  ],
  Guests: [
    {
      id: 1,
      firstname: "Mike",
      lastname: "Brown",
      attractionID: 509,
      servicesID: 8,
    },
    {
      id: 2,
      firstname: "Alice",
      lastname: "Taylor",
      attractionID: 507,
      servicesID: 7,
    },
    {
      id: 3,
      firstname: "Rachel",
      lastname: "White",
      attractionID: 503,
      servicesID: 5,
    },
    {
      id: 4,
      firstname: "John",
      lastname: "Davis",
      attractionID: 511,
      servicesID: 10,
    },
    {
      id: 5,
      firstname: "Laura",
      lastname: "Martinez",
      attractionID: 501,
      servicesID: 1,
    },
    {
      id: 6,
      firstname: "Nancy",
      lastname: "Lopez",
      attractionID: 510,
      servicesID: 5,
    },
    {
      id: 7,
      firstname: "Oliver",
      lastname: "Rodriguez",
      attractionID: 506,
      servicesID: 3,
    },
    {
      id: 8,
      firstname: "Frank",
      lastname: "Anderson",
      attractionID: 502,
      servicesID: 6,
    },
    {
      id: 9,
      firstname: "Isaac",
      lastname: "Hernandez",
      attractionID: 504,
      servicesID: 7,
    },
    {
      id: 10,
      firstname: "Karen",
      lastname: "Smith",
      attractionID: 505,
      servicesID: 5,
    },
    {
      id: 11,
      firstname: "Charlie",
      lastname: "Moore",
      attractionID: 503,
      servicesID: 7,
    },
    {
      id: 12,
      firstname: "Eve",
      lastname: "Garcia",
      attractionID: 502,
      servicesID: 4,
    },
    {
      id: 13,
      firstname: "Paul",
      lastname: "Brown",
      attractionID: 506,
      servicesID: 4,
    },
    {
      id: 14,
      firstname: "Diana",
      lastname: "Miller",
      attractionID: 508,
      servicesID: 8,
    },
    {
      id: 15,
      firstname: "Quincy",
      lastname: "Taylor",
      attractionID: 507,
      servicesID: 9,
    },
    {
      id: 16,
      firstname: "Bob",
      lastname: "Davis",
      attractionID: 510,
      servicesID: 10,
    },
    {
      id: 17,
      firstname: "Rachel",
      lastname: "Jones",
      attractionID: 505,
      servicesID: 5,
    },
    {
      id: 18,
      firstname: "John",
      lastname: "Rodriguez",
      attractionID: 511,
      servicesID: 4,
    },
    {
      id: 19,
      firstname: "Nancy",
      lastname: "Johnson",
      attractionID: 501,
      servicesID: 2,
    },
    {
      id: 20,
      firstname: "Mike",
      lastname: "Anderson",
      attractionID: 509,
      servicesID: 8,
    },
    {
      id: 21,
      firstname: "Jack",
      lastname: "Lopez",
      attractionID: 503,
      servicesID: 8,
    },
    {
      id: 22,
      firstname: "Alice",
      lastname: "Martinez",
      attractionID: 507,
      servicesID: 7,
    },
    {
      id: 23,
      firstname: "Henry",
      lastname: "White",
      attractionID: 502,
      servicesID: 5,
    },
    {
      id: 24,
      firstname: "Isaac",
      lastname: "Hernandez",
      attractionID: 506,
      servicesID: 3,
    },
    {
      id: 25,
      firstname: "Oliver",
      lastname: "Garcia",
      attractionID: 510,
      servicesID: 4,
    },
    {
      id: 26,
      firstname: "Karen",
      lastname: "Thompson",
      attractionID: 504,
      servicesID: 7,
    },
    {
      id: 27,
      firstname: "Grace",
      lastname: "Taylor",
      attractionID: 505,
      servicesID: 5,
    },
    {
      id: 28,
      firstname: "Diana",
      lastname: "Williams",
      attractionID: 508,
      servicesID: 8,
    },
    {
      id: 29,
      firstname: "Paul",
      lastname: "Brown",
      attractionID: 501,
      servicesID: 3,
    },
    {
      id: 30,
      firstname: "Laura",
      lastname: "Smith",
      attractionID: 511,
      servicesID: 11,
    },
    {
      id: 31,
      firstname: "Eve",
      lastname: "Johnson",
      attractionID: 509,
      servicesID: 8,
    },
    {
      id: 32,
      firstname: "Bob",
      lastname: "Lopez",
      attractionID: 506,
      servicesID: 4,
    },
    {
      id: 33,
      firstname: "Quincy",
      lastname: "Martinez",
      attractionID: 502,
      servicesID: 6,
    },
    {
      id: 34,
      firstname: "Jack",
      lastname: "Davis",
      attractionID: 503,
      servicesID: 9,
    },
    {
      id: 35,
      firstname: "Charlie",
      lastname: "Thompson",
      attractionID: 507,
      servicesID: 8,
    },
    {
      id: 36,
      firstname: "Rachel",
      lastname: "Rodriguez",
      attractionID: 510,
      servicesID: 5,
    },
    {
      id: 37,
      firstname: "Mike",
      lastname: "Taylor",
      attractionID: 501,
      servicesID: 1,
    },
    {
      id: 38,
      firstname: "Nancy",
      lastname: "Garcia",
      attractionID: 504,
      servicesID: 7,
    },
    {
      id: 39,
      firstname: "John",
      lastname: "Anderson",
      attractionID: 505,
      servicesID: 5,
    },
    {
      id: 40,
      firstname: "Alice",
      lastname: "Brown",
      attractionID: 508,
      servicesID: 8,
    },
  ],
  Northeast: [
    {
      id: 1,
      attractionID: 501,
      attractionName: "Chamfort River",
      servicesID: 1,
      servicesName: "Rafting",
    },
  ],

  North: [
    {
      id: 1,
      attractionID: 502,
      attractionName: "Lost Wolf Hiking Trail",
      servicesID: 4,
      servicesName: "Hiking",
    },
  ],

  Northwest: [
    {
      id: 1,
      attractionID: 503,
      attractionName: "Lodge",
      servicesID: 5,
      servicesName: "Picknicking",
    },

    {
      id: 2,
      attractionID: 504,
      attractionName: "Hotel",
      servicesID: 7,
      servicesName: "Lodging",
    },
    {
      id: 3,
      attractionID: 505,
      attractionName: "Restaurant",
      servicesID: 5,
      servicesName: "Picknicking",
    },
  ],

  Southwest: [
    {
      id: 1,
      attractionID: 506,
      attractionName: "Gander River (Natural Preserve)",
      servicesID: 3,
      servicesName: "Fishing",
    },
  ],

  South: [
    {
      id: 1,
      attractionID: 507,
      attractionName: "Campgrounds",
      servicesID: 7,
      servicesName: "Lodging",
    },

    {
      id: 2,
      attractionID: 508,
      attractionName: "Office Park",
      servicesID: 8,
      servicesName: "Parking",
    },
    {
      id: 3,
      attractionID: 509,
      attractionName: "Children Play Areas",
      servicesID: 8,
      servicesName: "Parking",
    },
  ],

  Southeast: [
    {
      id: 1,
      attractionID: 510,
      attractionName: "Pine Bluffs Trails (Non Beginner)",
      servicesID: 4,
      servicesName: "Hiking",
    },

    {
      id: 2,
      attractionID: 511,
      attractionName: "Pine Bluffs Trails (Beginner)",
      servicesID: 4,
      servicesName: "Hiking",
    },
  ],
};

export const getAttractions = () => {
  return structuredClone(database.Attractions);
};

export const getServices = () => {
  return structuredClone(database.Services);
};

export const getGuests = () => {
  return structuredClone(database.Guests);
};

export const getNortheast = () => {
  return structuredClone(database.Northeast);
};

export const getNorth = () => {
  return structuredClone(database.North);
};

export const getNorthwest = () => {
  return structuredClone(database.Northwest);
};

export const getSoutheast = () => {
  return structuredClone(database.Southeast);
};

export const getSouth = () => {
  return structuredClone(database.South);
};

export const getSouthwest = () => {
  return structuredClone(database.Southwest);
};
