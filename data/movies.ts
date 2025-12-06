export type MovieType = {
  id: string;
  name: string;
  description: string;
  commentCount: number;
  starCount: number;
  comments: string[];
};

export const movies: MovieType[] = [
  {
    id: "1",
    name: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    commentCount: 124,
    starCount: 4.7,
    comments: ["Great movie!", "Mind-blowing!", "A true masterpiece."],
  },
  {
    id: "2",
    name: "Interstellar",
    description: "A space exploration film by Christopher Nolan.",
    commentCount: 98,
    starCount: 4.8,
    comments: [
      "Amazing visual effects!",
      "Loved the soundtrack.",
      "A bit confusing but great.",
    ],
  },
  {
    id: "3",
    name: "The Dark Knight",
    description: "The iconic Batman film directed by Christopher Nolan.",
    commentCount: 255,
    starCount: 4.9,
    comments: [
      "The best Batman movie!",
      "Heath Ledger was outstanding.",
      "Iconic movie.",
    ],
  },
];
