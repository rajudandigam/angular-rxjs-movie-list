export interface Movie {
  id: number;
  name: string;  
  genre: string;
  image: string;
  relaseYear: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    name: 'Baahubali',
    genre: 'Epic Action',
    image: 'https://picsum.photos/id/866/200/200',
    relaseYear: '2015'
  },
  {
    id: 2,
    name: 'Baahubali 2',
    genre: 'Epic Action',
    image: 'https://picsum.photos/id/867/200/200',
    relaseYear: '2017'
  },
  {
    id: 3,
    name: 'Rangasthalam',
    genre: 'Period Drama',
    image: 'https://picsum.photos/id/868/200/200',
    relaseYear: '2018'
  },
  {
    id: 4,
    name: 'Pokiri',
    genre: 'Action Drama',
    image: 'https://picsum.photos/id/869/200/200',
    relaseYear: '2010'
  },
  {
    id: 5,
    name: 'Srimanthudu',
    genre: 'Social Family Drama',
    image: 'https://picsum.photos/id/865/200/200',
    relaseYear: '2016'
  },
  {
    id: 6,
    name: 'Eega',
    genre: 'Action Drama',
    image: 'https://picsum.photos/id/864/200/200',
    relaseYear: '2013'
  },
  {
    id: 7,
    name: 'Magadheera',
    genre: 'Epic Action',
    image: 'https://picsum.photos/id/863/200/200',
    relaseYear: '2009'
  },
  {
    id: 8,
    name: 'Mahanati',
    genre: 'biopic',
    image: 'https://picsum.photos/id/862/200/200',
    relaseYear: '2019'
  },
  {
    id: 9,
    name: 'Arjun Reddy',
    genre: 'Romantic Love',
    image: 'https://picsum.photos/id/861/200/200',
    relaseYear: '2016'
  }
]