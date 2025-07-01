import anemoElement from '../assets/element-anemo.png'
import pyroElement from '../assets/element-pyro.png'
import sucrosePortrait from '../assets/sucrose.png'
import dilucPortrait from '../assets/diluc.png'

const characters = [
  {
    id: 1,
    name: "Sucrose",
    element: "Anemo",
    rarity: 4,
    image: sucrosePortrait,
    elementIcon: anemoElement,
    weapon: "Catalyst",
  },
  {
    id: 2,
    name: "Diluc",
    element: "Pyro",
    rarity: 5,
    image: dilucPortrait,
    elementIcon: pyroElement,
    weapon: "Claymore",
  },
  {
    id: 3,
    name: "Barbara",
    element: "Hydro",
    rarity: 4,
    image: dilucPortrait,
    elementIcon: pyroElement,
    weapon: "Catalyst",
  },
  {
    id: 4,
    name: "Kaeya",
    element: "Cryo",
    rarity: 4,
    image: dilucPortrait,
    elementIcon: pyroElement,
    weapon: "Sword",
  },
  {
    id: 5,
    name: "Diona",
    element: "Cryo",
    rarity: 4,
    image: dilucPortrait,
    elementIcon: pyroElement,
    weapon: "Bow",
  },
  {
    id: 6,
    name: "Jean",
    element: "Anemo",
    rarity: 5,
    image: dilucPortrait,
    elementIcon: anemoElement,
    weapon: "Sword",
  },
];

export default characters;