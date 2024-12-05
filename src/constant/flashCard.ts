export interface FlashCard {
  discountBtn: boolean;
  discountPrice: number;
  trashIcon: boolean;
  heartIcon: boolean;
  eyeIcon: boolean;
  src: string;
  Heading: string;
  price: number;
  oldPrice: number;
  star: number;
  reviews: number;
}

export const flashCard: FlashCard[] = [
  {
    discountBtn: true,
    discountPrice: 40,
    trashIcon: true,
    heartIcon: true,
    eyeIcon: true,
    src: "/card1.png",
    Heading: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    star: 5,
    reviews: 88
  }
];
