const foodData = [
  {
    id: 1,
    title: "Margherita Pizza",
    type: "dishes",
    image:
      "https://images.ctfassets.net/nw5k25xfqsik/64VwvKFqxMWQORE10Tn8pY/200c0538099dc4d1cf62fd07ce59c2af/20220211142754-margherita-9920.jpg",
    price: 200,
    rating: 4.5,
    isVeg: true,
  },
  {
    id: 2,
    title: "Pepperoni Pizza",
    type: "dishes",
    image:
      "https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg",
    price: 300,
    rating: 4.7,
    isVeg: false,
  },
  {
    id: 3,
    title: "Cheeseburger",
    type: "dishes",
    image:
      "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
    price: 10.49,
    rating: 80,
    isVeg: false,
  },
  {
    id: 4,
    title: "Caesar Salad",
    type: "dishes",
    image:
      "https://www.allrecipes.com/thmb/JTW0AIVY5PFxqLrf_-CDzT4OZQY=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
    price: 150,
    rating: 4.3,
    isVeg: false,
  },
  {
    id: 5,
    title: "Spaghetti Carbonara",
    type: "dishes",
    image:
      "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
    price: 12.49,
    rating: 4.8,
    isVeg: false,
  },
  {
    id: 6,
    title: "Chicken Alfredo",
    type: "dishes",
    image:
      "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg",
    price: 200,
    rating: 4.7,
    isVeg: false,
  },
  {
    id: 7,
    title: "Vegetable Stir Fry",
    type: "dishes",
    image:
      "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg",
    price: 50,
    rating: 4.4,
    isVeg: true,
  },

  // Beverages
  {
    id: 8,
    title: "Coca-Cola",
    type: "beverages",
    image:
      "https://api.freelogodesign.org/assets/blog/thumb/f4dae7732213491da3952f853c48f6dc_1176x840.jpg?t=638368678710000000",
    price: 20,
    rating: 4.2,
    isVeg: true,
  },
  {
    id: 9,
    title: "Orange Juice",
    type: "beverages",
    image:
      "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/07/24225309/3.jpg",
    price: 60,
    rating: 4.4,
    isVeg: true,
  },
  {
    id: 10,
    title: "Coffee",
    type: "beverages",
    image:
      "https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee-500x375.png",
    price: 10,
    rating: 4.5,
    isVeg: true,
  },
  {
    id: 11,
    title: "Iced Tea",
    type: "beverages",
    image:
      "https://natashaskitchen.com/wp-content/uploads/2021/07/Iced-Tea-3-1-728x1092.jpg",
    price: 30,
    rating: 4.1,
    isVeg: true,
  },
  {
    id: 12,
    title: "Lemonade",
    type: "beverages",
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2022/06/lemonade.jpg",
    price: 20,
    rating: 4.3,
    isVeg: true,
  },
  {
    id: 13,
    title: "Boost",
    type: "beverages",
    image:
      "https://i.pinimg.com/736x/9e/6f/9c/9e6f9cd2ea08cf1001e31b5c6dc0a906.jpg",
    price: 20,
    rating: 4.6,
    isVeg: true,
  },
  {
    id: 14,
    title: "Horlicks",
    type: "beverages",
    image: "https://i.ytimg.com/vi/cW89ahSIPmg/maxresdefault.jpg",
    price: 20,
    rating: 4.7,
    isVeg: true,
  },

  // Snacks
  {
    id: 15,
    title: "Chips",
    type: "snacks",
    image:
      "https://www.allrecipes.com/thmb/WyCC-RL8cuAEKfYHsdnzqi64iTc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/73135-homestyle-potato-chips-ddmfs-0348-3x4-hero-c21021303c8849bbb40c1007bfa9af6e.jpg",
    price: 20,
    rating: 4.0,
    isVeg: true,
  },
  {
    id: 16,
    title: "Pazhampori",
    type: "snacks",
    image:
      "https://img.onmanorama.com/content/dam/mm/en/food/features/2022/05/11/images/2022/5/14/pazhampori.jpg",
    price: 1.99,
    rating: 4.6,
    isVeg: true,
  },
  {
    id: 17,
    title: "Egg Puffs",
    type: "snacks",
    image:
      "https://butfirstchai.com/wp-content/uploads/2022/05/kerala-egg-puffs-recipe.jpg",
    price: 20,
    rating: 4.7,
    isVeg: true,
  },
  // Desserts
  {
    id: 18,
    title: "Choco Bar",
    type: "desserts",
    image:
      "https://ik.imagekit.io/dunzo/3aa202d83cce11ee84c70e14ba7d7896_VARIANT_64dcb5d54350a900260e7620_5.JPG",
    price: 20,
    rating: 4.6,
    isVeg: true,
  },
  {
    id: 19,
    title: "Mango Bar",
    type: "desserts",
    image:
      "https://www.bluemockups.com/wp-content/uploads/2022/08/00533-IceCreamBarMockup-MangoDolly.jpg",
    price: 30,
    rating: 4.5,
    isVeg: true,
  },
  {
    id: 20,
    title: "Cornetto",
    type: "desserts",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2022/5/PQ/EE/GG/119658001/product-jpeg.jpg",
    price: 40,
    rating: 4.7,
    isVeg: true,
  },
  {
    id: 21,
    title: "Cup IceCream",
    type: "desserts",
    image:
      "https://ik.imagekit.io/dunzo/tr:w-$w$,h-$h$,cm-pad_resize/1644944770999_product_5c868ab2341ae429d82fba71_1.jpg",
    price: 10,
    rating: 4.6,
    isVeg: true,
  },
];

export default foodData;
