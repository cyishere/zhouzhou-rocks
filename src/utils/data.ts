export interface PostMeta {
  id?: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
  cover?: string;
  coverAlt?: string;
}

export const posts: PostMeta[] = [
  {
    id: "1",
    date: "May 3, 2022",
    title: "INBETWEEN GIRL stumbles, but has its heart in the right place",
    excerpt:
      "With characters who feel like caricatures, it’s hard to stay invested in the story, in spite of Galbraith’s star-making performance.",
    link: "/posts/2022-05-03-entre-nous",
    cover: "/images/1.jpg",
  },
  {
    id: "2",
    date: "May 3, 2022",
    title:
      "TCM Host Alicia Malone on her new book and a changing relationship with classic movies",
    excerpt:
      "Girls On Film, is sprinkled with personal anecdotes, film history, and a focus on women in front of the camera that inevitably had an impact on Malone’s life.",
    link: "/posts/2022-05-03-entre-nous",
    cover: "/images/2.jpg",
  },
  {
    id: "3",
    date: "May 3, 2022",
    title: "Printing the Legend: A Mann’s Legacy",
    excerpt:
      "In this month's column, Anthony Mann arrives on the scene with Barbara Stanwyck and Jimmy Stewart, changing the western forever.",
    link: "/posts/2022-05-03-entre-nous",
    cover: "/images/3.jpg",
  },
  {
    id: "4",
    date: "April 26, 2022",
    title: "Film Noir: The Dark Side of Cinema VI offers some hidden gems",
    excerpt:
      "Kino Lorber’s sixth installment of resurrected and remastered film noirs that have essentially been lost to history is...fine. To be honest, it feels like one of those bundles with one thing that you really want, and then a couple of extras tacked on to goose the asking price.",
    link: "/posts/2022-05-03-entre-nous",
  },
  {
    id: "5",
    date: "May 3, 2022",
    title: "Now that’s what I call HALO; episode 5 delivers the goods",
    excerpt:
      "Girls On Film, is sprinkled with personal anecdotes, film history, and a focus on women in front of the camera that inevitably had an impact on Malone’s life.",
    link: "/posts/2022-05-03-entre-nous",
    cover: "/images/5.jpg",
  },
  {
    id: "6",
    date: "May 3, 2022",
    title:
      "Captain’s Log, Entry 4: Life, death, and an eternity in syndication",
    excerpt: "Cancellation, a historic kiss, and more!",
    link: "/posts/2022-05-03-entre-nous",
    cover: "/images/6.png",
  },
];
