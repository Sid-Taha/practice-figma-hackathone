export interface FlashCard {
  discountBtn: boolean;
  discountPrice: number;
  trashIcon: boolean;
  heartIcon: boolean;
  eyeIcon: boolean;
  src: string;
  Heading: string;
  price: number;
  oldPrice?: number;
  star: number;
  reviews: number;
}

export const flashCard: FlashCard[] = [
  {
    discountBtn: true,
    discountPrice: 40,
    trashIcon: false,
    heartIcon: true,
    eyeIcon: true,
    src: "/card1.png",
    Heading: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    star: 5,
    reviews: 88
  },
  {
    discountBtn: true,
    discountPrice: 35,
    trashIcon: false,
    heartIcon: true,
    eyeIcon: true,
    src: "/card2.png",
    Heading: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    star: 4,
    reviews: 75
  },
  {
    discountBtn: true,
    discountPrice: 30,
    trashIcon: false,
    heartIcon: true,
    eyeIcon: true,
    src: "/card2.png",
    Heading: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    star: 5,
    reviews: 99
  },
  {
    discountBtn: true,
    discountPrice: 25,
    trashIcon: false,
    heartIcon: true,
    eyeIcon: true,
    src: "/card2.png",
    Heading: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    star: 5,
    reviews: 99
  },
  {
    discountBtn: true,
    discountPrice: 25,
    trashIcon: false,
    heartIcon: true,
    eyeIcon: true,
    src: "/card2.png",
    Heading: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    star: 5,
    reviews: 99
  }
];
