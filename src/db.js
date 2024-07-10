const books = [
  {
    id: 1,
    name: 'The Enigma',
    author: 'Jane Smith',
    page: 320,
    description:
      'A thrilling mystery that keeps readers on the edge of their seats.',
    rating: 8.5,
    uploadDate: '19 Jan 2021',
  },
  {
    id: 2,
    name: 'Beyond the Stars',
    author: 'Michael Johnson',
    page: 412,
    description:
      'An epic science fiction adventure exploring distant galaxies and new civilizations.',
    rating: 9.2,
    uploadDate: '19 Jan 2021',
  },
  {
    id: 3,
    name: "Serendipity's Secret",
    author: 'Emily Davis',
    page: 280,
    description:
      'A heartwarming romance novel about unexpected love in a small town.',
    rating: 7.8,
    uploadDate: '19 Jan 2021',
  },
  {
    id: 4,
    name: 'Shadows of Destiny',
    author: 'David Thompson',
    page: 500,
    description:
      'A fantasy epic filled with magic, prophecies, and a battle between light and darkness.',
    rating: 8.9,
    uploadDate: '19 Jan 2021',
  },
  {
    id: 5,
    name: 'Culinary Chronicles',
    author: 'Maria Rodriguez',
    page: 150,
    description:
      'A collection of delightful short stories centered around food and culture.',
    rating: 7.2,
    uploadDate: '19 Jan 2021',
  },
  {
    id: 6,
    name: 'Echoes of Eternity',
    author: 'Benjamin Turner',
    page: 600,
    description: 'A philosophical exploration of life, time, and the universe.',
    rating: 9.7,
    uploadDate: '19 Jan 2021',
  },
  {
    id: 7,
    name: 'Midnight Murders',
    author: 'Olivia Parker',
    page: 320,
    description:
      "A gripping thriller following a detective's pursuit of a cunning serial killer.",
    rating: 8.1,
    uploadDate: '19 Jan 2021',
  },
  {
    id: 8,
    name: 'The Artistic Odyssey',
    author: 'Christopher Bennett',
    page: 240,
    description:
      "A coming-of-age story about a young artist's journey to self-discovery.",
    rating: 7.6,
    uploadDate: '19 Jan 2021',
  },
  {
    id: 9,
    name: 'Whispers in the Woods',
    author: 'Samantha Foster',
    page: 280,
    description:
      'A collection of eerie and spine-chilling short stories set in the woods.',
    rating: 8.3,
    uploadDate: '19 Jan 2021',
  },
  {
    id: 10,
    name: 'Legends of Lyria',
    author: 'Daniel Harris',
    page: 450,
    description:
      'An epic fantasy series filled with knights, dragons, and quests for honor.',
    rating: 4.8,
    uploadDate: '19 Jan 2021',
  },
  {
    id: 11,
    name: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    page: 448,
    description:
      'A historical novel set in London and Paris before and during the French Revolution.',
    rating: 9.1,
    uploadDate: '20 Jan 2021',
  },
  {
    id: 12,
    name: 'War and Peace',
    author: 'Leo Tolstoy',
    page: 1225,
    description:
      'A complex novel that intertwines the lives of several families during the Napoleonic Wars.',
    rating: 8.8,
    uploadDate: '20 Jan 2021',
  },
  {
    id: 13,
    name: 'Pride and Prejudice',
    author: 'Jane Austen',
    page: 432,
    description:
      'A romantic novel that explores the themes of love and social standing.',
    rating: 9.0,
    uploadDate: '20 Jan 2021',
  },
  {
    id: 14,
    name: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    page: 277,
    description:
      'A story about the experiences of a young man in 1950s America.',
    rating: 7.9,
    uploadDate: '20 Jan 2021',
  },
  {
    id: 15,
    name: '1984',
    author: 'George Orwell',
    page: 328,
    description:
      'A dystopian novel that explores themes of totalitarianism, surveillance, and individuality.',
    rating: 9.3,
    uploadDate: '20 Jan 2021',
  },
  {
    id: 16,
    name: 'Moby Dick',
    author: 'Herman Melville',
    page: 635,
    description:
      'A novel about the voyage of the whaling ship Pequod and its captain Ahab.',
    rating: 7.5,
    uploadDate: '20 Jan 2021',
  },
  {
    id: 17,
    name: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    page: 180,
    description:
      'A novel about the American dream and the Jazz Age in 1920s America.',
    rating: 8.4,
    uploadDate: '20 Jan 2021',
  },
  {
    id: 18,
    name: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    page: 281,
    description:
      'A novel about the racial injustice and loss of innocence in the American South.',
    rating: 9.5,
    uploadDate: '20 Jan 2021',
  },
  {
    id: 19,
    name: 'The Odyssey',
    author: 'Homer',
    page: 541,
    description:
      'An epic poem about the adventures of the Greek hero Odysseus.',
    rating: 8.7,
    uploadDate: '20 Jan 2021',
  },
  {
    id: 20,
    name: 'Brave New World',
    author: 'Aldous Huxley',
    page: 311,
    description:
      'A dystopian novel that explores the themes of technology, society, and individuality.',
    rating: 8.2,
    uploadDate: '20 Jan 2021',
  },
  {
    id: 21,
    name: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    page: 310,
    description:
      'A fantasy novel about the journey of Bilbo Baggins and his quest to reclaim a lost kingdom.',
    rating: 9.4,
    uploadDate: '21 Jan 2021',
  },
  {
    id: 22,
    name: 'Frankenstein',
    author: 'Mary Shelley',
    page: 280,
    description:
      'A novel about the consequences of playing God and creating life.',
    rating: 8.0,
    uploadDate: '21 Jan 2021',
  },
  {
    id: 23,
    name: 'Dracula',
    author: 'Bram Stoker',
    page: 418,
    description:
      'A novel about the legendary vampire Count Dracula and his attempts to move from Transylvania to England.',
    rating: 8.1,
    uploadDate: '21 Jan 2021',
  },
  {
    id: 24,
    name: 'Jane Eyre',
    author: 'Charlotte Brontë',
    page: 507,
    description:
      'A novel about the life and struggles of an orphaned girl in 19th century England.',
    rating: 8.9,
    uploadDate: '21 Jan 2021',
  },
  {
    id: 25,
    name: 'Wuthering Heights',
    author: 'Emily Brontë',
    page: 400,
    description:
      'A novel about the intense and often destructive relationship between Heathcliff and Catherine Earnshaw.',
    rating: 8.3,
    uploadDate: '21 Jan 2021',
  },
  {
    id: 26,
    name: 'Great Expectations',
    author: 'Charles Dickens',
    page: 505,
    description:
      'A novel about the life and personal growth of an orphan named Pip.',
    rating: 8.6,
    uploadDate: '21 Jan 2021',
  },
  {
    id: 27,
    name: 'The Scarlet Letter',
    author: 'Nathaniel Hawthorne',
    page: 272,
    description:
      'A novel about the consequences of sin and the nature of guilt and redemption.',
    rating: 8.4,
    uploadDate: '21 Jan 2021',
  },
  {
    id: 28,
    name: 'Anna Karenina',
    author: 'Leo Tolstoy',
    page: 864,
    description:
      'A novel about the complexities of love, family, and Russian society.',
    rating: 8.7,
    uploadDate: '21 Jan 2021',
  },
  {
    id: 29,
    name: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    page: 671,
    description:
      'A novel about the mental anguish and moral dilemmas of a young man who commits a murder.',
    rating: 9.1,
    uploadDate: '21 Jan 2021',
  },
  {
    id: 30,
    name: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    page: 824,
    description:
      'A novel about the spiritual and moral struggles of the Karamazov family.',
    rating: 9.0,
    uploadDate: '21 Jan 2021',
  },
  {
    id: 31,
    name: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    page: 254,
    description:
      'A novel about a young man who sells his soul for eternal youth and beauty.',
    rating: 8.5,
    uploadDate: '21 Jan 2021',
  },
  {
    id: 32,
    name: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    page: 1276,
    description:
      'A novel about a man who is wrongfully imprisoned and seeks revenge on those who betrayed him.',
    rating: 9.3,
    uploadDate: '21 Jan 2021',
  },
  {
    id: 33,
    name: 'Les Misérables',
    author: 'Victor Hugo',
    page: 1463,
    description:
      'A novel about the struggles and redemption of several characters in post-revolutionary France.',
    rating: 9.2,
    uploadDate: '21 Jan 2021',
  },
  {
    id: 34,
    name: 'Gone with the Wind',
    author: 'Margaret Mitchell',
    page: 1037,
    description:
      'A novel about the life of Scarlett O\'Hara and the American Civil War.',
    rating: 8.8,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 35,
    name: 'Don Quixote',
    author: 'Miguel de Cervantes',
    page: 863,
    description:
      'A novel about the adventures of a man who becomes a knight-errant.',
    rating: 8.7,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 36,
    name: 'Madame Bovary',
    author: 'Gustave Flaubert',
    page: 329,
    description:
      'A novel about a woman who seeks escape from her provincial life through romantic and material indulgence.',
    rating: 8.1,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 37,
    name: 'The Divine Comedy',
    author: 'Dante Alighieri',
    page: 798,
    description:
      'An epic poem that describes the journey of the soul through Hell, Purgatory, and Heaven.',
    rating: 9.4,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 38,
    name: 'The Iliad',
    author: 'Homer',
    page: 704,
    description:
      'An epic poem about the Trojan War and the hero Achilles.',
    rating: 9.0,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 39,
    name: 'The Aeneid',
    author: 'Virgil',
    page: 442,
    description:
      'An epic poem about the journey of Aeneas from Troy to Italy.',
    rating: 8.9,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 40,
    name: 'Heart of Darkness',
    author: 'Joseph Conrad',
    page: 154,
    description:
      'A novel about a voyage up the Congo River and the horrors of colonialism.',
    rating: 8.3,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 41,
    name: 'A Portrait of the Artist as a Young Man',
    author: 'James Joyce',
    page: 276,
    description:
      'A novel about the growth and development of a young artist.',
    rating: 8.5,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 42,
    name: 'Ulysses',
    author: 'James Joyce',
    page: 730,
    description:
      'A novel that parallels the events of a single day in Dublin with the episodes of Homer\'s Odyssey.',
    rating: 8.4,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 43,
    name: 'In Search of Lost Time',
    author: 'Marcel Proust',
    page: 4215,
    description:
      'A novel about the narrator\'s experiences in late 19th and early 20th century France.',
    rating: 9.1,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 44,
    name: 'The Trial',
    author: 'Franz Kafka',
    page: 255,
    description:
      'A novel about a man who is arrested and prosecuted by a remote, inaccessible authority.',
    rating: 8.2,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 45,
    name: 'One Hundred Years of Solitude',
    author: 'Gabriel Garcia Marquez',
    page: 417,
    description:
      'A novel about the rise and fall of the Buendía family in the fictional town of Macondo.',
    rating: 9.3,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 46,
    name: 'The Stranger',
    author: 'Albert Camus',
    page: 123,
    description:
      'A novel about an indifferent French Algerian who kills an Arab man and his subsequent trial.',
    rating: 8.0,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 47,
    name: 'The Metamorphosis',
    author: 'Franz Kafka',
    page: 201,
    description:
      'A novel about a man who wakes up to find himself transformed into a giant insect.',
    rating: 8.1,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 48,
    name: 'Catch-22',
    author: 'Joseph Heller',
    page: 453,
    description:
      'A novel about the absurdities and horrors of war.',
    rating: 8.5,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 49,
    name: 'The Sun Also Rises',
    author: 'Ernest Hemingway',
    page: 251,
    description:
      'A novel about the lives and travels of a group of expatriates in the 1920s.',
    rating: 8.4,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 50,
    name: 'The Old Man and the Sea',
    author: 'Ernest Hemingway',
    page: 127,
    description:
      'A novel about an old Cuban fisherman\'s struggle with a giant marlin.',
    rating: 8.7,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 51,
    name: 'Beloved',
    author: 'Toni Morrison',
    page: 324,
    description:
      'A novel about a former slave who is haunted by the ghost of her daughter.',
    rating: 8.8,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 52,
    name: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
    page: 275,
    description:
      'A novel about a soldier who becomes "unstuck in time" after surviving the bombing of Dresden.',
    rating: 8.6,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 53,
    name: 'Lolita',
    author: 'Vladimir Nabokov',
    page: 336,
    description:
      'A novel about a man\'s obsession with a young girl.',
    rating: 8.1,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 54,
    name: 'The Road',
    author: 'Cormac McCarthy',
    page: 287,
    description:
      'A novel about a father and son\'s journey through a post-apocalyptic world.',
    rating: 8.7,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 55,
    name: 'Life of Pi',
    author: 'Yann Martel',
    page: 319,
    description:
      'A novel about a young boy who survives a shipwreck and shares a lifeboat with a Bengal tiger.',
    rating: 8.5,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 56,
    name: 'Atonement',
    author: 'Ian McEwan',
    page: 351,
    description:
      'A novel about a young girl\'s mistake and its far-reaching consequences.',
    rating: 8.4,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 57,
    name: 'The Kite Runner',
    author: 'Khaled Hosseini',
    page: 372,
    description:
      'A novel about a young boy in Afghanistan and his complex relationship with his friend.',
    rating: 9.0,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 58,
    name: 'The Book Thief',
    author: 'Markus Zusak',
    page: 552,
    description:
      'A novel about a young girl in Nazi Germany who steals books and shares them with others.',
    rating: 9.2,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 59,
    name: 'The Alchemist',
    author: 'Paulo Coelho',
    page: 208,
    description:
      'A novel about a young shepherd\'s journey to find his personal legend.',
    rating: 8.6,
    uploadDate: '22 Jan 2021',
  },
  {
    id: 60,
    name: 'The Help',
    author: 'Kathryn Stockett',
    page: 464,
    description:
      'A novel about the relationships between African American maids and their white employers in the 1960s South.',
    rating: 8.9,
    uploadDate: '22 Jan 2021',
  },
];

export default books;
