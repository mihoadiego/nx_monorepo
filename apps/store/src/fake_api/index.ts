import { GameProps, id } from '@nxegghead/store/utils-formatters';

const games: GameProps[] = [
  {
    id: 'pizza_party',
    name: 'Pizza party',
    image:
      'https://www.publicdomainpictures.net/pictures/450000/velka/woman-in-red-hat.jpg',
    description:
      'a dedicated game occuring at Piz Tower, with tomato and cheddar cheese of course!',
    price: null,
    mention: 'for youngs and olders',
  },
  {
    id: 'spanish_run',
    name: 'Spanish Run',
    image:
      'https://www.publicdomainpictures.net/pictures/240000/velka/cow-1513926637hE2.jpg',
    description:
      'A spanish poor guy trying to understand the unfair world of Developers ',
    mention: 'hardcore content, 18 years old and more',
    rating: Math.floor(Math.random() * 11),
  },
  {
    id: 'annecy_getaway',
    name: 'Annecy getaway',
    mention: '12 years old and +',
    // image: 'https://www.publicdomainpictures.net/pictures/150000/velka/colorful-test-tubes-14548653516ym.jpg',
    image: '/assets/larson.jpg',
    description:
      'A true GTA VICE CITY in the middle of the fortunate Annecians Assholes!',
    rating: Math.floor(Math.random() * 11),
    price: 150,
  },
];

export const getAllGames = (): GameProps[] => games;
export const getGame = (id: id): GameProps | undefined =>
  games.find((game) => game.id === id);
