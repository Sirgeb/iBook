const mongoose = require('mongoose');
const { Types: { ObjectId } } = mongoose;

const listings = [
  {
    _id: ObjectId(),
    title: "fully furnished Self Contained",
    image:"https://res.cloudinary.com/chybesta123/image/upload/v1615597210/samples/appartments/self-contained.jpg",
    host: ObjectId("604d15b07cea912dcc68117d"),
    address: "18 Bridge Street, Downtown Brooklyn, United States",
    geometry: {
      lat: 40.70432651355688, 
      lng: -73.98491723161676 
    },
    price: 1000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 5
  },
  {
    _id: ObjectId(),
    title: "1 Bedroom Flat",
    image:"https://res.cloudinary.com/chybesta123/image/upload/v1615597356/samples/appartments/1-bedroom-flat.jpg",
    host: ObjectId("604d15b07cea912dcc68117d"),
    address: "126 SW Halsey St, Troutdale, OR 97060, United States",
    geometry: {
      lat: 45.539133532484975, 
      lng: -122.40105537376596 
    },
    price: 2000,
    numOfGuests: 1,
    numOfBeds: 2,
    numOfBaths: 1,
    rating: 3
  },
  {
    _id: ObjectId(),
    title: "Spacious 2 story house with extended balcony",
    image:"https://res.cloudinary.com/chybesta123/image/upload/v1615597467/samples/appartments/Spacious_2_story_house_with_extended_balcony.jpg",
    host: ObjectId("604d15b07cea912dcc68117d"),
    address: "10 S Iowa Avenue, Atlantic City, NJ, United States",
    geometry: {
      lat: 39.35487807711776, 
      lng: -74.44547913166365
    },
    price: 10000,
    numOfGuests: 4,
    numOfBeds: 4,
    numOfBaths: 2,
    rating: 4
  },
  {
    _id: ObjectId(),
    title: "Beautiful modern apartment",
    image:"https://res.cloudinary.com/chybesta123/image/upload/v1615597600/samples/appartments/Beautiful_modern_apartment.jpg",
    host: ObjectId("604d15b07cea912dcc68117d"),
    address: "13 Queensborough Terrace, Bayswater, London W2 3SU, United Kingdom",
    geometry: {
      lat: 39.35488637300935, 
      lng: -74.44547913166365 
    },
    price: 4000,
    numOfGuests: 1,
    numOfBeds: 1,
    numOfBaths: 1,
    rating: 3.5
  },
  {
    _id: ObjectId(),
    title: "Beachfront Suite",
    image:"https://res.cloudinary.com/chybesta123/image/upload/v1615597708/samples/appartments/Beachfront_suite.jpg",
    host: ObjectId("604d15b07cea912dcc68117d"),
    address: "16 Peter St, Manchester, M60 2DS, United Kingdom",
    geometry: {
      lat: 53.47725393938978, 
      lng: -2.245325102268374 
    },
    price: 9000,
    numOfGuests: 3,
    numOfBeds: 3,
    numOfBaths: 2,
    rating: 2.5
  },
  {
    _id: ObjectId(),
    title: "Two Bedroom flat",
    image:"https://res.cloudinary.com/chybesta123/image/upload/v1615597884/samples/appartments/Two_Bedroom_flat.jpg",
    host: ObjectId("604d15b07cea912dcc68117d"),
    address: "5 Drum Street, London, United Kingdom",
    geometry: {
      lat: 51.515186142426465, 
      lng: -0.07137513119025944
    },
    price: 1100,
    numOfGuests: 4,
    numOfBeds: 4,
    numOfBaths: 4,
    rating: 5
  },
  {
    _id: ObjectId(),
    title: "Magnificent Suburban House",
    image:"https://res.cloudinary.com/chybesta123/image/upload/v1615597966/samples/appartments/Magnificent_suburban_house.jpg",
    host: ObjectId("604d15b07cea912dcc68117d"),
    address: "4 Marsh Wall, Tower Hamlets, London, E14 9TP, United Kingdom",
    geometry: {
      lat: 51.50347882515175, 
      lng: -0.025175415848844907 
    },
    price: 7000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 5
  },
  {
    _id: ObjectId(),
    title: "Well furnished apartment.",
    image:"https://res.cloudinary.com/chybesta123/image/upload/v1615598087/samples/appartments/Well_Furnished_Single_Bedroom.jpg",
    host: ObjectId("604d15b07cea912dcc68117d"),
    address: "20 Waterview Drive, Greenwich, London, SE10 0TW, United Kingdom",
    geometry: {
      lat: 51.50169258791039, 
      lng: 0.0010154111382136668 
    },
    price: 12000,
    numOfGuests: 4,
    numOfBeds: 2,
    numOfBaths: 2,
    rating: 4
  },
  {
    _id: ObjectId(),
    title: "Beautiful 2 bedroom house",
    image:"https://res.cloudinary.com/chybesta123/image/upload/v1615598192/samples/appartments/Beautiful_2_bedroom.jpg",
    host: ObjectId("604d15b07cea912dcc68117d"),
    address: "Alexanderplatz 7, Mitte, 10178 Berlin, Germany",
    geometry: {
      lat: 52.52298646563963,  
      lng: 13.41296371303119
    },
    price: 1500,
    numOfGuests: 1,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 5
  },
  {
    _id: ObjectId(),
    title: "Luxurious mansion",
    image:"https://res.cloudinary.com/chybesta123/image/upload/v1615598501/samples/appartments/Luxurious_mansion.jpg",
    host: ObjectId("604d15b07cea912dcc68117d"),
    address: "Bertolt Brecht Platz 4, Mitte, 10117 Berlin, Germany",
    geometry: {
      lat: 52.52297173315508, 
      lng: 13.386091755360246 
    },
    price: 26000,
    numOfGuests: 5,
    numOfBeds: 5,
    numOfBaths: 2,
    rating: 5
  },
  {
    _id: ObjectId(),
    title: "1 Bedroom Flat Self Contained",
    image:"https://res.cloudinary.com/chybesta123/image/upload/v1615599898/samples/appartments/1_bedroom_flat_self_contained.jpg",
    host: ObjectId("604d15b07cea912dcc68117d"),
    address: "Nuernberger Strasse 65, 10787 Berlin, Germany",        
    geometry: {
      lat: 52.50423875391905, 
      lng: 13.340779468852944 
    },
    price: 5000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 5
  },
  {
    _id: ObjectId(),
    title: "Stunning luxury home",
    image:"https://res.cloudinary.com/chybesta123/image/upload/v1615600087/samples/appartments/Stunning_luxury_home.jpg",
    host: ObjectId("604d15b07cea912dcc68117d"),
    address: "Rudower Straße 80-82, Neukölln, 12351 Berlin, Germany",        
    geometry: {
      lat: 52.43741629497692, 
      lng: 13.463033326521005 
    },
    price: 8000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 5
  },
  {
    _id: ObjectId(),
    title: "Spacious Home",
    image:"https://res.cloudinary.com/chybesta123/image/upload/v1615600184/samples/appartments/Spacious_home.jpg",
    host: ObjectId("604d15b07cea912dcc68117d"),
    address: "Damrak 1 - 5, Amsterdam City Centre, 1012 LG Amsterdam, Netherlands",        
    geometry: {
      lat: 52.37720787145567, 
      lng: 4.897979897682856 
    },
    price: 7500,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 5
  },
  {
    _id: ObjectId(),
    title: "Stylish and modern self contained",
    image:"https://res.cloudinary.com/chybesta123/image/upload/v1615600307/samples/appartments/Stylish_and_modern_self_contained.jpg",
    host: ObjectId("604d15b07cea912dcc68117d"),
    address: "12 IJsbaanpad, Oud Zuid, 1076 CV Amsterdam, Netherlands",        
    geometry: {
      lat: 52.34162253089768,  
      lng: 4.853065968845823
    },
    price: 22050,
    numOfGuests: 4,
    numOfBeds: 2,
    numOfBaths: 2,
    rating: 3
  },
  {
    _id: ObjectId(),
    title: "Luxury en suite",
    image:"https://res.cloudinary.com/chybesta123/image/upload/v1615600400/samples/appartments/Luxury_en_suite.jpg",
    host: ObjectId("604d15b07cea912dcc68117d"),
    address: "La Guardiaweg 59, Westpoort, 1043 DE Amsterdam, Netherlands",        
    geometry: {
      lat: 52.390245593817774,  
      lng: 4.8424898400124965 
    },
    price: 10000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 4
  },
  {
    _id: ObjectId(),
    title: "Cosy and fully furnished Appartment",
    image:"https://res.cloudinary.com/chybesta123/image/upload/v1615600504/samples/appartments/Cosy_and_fully_furnished.jpg",
    host: ObjectId("604d15b07cea912dcc68117d"),
    address: "Leuvehaven 77, Centrum, 3011 EA Rotterdam, Netherlands",       
    geometry: {
      lat: 51.91344559615346, 
      lng: 4.4825670841689815
    },
    price: 22000,
    numOfGuests: 5,
    numOfBeds: 2,
    numOfBaths: 2,
    rating: 3.5
  },
];

module.exports = listings;