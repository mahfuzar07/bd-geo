'use strict';

var react = require('react');

// src/hooks/index.ts

// src/data/bd-data.json
var bd_data_default = {
  divisions: [
    {
      id: 1,
      name: "Dhaka",
      bn_name: "\u09A2\u09BE\u0995\u09BE"
    },
    {
      id: 2,
      name: "Chittagong",
      bn_name: "\u099A\u099F\u09CD\u099F\u0997\u09CD\u09B0\u09BE\u09AE"
    },
    {
      id: 3,
      name: "Rajshahi",
      bn_name: "\u09B0\u09BE\u099C\u09B6\u09BE\u09B9\u09C0"
    },
    {
      id: 4,
      name: "Khulna",
      bn_name: "\u0996\u09C1\u09B2\u09A8\u09BE"
    },
    {
      id: 5,
      name: "Barisal",
      bn_name: "\u09AC\u09B0\u09BF\u09B6\u09BE\u09B2"
    },
    {
      id: 6,
      name: "Sylhet",
      bn_name: "\u09B8\u09BF\u09B2\u09C7\u099F"
    },
    {
      id: 7,
      name: "Rangpur",
      bn_name: "\u09B0\u0982\u09AA\u09C1\u09B0"
    },
    {
      id: 8,
      name: "Mymensingh",
      bn_name: "\u09AE\u09AF\u09BC\u09AE\u09A8\u09B8\u09BF\u0982\u09B9"
    }
  ],
  districts: [
    {
      id: 1,
      division_id: 1,
      name: "Dhaka",
      bn_name: "\u09A2\u09BE\u0995\u09BE"
    },
    {
      id: 2,
      division_id: 1,
      name: "Faridpur",
      bn_name: "\u09AB\u09B0\u09BF\u09A6\u09AA\u09C1\u09B0"
    },
    {
      id: 3,
      division_id: 1,
      name: "Gazipur",
      bn_name: "\u0997\u09BE\u099C\u09C0\u09AA\u09C1\u09B0"
    },
    {
      id: 4,
      division_id: 1,
      name: "Gopalganj",
      bn_name: "\u0997\u09CB\u09AA\u09BE\u09B2\u0997\u099E\u09CD\u099C"
    },
    {
      id: 5,
      division_id: 1,
      name: "Kishoreganj",
      bn_name: "\u0995\u09BF\u09B6\u09CB\u09B0\u0997\u099E\u09CD\u099C"
    },
    {
      id: 6,
      division_id: 1,
      name: "Madaripur",
      bn_name: "\u09AE\u09BE\u09A6\u09BE\u09B0\u09C0\u09AA\u09C1\u09B0"
    },
    {
      id: 7,
      division_id: 1,
      name: "Manikganj",
      bn_name: "\u09AE\u09BE\u09A8\u09BF\u0995\u0997\u099E\u09CD\u099C"
    },
    {
      id: 8,
      division_id: 1,
      name: "Munshiganj",
      bn_name: "\u09AE\u09C1\u09A8\u09CD\u09B8\u09BF\u0997\u099E\u09CD\u099C"
    },
    {
      id: 9,
      division_id: 1,
      name: "Narayanganj",
      bn_name: "\u09A8\u09BE\u09B0\u09BE\u09AF\u09BC\u09A3\u0997\u099E\u09CD\u099C"
    },
    {
      id: 10,
      division_id: 1,
      name: "Narsingdi",
      bn_name: "\u09A8\u09B0\u09B8\u09BF\u0982\u09A6\u09C0"
    },
    {
      id: 11,
      division_id: 1,
      name: "Rajbari",
      bn_name: "\u09B0\u09BE\u099C\u09AC\u09BE\u09A1\u09BC\u09C0"
    },
    {
      id: 12,
      division_id: 1,
      name: "Shariatpur",
      bn_name: "\u09B6\u09B0\u09C0\u09AF\u09BC\u09A4\u09AA\u09C1\u09B0"
    },
    {
      id: 13,
      division_id: 1,
      name: "Tangail",
      bn_name: "\u099F\u09BE\u0999\u09CD\u0997\u09BE\u0987\u09B2"
    },
    {
      id: 14,
      division_id: 2,
      name: "Bandarban",
      bn_name: "\u09AC\u09BE\u09A8\u09CD\u09A6\u09B0\u09AC\u09BE\u09A8"
    },
    {
      id: 15,
      division_id: 2,
      name: "Brahmanbaria",
      bn_name: "\u09AC\u09CD\u09B0\u09BE\u09B9\u09CD\u09AE\u09A3\u09AC\u09BE\u09A1\u09BC\u09BF\u09AF\u09BC\u09BE"
    },
    {
      id: 16,
      division_id: 2,
      name: "Chandpur",
      bn_name: "\u099A\u09BE\u0981\u09A6\u09AA\u09C1\u09B0"
    },
    {
      id: 17,
      division_id: 2,
      name: "Chittagong",
      bn_name: "\u099A\u099F\u09CD\u099F\u0997\u09CD\u09B0\u09BE\u09AE"
    },
    {
      id: 18,
      division_id: 2,
      name: "Comilla",
      bn_name: "\u0995\u09C1\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE"
    },
    {
      id: 19,
      division_id: 2,
      name: "Cox's Bazar",
      bn_name: "\u0995\u0995\u09CD\u09B8\u09AC\u09BE\u099C\u09BE\u09B0"
    },
    {
      id: 20,
      division_id: 2,
      name: "Feni",
      bn_name: "\u09AB\u09C7\u09A8\u09C0"
    },
    {
      id: 21,
      division_id: 2,
      name: "Khagrachhari",
      bn_name: "\u0996\u09BE\u0997\u09A1\u09BC\u09BE\u099B\u09A1\u09BC\u09BF"
    },
    {
      id: 22,
      division_id: 2,
      name: "Lakshmipur",
      bn_name: "\u09B2\u0995\u09CD\u09B7\u09CD\u09AE\u09C0\u09AA\u09C1\u09B0"
    },
    {
      id: 23,
      division_id: 2,
      name: "Noakhali",
      bn_name: "\u09A8\u09CB\u09AF\u09BC\u09BE\u0996\u09BE\u09B2\u09C0"
    },
    {
      id: 24,
      division_id: 2,
      name: "Rangamati",
      bn_name: "\u09B0\u09BE\u0999\u09CD\u0997\u09BE\u09AE\u09BE\u099F\u09BF"
    },
    {
      id: 25,
      division_id: 3,
      name: "Bogura",
      bn_name: "\u09AC\u0997\u09C1\u09A1\u09BC\u09BE"
    },
    {
      id: 26,
      division_id: 3,
      name: "Chapainawabganj",
      bn_name: "\u099A\u09BE\u0981\u09AA\u09BE\u0987\u09A8\u09AC\u09BE\u09AC\u0997\u099E\u09CD\u099C"
    },
    {
      id: 27,
      division_id: 3,
      name: "Joypurhat",
      bn_name: "\u099C\u09AF\u09BC\u09AA\u09C1\u09B0\u09B9\u09BE\u099F"
    },
    {
      id: 28,
      division_id: 3,
      name: "Naogaon",
      bn_name: "\u09A8\u0993\u0997\u09BE\u0981"
    },
    {
      id: 29,
      division_id: 3,
      name: "Natore",
      bn_name: "\u09A8\u09BE\u099F\u09CB\u09B0"
    },
    {
      id: 30,
      division_id: 3,
      name: "Pabna",
      bn_name: "\u09AA\u09BE\u09AC\u09A8\u09BE"
    },
    {
      id: 31,
      division_id: 3,
      name: "Rajshahi",
      bn_name: "\u09B0\u09BE\u099C\u09B6\u09BE\u09B9\u09C0"
    },
    {
      id: 32,
      division_id: 3,
      name: "Sirajganj",
      bn_name: "\u09B8\u09BF\u09B0\u09BE\u099C\u0997\u099E\u09CD\u099C"
    },
    {
      id: 33,
      division_id: 4,
      name: "Bagerhat",
      bn_name: "\u09AC\u09BE\u0997\u09C7\u09B0\u09B9\u09BE\u099F"
    },
    {
      id: 34,
      division_id: 4,
      name: "Chuadanga",
      bn_name: "\u099A\u09C1\u09AF\u09BC\u09BE\u09A1\u09BE\u0999\u09CD\u0997\u09BE"
    },
    {
      id: 35,
      division_id: 4,
      name: "Jessore",
      bn_name: "\u09AF\u09B6\u09CB\u09B0"
    },
    {
      id: 36,
      division_id: 4,
      name: "Jhenaidah",
      bn_name: "\u099D\u09BF\u09A8\u09BE\u0987\u09A6\u09B9"
    },
    {
      id: 37,
      division_id: 4,
      name: "Khulna",
      bn_name: "\u0996\u09C1\u09B2\u09A8\u09BE"
    },
    {
      id: 38,
      division_id: 4,
      name: "Kushtia",
      bn_name: "\u0995\u09C1\u09B7\u09CD\u099F\u09BF\u09AF\u09BC\u09BE"
    },
    {
      id: 39,
      division_id: 4,
      name: "Magura",
      bn_name: "\u09AE\u09BE\u0997\u09C1\u09B0\u09BE"
    },
    {
      id: 40,
      division_id: 4,
      name: "Meherpur",
      bn_name: "\u09AE\u09C7\u09B9\u09C7\u09B0\u09AA\u09C1\u09B0"
    },
    {
      id: 41,
      division_id: 4,
      name: "Narail",
      bn_name: "\u09A8\u09A1\u09BC\u09BE\u0987\u09B2"
    },
    {
      id: 42,
      division_id: 4,
      name: "Satkhira",
      bn_name: "\u09B8\u09BE\u09A4\u0995\u09CD\u09B7\u09C0\u09B0\u09BE"
    },
    {
      id: 43,
      division_id: 5,
      name: "Barguna",
      bn_name: "\u09AC\u09B0\u0997\u09C1\u09A8\u09BE"
    },
    {
      id: 44,
      division_id: 5,
      name: "Barisal",
      bn_name: "\u09AC\u09B0\u09BF\u09B6\u09BE\u09B2"
    },
    {
      id: 45,
      division_id: 5,
      name: "Bhola",
      bn_name: "\u09AD\u09CB\u09B2\u09BE"
    },
    {
      id: 46,
      division_id: 5,
      name: "Jhalokati",
      bn_name: "\u099D\u09BE\u09B2\u0995\u09BE\u09A0\u09BF"
    },
    {
      id: 47,
      division_id: 5,
      name: "Patuakhali",
      bn_name: "\u09AA\u099F\u09C1\u09AF\u09BC\u09BE\u0996\u09BE\u09B2\u09C0"
    },
    {
      id: 48,
      division_id: 5,
      name: "Pirojpur",
      bn_name: "\u09AA\u09BF\u09B0\u09CB\u099C\u09AA\u09C1\u09B0"
    },
    {
      id: 49,
      division_id: 6,
      name: "Habiganj",
      bn_name: "\u09B9\u09AC\u09BF\u0997\u099E\u09CD\u099C"
    },
    {
      id: 50,
      division_id: 6,
      name: "Moulvibazar",
      bn_name: "\u09AE\u09CC\u09B2\u09AD\u09C0\u09AC\u09BE\u099C\u09BE\u09B0"
    },
    {
      id: 51,
      division_id: 6,
      name: "Sunamganj",
      bn_name: "\u09B8\u09C1\u09A8\u09BE\u09AE\u0997\u099E\u09CD\u099C"
    },
    {
      id: 52,
      division_id: 6,
      name: "Sylhet",
      bn_name: "\u09B8\u09BF\u09B2\u09C7\u099F"
    },
    {
      id: 53,
      division_id: 7,
      name: "Dinajpur",
      bn_name: "\u09A6\u09BF\u09A8\u09BE\u099C\u09AA\u09C1\u09B0"
    },
    {
      id: 54,
      division_id: 7,
      name: "Gaibandha",
      bn_name: "\u0997\u09BE\u0987\u09AC\u09BE\u09A8\u09CD\u09A7\u09BE"
    },
    {
      id: 55,
      division_id: 7,
      name: "Kurigram",
      bn_name: "\u0995\u09C1\u09A1\u09BC\u09BF\u0997\u09CD\u09B0\u09BE\u09AE"
    },
    {
      id: 56,
      division_id: 7,
      name: "Lalmonirhat",
      bn_name: "\u09B2\u09BE\u09B2\u09AE\u09A8\u09BF\u09B0\u09B9\u09BE\u099F"
    },
    {
      id: 57,
      division_id: 7,
      name: "Nilphamari",
      bn_name: "\u09A8\u09C0\u09B2\u09AB\u09BE\u09AE\u09BE\u09B0\u09C0"
    },
    {
      id: 58,
      division_id: 7,
      name: "Panchagarh",
      bn_name: "\u09AA\u099E\u09CD\u099A\u0997\u09A1\u09BC"
    },
    {
      id: 59,
      division_id: 7,
      name: "Rangpur",
      bn_name: "\u09B0\u0982\u09AA\u09C1\u09B0"
    },
    {
      id: 60,
      division_id: 7,
      name: "Thakurgaon",
      bn_name: "\u09A0\u09BE\u0995\u09C1\u09B0\u0997\u09BE\u0981\u0993"
    },
    {
      id: 61,
      division_id: 8,
      name: "Jamalpur",
      bn_name: "\u099C\u09BE\u09AE\u09BE\u09B2\u09AA\u09C1\u09B0"
    },
    {
      id: 62,
      division_id: 8,
      name: "Mymensingh",
      bn_name: "\u09AE\u09AF\u09BC\u09AE\u09A8\u09B8\u09BF\u0982\u09B9"
    },
    {
      id: 63,
      division_id: 8,
      name: "Netrokona",
      bn_name: "\u09A8\u09C7\u09A4\u09CD\u09B0\u0995\u09CB\u09A3\u09BE"
    },
    {
      id: 64,
      division_id: 8,
      name: "Sherpur",
      bn_name: "\u09B6\u09C7\u09B0\u09AA\u09C1\u09B0"
    }
  ],
  upazilas: [
    {
      id: 1,
      district_id: 1,
      name: "Dhamrai",
      bn_name: "\u09A7\u09BE\u09AE\u09B0\u09BE\u0987"
    },
    {
      id: 2,
      district_id: 1,
      name: "Dohar",
      bn_name: "\u09A6\u09CB\u09B9\u09BE\u09B0"
    },
    {
      id: 3,
      district_id: 1,
      name: "Keraniganj",
      bn_name: "\u0995\u09C7\u09B0\u09BE\u09A8\u09C0\u0997\u099E\u09CD\u099C"
    },
    {
      id: 4,
      district_id: 1,
      name: "Nawabganj",
      bn_name: "\u09A8\u09AC\u09BE\u09AC\u0997\u099E\u09CD\u099C"
    },
    {
      id: 5,
      district_id: 1,
      name: "Savar",
      bn_name: "\u09B8\u09BE\u09AD\u09BE\u09B0"
    },
    {
      id: 6,
      district_id: 3,
      name: "Gazipur Sadar",
      bn_name: "\u0997\u09BE\u099C\u09C0\u09AA\u09C1\u09B0 \u09B8\u09A6\u09B0"
    },
    {
      id: 7,
      district_id: 3,
      name: "Kaliakair",
      bn_name: "\u0995\u09BE\u09B2\u09BF\u09AF\u09BC\u09BE\u0995\u09C8\u09B0"
    },
    {
      id: 8,
      district_id: 3,
      name: "Kaliganj",
      bn_name: "\u0995\u09BE\u09B2\u09C0\u0997\u099E\u09CD\u099C"
    },
    {
      id: 9,
      district_id: 3,
      name: "Kapasia",
      bn_name: "\u0995\u09BE\u09AA\u09BE\u09B8\u09BF\u09AF\u09BC\u09BE"
    },
    {
      id: 10,
      district_id: 3,
      name: "Sreepur",
      bn_name: "\u09B6\u09CD\u09B0\u09C0\u09AA\u09C1\u09B0"
    },
    {
      id: 11,
      district_id: 9,
      name: "Araihazar",
      bn_name: "\u0986\u09A1\u09BC\u09BE\u0987\u09B9\u09BE\u099C\u09BE\u09B0"
    },
    {
      id: 12,
      district_id: 9,
      name: "Bandar",
      bn_name: "\u09AC\u09A8\u09CD\u09A6\u09B0"
    },
    {
      id: 13,
      district_id: 9,
      name: "Narayanganj Sadar",
      bn_name: "\u09A8\u09BE\u09B0\u09BE\u09AF\u09BC\u09A3\u0997\u099E\u09CD\u099C \u09B8\u09A6\u09B0"
    },
    {
      id: 14,
      district_id: 9,
      name: "Rupganj",
      bn_name: "\u09B0\u09C2\u09AA\u0997\u099E\u09CD\u099C"
    },
    {
      id: 15,
      district_id: 9,
      name: "Sonargaon",
      bn_name: "\u09B8\u09CB\u09A8\u09BE\u09B0\u0997\u09BE\u0981"
    },
    {
      id: 16,
      district_id: 17,
      name: "Anwara",
      bn_name: "\u0986\u09A8\u09CB\u09AF\u09BC\u09BE\u09B0\u09BE"
    },
    {
      id: 17,
      district_id: 17,
      name: "Banshkhali",
      bn_name: "\u09AC\u09BE\u0981\u09B6\u0996\u09BE\u09B2\u09C0"
    },
    {
      id: 18,
      district_id: 17,
      name: "Boalkhali",
      bn_name: "\u09AC\u09CB\u09AF\u09BC\u09BE\u09B2\u0996\u09BE\u09B2\u09C0"
    },
    {
      id: 19,
      district_id: 17,
      name: "Chandanaish",
      bn_name: "\u099A\u09A8\u09CD\u09A6\u09A8\u09BE\u0987\u09B6"
    },
    {
      id: 20,
      district_id: 17,
      name: "Chittagong Sadar",
      bn_name: "\u099A\u099F\u09CD\u099F\u0997\u09CD\u09B0\u09BE\u09AE \u09B8\u09A6\u09B0"
    },
    {
      id: 21,
      district_id: 17,
      name: "Fatikchhari",
      bn_name: "\u09AB\u099F\u09BF\u0995\u099B\u09A1\u09BC\u09BF"
    },
    {
      id: 22,
      district_id: 17,
      name: "Hathazari",
      bn_name: "\u09B9\u09BE\u099F\u09B9\u09BE\u099C\u09BE\u09B0\u09C0"
    },
    {
      id: 23,
      district_id: 17,
      name: "Karnaphuli",
      bn_name: "\u0995\u09B0\u09CD\u09A3\u09AB\u09C1\u09B2\u09C0"
    },
    {
      id: 24,
      district_id: 17,
      name: "Lohagara",
      bn_name: "\u09B2\u09CB\u09B9\u09BE\u0997\u09BE\u09A1\u09BC\u09BE"
    },
    {
      id: 25,
      district_id: 17,
      name: "Mirsharai",
      bn_name: "\u09AE\u09BF\u09B0\u09B8\u09B0\u09BE\u0987"
    },
    {
      id: 26,
      district_id: 17,
      name: "Patiya",
      bn_name: "\u09AA\u099F\u09BF\u09AF\u09BC\u09BE"
    },
    {
      id: 27,
      district_id: 17,
      name: "Rangunia",
      bn_name: "\u09B0\u09BE\u0999\u09CD\u0997\u09C1\u09A8\u09BF\u09AF\u09BC\u09BE"
    },
    {
      id: 28,
      district_id: 17,
      name: "Raozan",
      bn_name: "\u09B0\u09BE\u0989\u099C\u09BE\u09A8"
    },
    {
      id: 29,
      district_id: 17,
      name: "Sandwip",
      bn_name: "\u09B8\u09A8\u09CD\u09A6\u09CD\u09AC\u09C0\u09AA"
    },
    {
      id: 30,
      district_id: 17,
      name: "Satkania",
      bn_name: "\u09B8\u09BE\u09A4\u0995\u09BE\u09A8\u09BF\u09AF\u09BC\u09BE"
    },
    {
      id: 31,
      district_id: 17,
      name: "Sitakunda",
      bn_name: "\u09B8\u09C0\u09A4\u09BE\u0995\u09C1\u09A3\u09CD\u09A1"
    },
    {
      id: 32,
      district_id: 19,
      name: "Chakaria",
      bn_name: "\u099A\u0995\u09B0\u09BF\u09AF\u09BC\u09BE"
    },
    {
      id: 33,
      district_id: 19,
      name: "Cox's Bazar Sadar",
      bn_name: "\u0995\u0995\u09CD\u09B8\u09AC\u09BE\u099C\u09BE\u09B0 \u09B8\u09A6\u09B0"
    },
    {
      id: 34,
      district_id: 19,
      name: "Kutubdia",
      bn_name: "\u0995\u09C1\u09A4\u09C1\u09AC\u09A6\u09BF\u09AF\u09BC\u09BE"
    },
    {
      id: 35,
      district_id: 19,
      name: "Maheshkhali",
      bn_name: "\u09AE\u09B9\u09C7\u09B6\u0996\u09BE\u09B2\u09C0"
    },
    {
      id: 36,
      district_id: 19,
      name: "Pekua",
      bn_name: "\u09AA\u09C7\u0995\u09C1\u09AF\u09BC\u09BE"
    },
    {
      id: 37,
      district_id: 19,
      name: "Ramu",
      bn_name: "\u09B0\u09BE\u09AE\u09C1"
    },
    {
      id: 38,
      district_id: 19,
      name: "Teknaf",
      bn_name: "\u099F\u09C7\u0995\u09A8\u09BE\u09AB"
    },
    {
      id: 39,
      district_id: 19,
      name: "Ukhia",
      bn_name: "\u0989\u0996\u09BF\u09AF\u09BC\u09BE"
    },
    {
      id: 40,
      district_id: 37,
      name: "Batiaghata",
      bn_name: "\u09AC\u099F\u09BF\u09AF\u09BC\u09BE\u0998\u09BE\u099F\u09BE"
    },
    {
      id: 41,
      district_id: 37,
      name: "Dacope",
      bn_name: "\u09A6\u09BE\u0995\u09CB\u09AA"
    },
    {
      id: 42,
      district_id: 37,
      name: "Dumuria",
      bn_name: "\u09A1\u09C1\u09AE\u09C1\u09B0\u09BF\u09AF\u09BC\u09BE"
    },
    {
      id: 43,
      district_id: 37,
      name: "Fultala",
      bn_name: "\u09AB\u09C1\u09B2\u09A4\u09B2\u09BE"
    },
    {
      id: 44,
      district_id: 37,
      name: "Khulna Sadar",
      bn_name: "\u0996\u09C1\u09B2\u09A8\u09BE \u09B8\u09A6\u09B0"
    },
    {
      id: 45,
      district_id: 37,
      name: "Koyra",
      bn_name: "\u0995\u09AF\u09BC\u09B0\u09BE"
    },
    {
      id: 46,
      district_id: 37,
      name: "Paikgachha",
      bn_name: "\u09AA\u09BE\u0987\u0995\u0997\u09BE\u099B\u09BE"
    },
    {
      id: 47,
      district_id: 37,
      name: "Rupsha",
      bn_name: "\u09B0\u09C2\u09AA\u09B8\u09BE"
    },
    {
      id: 48,
      district_id: 37,
      name: "Terokhada",
      bn_name: "\u09A4\u09C7\u09B0\u0996\u09BE\u09A6\u09BE"
    },
    {
      id: 49,
      district_id: 44,
      name: "Agailjhara",
      bn_name: "\u0986\u0997\u09C8\u09B2\u099D\u09BE\u09A1\u09BC\u09BE"
    },
    {
      id: 50,
      district_id: 44,
      name: "Babuganj",
      bn_name: "\u09AC\u09BE\u09AC\u09C1\u0997\u099E\u09CD\u099C"
    },
    {
      id: 51,
      district_id: 44,
      name: "Bakerganj",
      bn_name: "\u09AC\u09BE\u0995\u09C7\u09B0\u0997\u099E\u09CD\u099C"
    },
    {
      id: 52,
      district_id: 44,
      name: "Banaripara",
      bn_name: "\u09AC\u09BE\u09A8\u09BE\u09B0\u09C0\u09AA\u09BE\u09A1\u09BC\u09BE"
    },
    {
      id: 53,
      district_id: 44,
      name: "Barisal Sadar",
      bn_name: "\u09AC\u09B0\u09BF\u09B6\u09BE\u09B2 \u09B8\u09A6\u09B0"
    },
    {
      id: 54,
      district_id: 44,
      name: "Gaurnadi",
      bn_name: "\u0997\u09CC\u09B0\u09A8\u09A6\u09C0"
    },
    {
      id: 55,
      district_id: 44,
      name: "Hizla",
      bn_name: "\u09B9\u09BF\u099C\u09B2\u09BE"
    },
    {
      id: 56,
      district_id: 44,
      name: "Mehendiganj",
      bn_name: "\u09AE\u09C7\u09B9\u09C7\u09A8\u09CD\u09A6\u09BF\u0997\u099E\u09CD\u099C"
    },
    {
      id: 57,
      district_id: 44,
      name: "Muladi",
      bn_name: "\u09AE\u09C1\u09B2\u09BE\u09A6\u09C0"
    },
    {
      id: 58,
      district_id: 44,
      name: "Wazirpur",
      bn_name: "\u0989\u099C\u09BF\u09B0\u09AA\u09C1\u09B0"
    },
    {
      id: 59,
      district_id: 52,
      name: "Balaganj",
      bn_name: "\u09AC\u09BE\u09B2\u09BE\u0997\u099E\u09CD\u099C"
    },
    {
      id: 60,
      district_id: 52,
      name: "Beanibazar",
      bn_name: "\u09AC\u09BF\u09AF\u09BC\u09BE\u09A8\u09C0\u09AC\u09BE\u099C\u09BE\u09B0"
    },
    {
      id: 61,
      district_id: 52,
      name: "Bishwanath",
      bn_name: "\u09AC\u09BF\u09B6\u09CD\u09AC\u09A8\u09BE\u09A5"
    },
    {
      id: 62,
      district_id: 52,
      name: "Companiganj",
      bn_name: "\u0995\u09CB\u09AE\u09CD\u09AA\u09BE\u09A8\u09C0\u0997\u099E\u09CD\u099C"
    },
    {
      id: 63,
      district_id: 52,
      name: "Fenchuganj",
      bn_name: "\u09AB\u09C7\u099E\u09CD\u099A\u09C1\u0997\u099E\u09CD\u099C"
    },
    {
      id: 64,
      district_id: 52,
      name: "Golapganj",
      bn_name: "\u0997\u09CB\u09B2\u09BE\u09AA\u0997\u099E\u09CD\u099C"
    },
    {
      id: 65,
      district_id: 52,
      name: "Gowainghat",
      bn_name: "\u0997\u09CB\u09AF\u09BC\u09BE\u0987\u09A8\u0998\u09BE\u099F"
    },
    {
      id: 66,
      district_id: 52,
      name: "Jaintiapur",
      bn_name: "\u099C\u09C8\u09A8\u09CD\u09A4\u09BE\u09AA\u09C1\u09B0"
    },
    {
      id: 67,
      district_id: 52,
      name: "Kanaighat",
      bn_name: "\u0995\u09BE\u09A8\u09BE\u0987\u0998\u09BE\u099F"
    },
    {
      id: 68,
      district_id: 52,
      name: "Osmaninagar",
      bn_name: "\u0993\u09B8\u09AE\u09BE\u09A8\u09C0\u09A8\u0997\u09B0"
    },
    {
      id: 69,
      district_id: 52,
      name: "Sylhet Sadar",
      bn_name: "\u09B8\u09BF\u09B2\u09C7\u099F \u09B8\u09A6\u09B0"
    },
    {
      id: 70,
      district_id: 52,
      name: "Zakiganj",
      bn_name: "\u099C\u0995\u09BF\u0997\u099E\u09CD\u099C"
    },
    {
      id: 71,
      district_id: 59,
      name: "Badarganj",
      bn_name: "\u09AC\u09A6\u09B0\u0997\u099E\u09CD\u099C"
    },
    {
      id: 72,
      district_id: 59,
      name: "Gangachara",
      bn_name: "\u0997\u0999\u09CD\u0997\u09BE\u099A\u09A1\u09BC\u09BE"
    },
    {
      id: 73,
      district_id: 59,
      name: "Kaunia",
      bn_name: "\u0995\u09BE\u0989\u09A8\u09BF\u09AF\u09BC\u09BE"
    },
    {
      id: 74,
      district_id: 59,
      name: "Mithapukur",
      bn_name: "\u09AE\u09BF\u09A0\u09BE\u09AA\u09C1\u0995\u09C1\u09B0"
    },
    {
      id: 75,
      district_id: 59,
      name: "Pirgachha",
      bn_name: "\u09AA\u09C0\u09B0\u0997\u09BE\u099B\u09BE"
    },
    {
      id: 76,
      district_id: 59,
      name: "Pirganj",
      bn_name: "\u09AA\u09C0\u09B0\u0997\u099E\u09CD\u099C"
    },
    {
      id: 77,
      district_id: 59,
      name: "Rangpur Sadar",
      bn_name: "\u09B0\u0982\u09AA\u09C1\u09B0 \u09B8\u09A6\u09B0"
    },
    {
      id: 78,
      district_id: 59,
      name: "Taraganj",
      bn_name: "\u09A4\u09BE\u09B0\u09BE\u0997\u099E\u09CD\u099C"
    },
    {
      id: 79,
      district_id: 62,
      name: "Bhaluka",
      bn_name: "\u09AD\u09BE\u09B2\u09C1\u0995\u09BE"
    },
    {
      id: 80,
      district_id: 62,
      name: "Fulbaria",
      bn_name: "\u09AB\u09C1\u09B2\u09AC\u09BE\u09A1\u09BC\u09BF\u09AF\u09BC\u09BE"
    },
    {
      id: 81,
      district_id: 62,
      name: "Gaffargaon",
      bn_name: "\u0997\u09AB\u09B0\u0997\u09BE\u0981\u0993"
    },
    {
      id: 82,
      district_id: 62,
      name: "Gauripur",
      bn_name: "\u0997\u09CC\u09B0\u09C0\u09AA\u09C1\u09B0"
    },
    {
      id: 83,
      district_id: 62,
      name: "Haluaghat",
      bn_name: "\u09B9\u09BE\u09B2\u09C1\u09AF\u09BC\u09BE\u0998\u09BE\u099F"
    },
    {
      id: 84,
      district_id: 62,
      name: "Ishwarganj",
      bn_name: "\u0988\u09B6\u09CD\u09AC\u09B0\u0997\u099E\u09CD\u099C"
    },
    {
      id: 85,
      district_id: 62,
      name: "Muktagachha",
      bn_name: "\u09AE\u09C1\u0995\u09CD\u09A4\u09BE\u0997\u09BE\u099B\u09BE"
    },
    {
      id: 86,
      district_id: 62,
      name: "Mymensingh Sadar",
      bn_name: "\u09AE\u09AF\u09BC\u09AE\u09A8\u09B8\u09BF\u0982\u09B9 \u09B8\u09A6\u09B0"
    },
    {
      id: 87,
      district_id: 62,
      name: "Nandail",
      bn_name: "\u09A8\u09BE\u09A8\u09CD\u09A6\u09BE\u0987\u09B2"
    },
    {
      id: 88,
      district_id: 62,
      name: "Phulpur",
      bn_name: "\u09AB\u09C1\u09B2\u09AA\u09C1\u09B0"
    },
    {
      id: 89,
      district_id: 62,
      name: "Trishal",
      bn_name: "\u09A4\u09CD\u09B0\u09BF\u09B6\u09BE\u09B2"
    }
  ]
};

// src/hooks/index.ts
var divisions = bd_data_default.divisions;
var districts = bd_data_default.districts;
var upazilas = bd_data_default.upazilas;
function useDivisions() {
  return { divisions };
}
function useDistricts(divisionId) {
  const filtered = react.useMemo(() => {
    if (!divisionId) return districts;
    return districts.filter((d) => d.division_id === divisionId);
  }, [divisionId]);
  return { districts: filtered };
}
function useUpazilas(districtId) {
  const filtered = react.useMemo(() => {
    if (!districtId) return upazilas;
    return upazilas.filter((u) => u.district_id === districtId);
  }, [districtId]);
  return { upazilas: filtered };
}
function useBangladesh() {
  const getDistrictsByDivision = react.useMemo(
    () => (divisionId) => districts.filter((d) => d.division_id === divisionId),
    []
  );
  const getUpazilasByDistrict = react.useMemo(
    () => (districtId) => upazilas.filter((u) => u.district_id === districtId),
    []
  );
  const getDivisionById = react.useMemo(
    () => (id) => divisions.find((d) => d.id === id),
    []
  );
  const getDistrictById = react.useMemo(
    () => (id) => districts.find((d) => d.id === id),
    []
  );
  const getUpazilaById = react.useMemo(
    () => (id) => upazilas.find((u) => u.id === id),
    []
  );
  return {
    divisions,
    districts,
    upazilas,
    getDistrictsByDivision,
    getUpazilasByDistrict,
    getDivisionById,
    getDistrictById,
    getUpazilaById
  };
}

exports.useBangladesh = useBangladesh;
exports.useDistricts = useDistricts;
exports.useDivisions = useDivisions;
exports.useUpazilas = useUpazilas;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map