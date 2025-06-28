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
];

export default characters;