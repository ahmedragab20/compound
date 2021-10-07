// The images
const c1 = require("@/assets/c1.jpg");
const c2 = require("@/assets/c2.jpg");
const c3 = require("@/assets/c3.jpg");
const c4 = require("@/assets/c4.jpg");

// State
export const state = () => ({
  favourite: [],
  cards: [
    {
      id: 10,
      img: c1,
      title: "consectetur adipisicing",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi cupiditate modi nostrum accusamus ratione iure eos."
    },
    {
      id: 11,
      img: c2,
      title: "dolorit amet",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi cupiditate modi nostrum accusamus ratione iure eos."
    },
    {
      id: 12,
      img: c3,
      title: "accusamus ratione",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi cupiditate modi nostrum accusamus ratione iure eos."
    },
    {
      id: 13,
      img: c4,
      title: "accusamus ratione",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi cupiditate modi nostrum accusamus ratione iure eos."
    }
  ]
});

// Gettrs

export const getters = {
  getCardsById: state => id => {
    return state.cards.find(i => i.id == id);
  }
};

export const mutations = {
  addToFavourite(state, id) {
    let item = state.cards.find(i => i.id == id);

    state.favourite.push(item);
  },
  removeitem(state, id) {
    // state.cart = state.cart.filter((i) => i.id !== item.id);

    let item = state.favourite.find(i => i.id == id);

    state.favourite = state.favourite.filter(i => i.id !== item.id);
  }
};
