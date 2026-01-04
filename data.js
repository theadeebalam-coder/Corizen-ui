/* =========================
   CORIZEN DATA SOURCE
   (Temporary backend)
========================= */

/* ---------- USER ---------- */
const USER = {
  name: "Student Name",
  class: "Class 10",
  board: "CBSE"
};

/* ---------- SUBJECTS ---------- */
const SUBJECTS = [
  { id: "math", name: "Mathematics" },
  { id: "science", name: "Science" },
  { id: "social", name: "Social Science" },
  { id: "english", name: "English" },
  { id: "hindi", name: "Hindi" }
];

/* ---------- NOTES ---------- */
const NOTES = {
  science: [
    {
      id: 1,
      title: "Matter in Our Surroundings",
      type: "PDF & Text"
    },
    {
      id: 2,
      title: "Is Matter Around Us Pure?",
      type: "PDF & Text"
    },
    {
      id: 3,
      title: "Atoms and Molecules",
      type: "PDF & Text"
    },
    {
      id: 4,
      title: "Structure of the Atom",
      type: "PDF & Text"
    }
  ],

  math: [
    { id: 1, title: "Number Systems", type: "PDF & Text" },
    { id: 2, title: "Polynomials", type: "PDF & Text" },
    { id: 3, title: "Coordinate Geometry", type: "PDF & Text" }
  ],

  english: [
    { id: 1, title: "The Fun They Had", type: "Text" },
    { id: 2, title: "The Sound of Music", type: "Text" }
  ]
};

/* ---------- PRODUCTS ---------- */
const PRODUCTS = [
  {
    id: 1,
    name: "Notebook",
    category: "Books",
    price: 99
  },
  {
    id: 2,
    name: "Blue Gel Pens",
    category: "Pens",
    price: 149
  }
];
