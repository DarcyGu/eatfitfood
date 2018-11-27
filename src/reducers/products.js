// import {ajax} from "asmex-os-packs"
// const getData = ()=>{
//   ajax.post({url: "https://homoeff.asmex.io/module/eff_api/products_day",
//              data: {day:"2018-09-28"}
// }).then((response)=>{
//   console.log(response);
// }).catch((err)=>{
//   console.error(err);
// });
// }
// getData();
const getData = async ()=>{
  try{                                 
    const response = await fetch("https://homoeff.asmex.io/module/eff_api/products_day",{
      method:"POST",
      headers:{"Content-type": "application/x-www-form-urlencoded"},
      body:"day=2018-12-01"
    }); 
    if(response.ok){
      const jsonResponse = await response.json();
      return jsonResponse;
    }
   throw new Error("Request failed!");
  }catch(error){
    console.log(error);
  };
}
getData().then(jsonResponse=>console.log(jsonResponse));
const initialState = [
  //////////////////////////////////////       CUPCAKE              //////////////////////
  {
    id_product: "111",
    description: "Selfie Box",
    family: "Cupcake",
    image_path: "https://sparkle.asmex.io/uploads/customtypesitems/201811192011191.jpg",
    thumb_path: "https://sparkle.asmex.io/uploads/customtypesitems/201811192011191_thumb.jpg",
    ingredients: "Black rice, lite coconut milk, vanilla bean, pineapple, papaya, coconut cream, coconut flakes, maple syrup, salt",
    sizes: [
      {
        size: "Classic Range",
        price: 89
      },
      {
        size: "Vegan Range",
        price: 89
      }
    ],
    diets: [],
    custom: [
      "Ribbon",
      "Card",
      "Selfies"
    ]
  },
  {
    id_product: "112",
    description: "Sparkle Love",
    family: "Cupcake",
    image_path: "https://sparkle.asmex.io/uploads/customtypesitems/201811192013061.jpg",
    thumb_path: "https://sparkle.asmex.io/uploads/customtypesitems/201811192013061_thumb.jpg",
    ingredients: "Black rice, lite coconut milk, vanilla bean, pineapple, papaya, coconut cream, coconut flakes, maple syrup, salt",
    sizes: [
      {
        size: "Classic Range",
        price: 89
      },
      {
        size: "Vegan Range",
        price: 89
      }
    ],
    diets: [],
    custom: [
      "Card"
    ]
  },
  {
    id_product: "113",
    description: "Mix of Flavours",
    family: "Cupcake",
    image_path: "https://sparkle.asmex.io/uploads/customtypesitems/201811191737561.jpg",
    thumb_path: "https://sparkle.asmex.io/uploads/customtypesitems/201811191737561_thumb.jpg",
    ingredients: "Black rice, lite coconut milk, vanilla bean, pineapple, papaya, coconut cream, coconut flakes, maple syrup, salt",
    sizes: [
      {
        size: "Classic Range",
        price: 79
      },
      {
        size: "Vegan Range",
        price: 79
      }
    ],
    diets: [],
    custom: [
      "Ribbon",
      "Card"
    ]
  },

  ///////////////////////////////////       CUPCAKE     /////////////////////////////////////////

    {
        id_product: "606",
        description: "Coconut black rice breakfast pudding, papaya & pineapple",
        family: "Breakfast",
        image_path: "https://eatfit.asmex.io/uploads/products/606/606201808281113551.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/606/606201808281113551_thumb.jpg",
        ingredients: "Black rice, lite coconut milk, vanilla bean, pineapple, papaya, coconut cream, coconut flakes, maple syrup, salt",
        sizes: [
          {
            size: "Regular",
            price: 13.5,
            nutritional: {
              calories: 298,
              protein: 7.6, 
              fat: 10.2,
              sat: 8.6,
              carbs: 41.6,
              fibre: 4.8
            }
          },
          {
            size: "Large",
            price: 16.5,
            nutritional: {
              calories: 370,
              protein: 9.7,
              fat: 11.9,
              sat: 10,
              carbs: 53.4,
              fibre: 6.3
            }
          }
        ],
        diets: [
            "GF",
            "DF",
            "VGN"
        ]
      },
      {
        id_product: "613",
        description: "Breakfast burrito with scrambled eggs, beans & avocado",
        family: "Breakfast",
        image_path: "https://eatfit.asmex.io/uploads/products/613/613201808211147001.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/613/613201808211147001_thumb.jpg",
        ingredients: "Egg, rice milk, gluten free tortilla, avocado, basil, cashews, coriander, lemon, onion, olive oil, tomato, cumin, garlic, paprika, mixed beans, salt & pepper",
        sizes: [
          {
            size: "Regular",
            price: 13.5,
            nutritional: {
              calories: 340,
              protein: 18.4,
              fat: 22.4,
              sat: 10.2,
              carbs: 14,
              fibre: 4.9
            }
          },
          {
            size: "Large",
            price: 16.5,
            nutritional: {
              calories: 431,
              protein: 26,
              fat: 27.4,
              sat: 11.8,
              carbs: 17.2,
              fibre: 6.3
            }
          }
        ],
        diets: [
            "GF",
            "DF"
        ]
      },
      {
        id_product: "456",
        description: "Apple strudel loaf, 5 seed crumble & coconut yoghurt",
        family: "Breakfast",
        image_path: "https://eatfit.asmex.io/uploads/products/456/456201808211146571.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/456/456201808211146571_thumb.jpg",
        ingredients: "Green apple, banana, almond meal, spelt flour, almonds, coconut yoghurt, maple syrup, sunflower seeds, chia seeds, almond milk, cinnamon, nutmeg, baking powder, flaxseed, ginger, coconut oil",
        sizes: [
          {
            size: "Regular",
            price: 13.5,
            nutritional: {
              calories: 355,
              protein: 7.7,
              fat: 21.4,
              sat: 12.6,
              carbs: 30.4,
              fibre: 6.7
            }
          },
          {
            size: "Large",
            price: 16.5,
            nutritional: {
              size: "Large",
              calories: 458,
              protein: 10.1,
              fat: 26.8,
              sat: 15.2,
              carbs: 40.8,
              fibre: 9
            }
          }
        ],
        diets: [
          "GF",
          "DF",
          "VGN"
        ]
      },
      {
        id_product: "493",
        description: "Free range egg wrap with sweet potato, goats cheese & rocket",
        family: "Breakfast",
        image_path: "https://eatfit.asmex.io/uploads/products/493/493201808211147031.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/493/493201808211147031_thumb.jpg",
        ingredients: "Egg white, rice milk, rice flour, snow pea shoots, red radish, sweet potato, baby spinach, goats cheese, rocket, caraway, salt & pepper",
        sizes: [
          {
            size: "Regular",
            price: 13.5,
            nutritional: {
              size: "Regular",
              calories: 181,
              protein: 12.6,
              fat: 5.2,
              sat: 2.9,
              carbs: 20.2,
              fibre: 1.4
            }
          },
          {
            size: "Large",
            price: 16.5,
            nutritional: {
              size: "Large",
              calories: 241,
              protein: 16.7,
              fat: 6.9,
              sat: 3.8,
              carbs: 26.9,
              fibre: 1.9
            }
          }
        ],
        diets: [
          "GF"
        ]
      },
      {
        id_product: "465",
        description: "Cacao pops with vanilla cashew milk",
        family: "Breakfast",
        image_path: "https://eatfit.asmex.io/uploads/products/465/465201808211147041.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/465/465201808211147041_thumb.jpg",
        ingredients: "Cashew, coconut flakes, pepitas, sunflower seeds, millet, almond, dried cherries, cacao, maple syrup, vanilla, salt",
        sizes: [
          {
            size: "Regular",
            price: 13.5,
            nutritional: {
              size: "Regular",
              calories: 447,
              protein: 12.3,
              fat: 31.6,
              sat: 9.8,
              carbs: 25.5,
              fibre: 10.2
            }
          },
          {
            size: "Large",
            price: 16.5,
            nutritional: {
              size: "Large",
              calories: 560,
              protein: 15.6,
              fat: 39.6,
              sat: 12.6,
              carbs: 31.8,
              fibre: 11.7,
            }
          }
        ],
        diets: [
          "GF",
          "DF",
          "VGN"
        ]
      },
      {
        id_product: "601",
        description: "Shakshuka with turmeric scramble & soy linseed toast",
        family: "Breakfast",
        image_path: "https://eatfit.asmex.io/uploads/products/601/601201808281118471.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/601/601201808281118471_thumb.jpg",
        ingredients: "Capsicum, eggplant, tomato, onion, soy linseed bread, silken tofu, shallots, nutritional yeast, garlic, tomato paste, cumin, smoked paprika, cayenne, rice malt syrup, soy milk, olive oil, turmeric, salt & pepper",
        sizes: [
          {
            size: "Regular",
            price: 13.5,
            nutritional: {
              size: "Regular",
              calories: 343,
              protein: 15.9,
              fat: 12.6,
              sat: 1.8,
              carbs: 37.9,
              fibre: 7.4
            }
          },
          {
            size: "Large",
            price: 16.5,
            nutritional: {
              size: "Large",
              calories: 400,
              protein: 19.5,
              fat: 15.1,
              sat: 2,
              carbs: 42.2,
              fibre: 8.7
            }
          }
        ],
        diets: [
          "DF",
          "VGN"
        ]
      },
      {
        id_product: "702",
        description: "Beef bourguignon, kale & potato mash",
        family: "Lunch",
        image_path: "https://eatfit.asmex.io/uploads/products/702/702201808281131011.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/702/702201808281131011_thumb.jpg",
        ingredients: "Beef, carrot, celery, mushrooms, onion, garlic, red wine, potato, olive oil, almond milk, kale, tapioca starch, balsamic vinegar, porcini mushroom, rosemary, thyme, vegetable stock, bay leaves, pepper, salt",
        sizes: [
          {
            size: "Regular",
            price: 21.5,
            nutritional: {
              size: "Regular",
              calories: 341,
              protein: 32.8,
              fat: 8.6,
              sat: 1.8,
              carbs: 26.1,
              fibre: 6.5
            }
          },
          {
            size: "Large",
            price: 25.5,
            nutritional: {
              size: "Large",
              calories: 374,
              protein: 36.8,
              fat: 9.1,
              sat: 2,
              carbs: 28.5,
              fibre: 7.1
            }
          }
        ],
        diets: [
          "GF",
          "DF"
        ]
      },
      {
        id_product: "709",
        description: "Chicken pad thai with rice noodles, snake beans, broccoli & peanuts ",
        family: "Lunch",
        image_path: "https://eatfit.asmex.io/uploads/products/709/709201808281112481.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/709/709201808281112481_thumb.jpg",
        ingredients: "Chicken, rice noodles, broccoli, snake beans, bean sprouts, egg, shallot, peanuts, chilli, tamarind paste, mint, basil, coriander, tamari",
        sizes: [
          {
            size: "Regular",
            price: 21.5,
            nutritional: {
              size: "Regular",
              calories: 397.9,
              protein: 38.255,
              fat: 13.381,
              sat: 3.402,
              carbs: 28.841,
              fibre: 4.153
            }
          },
          {
            size: "Large",
            price: 25.5,
            nutritional: {
              size: "Large",
              calories: 434.9,
              protein: 42.735,
              fat: 14.521,
              sat: 3.742,
              carbs: 30.981,
              fibre: 4.203
            }
          }
        ],
        diets: [
          "GF",
          "DF"
        ]
      },
      {
        id_product: "505",
        description: "Chargrilled vegetable stack with a side salad",
        family: "Lunch",
        image_path: "https://eatfit.asmex.io/uploads/products/505/505201808281112311.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/505/505201808281112311_thumb.jpg",
        ingredients: "Pumpkin, sweet potato, eggplant, zucchini, mushroom, capsicum, tomato, Lebanese cucumbers, mixed leaves, sundried tomato, water, cashews, caraway seeds, tomato sauce, parsley, balsamic dressing, lemon, honey, olive oil, garlic, onion, salt & pepper",
        sizes: [
          {
            size: "Regular",
            price: 21.5,
            nutritional: {
              size: "Regular",
              calories: 329.9,
              protein: 10.514,
              fat: 14.872,
              sat: 2.695,
              carbs: 33.837,
              fibre: 9.914
            }
          },
          {
            size: "Large",
            price: 25.5,
            nutritional: {
              size: "Large",
              calories: 458,
              protein: 15.2,
              fat: 14.8,
              sat: 2.6,
              carbs: 56.5,
              fibre: 19.7
            }
          }
        ],
        diets: [
          "GF",
          "DF",
          "VGN"
        ]
      },
      {
        id_product: "686",
        description: "Tofu & vegetable ramen, quinoa noodles, shitake mushrooms",
        family: "Lunch",
        image_path: "https://eatfit.asmex.io/uploads/products/686/686201808281126101.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/686/686201808281126101_thumb.jpg",
        ingredients: "Tofu, quinoa noodles, Asian greens, shitake mushrooms, bean shoots, coriander, shallots, chilli oil, miso paste, tamari, mirin, vegetable stock, carrot, onion, garlic, sesame oil, rice malt syrup, sesame seeds, salt & pepper",
        sizes: [
          {
            size: "Regular",
            price: 21.5,
            nutritional: {
              size: "Regular",
              calories: 342,
              protein: 18.7,
              fat: 17.6,
              sat: 2.8,
              carbs: 22.6,
              fibre: 10.7
            }
          },
          {
            size: "Large",
            price: 25.5,
            nutritional: {
              size: "Large",
              calories: 431,
              protein: 23.9,
              fat: 22.3,
              sat: 3.6,
              carbs: 27.4,
              fibre: 13.7
            }
          }
        ],
        diets: [
          "GF",
          "DF",
          "VGN"
        ]
      },
      {
        id_product: "692",
        description: "Marrakesh tofu, cauliflower cous cous, pomegranate & pistachio ",
        family: "Lunch",
        image_path: "https://eatfit.asmex.io/uploads/products/692/692201808281116561.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/692/692201808281116561_thumb.jpg",
        ingredients: "Tofu, cauliflower, turmeric, pistachios, pomegranate, baby spinach, mint, parsley, zucchini, carrot, garlic, coriander, cumin, paprika, coconut yoghurt, lemon, green olive, cinnamon, olive oil, salt & white pepper",
        sizes: [
          {
            size: "Regular",
            price: 21.5,
            nutritional: {
              size: "Regular",
              calories: 364,
              protein: 23.1,
              fat: 29.1,
              sat: 10.9,
              carbs: 14,
              fibre: 15.9
            }
          },
          {
            size: "Large",
            price: 25.5,
            nutritional: {
              size: "Large",
              calories: 409,
              protein: 27,
              fat: 31.5,
              sat: 11.2,
              carbs: 14.9,
              fibre: 18.5
            }
          }
        ],
        diets: [
          "GF",
          "DF",
          "VGN"
        ]
      },
      {
        id_product: "680",
        description: "Moroccan eggplant, kidney bean & green millet bowl",
        family: "Lunch",
        image_path: "https://eatfit.asmex.io/uploads/products/680/680201808211146591.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/680/680201808211146591_thumb.jpg",
        ingredients: "Red kidney beans, millet, broccoli, beans, coriander, kale, mint, onions, garlic, tomatoes, vegetable stock, tomato paste, brown raisins, biodynamic yogurt, lemon, almonds, ginger, aubergine, cinnamon, cumin, paprika, olive oil, saffron, pomegranate, salt & pepper",
        sizes: [
          {
            size: "Regular",
            price: 21.5,
            nutritional: {
              size: "Regular",
              calories: 310,
              protein: 14,
              fat: 8.8,
              sat: 2.1,
              carbs: 37,
              fibre: 14
            }
          },
          {
            size: "Large",
            price: 25.5,
            nutritional: {
              size: "Large",
              calories: 364,
              protein: 16.3,
              fat: 10,
              sat: 2.3,
              carbs: 44.6,
              fibre: 16.8
            }
          }
        ],
        diets: [
          "GF",
          "DF",
          "VGN"
        ]
      },
      {
        id_product: "687",
        description: "Macadamia & lemon crusted fish with watercress, coconut mash & rocket ",
        family: "Dinner",
        image_path: "https://eatfit.asmex.io/uploads/products/687/687201808281115371.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/687/687201808281115371_thumb.jpg",
        ingredients: "Barramundi, potato, coconut milk, watercress, macadamia nuts, puffed rice, lemon, rocket, salt & pepper",
        sizes: [
          {
            size: "Regular",
            price: 21.5,
            nutritional: {
              size: "Regular",
              calories: 341,
              protein: 34.5,
              fat: 14.6,
              sat: 3.1,
              carbs: 15.7,
              fibre: 3.5
            }
          },
          {
            size: "Large",
            price: 25.5,
            nutritional: {
              size: "Large",
              calories: 370,
              protein: 40.9,
              fat: 15,
              sat: 3.2,
              carbs: 15.7,
              fibre: 3.5
            }
          }
        ],
        diets: [
          "GF",
          "DF"
        ]
      },
      {
        id_product: "689",
        description: "Spaghetti pomodoro with vegan \"tuna\"",
        family: "Dinner",
        image_path: "https://eatfit.asmex.io/uploads/products/689/689201808211146571.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/689/689201808211146571_thumb.jpg",
        ingredients: "Sunflower seeds, shallot, baby capers, lemon juice, olive oil, apple cider vinegar, nori sheets, salt, pepper, quinoa spaghetti, silver beet, capers, parsley",
        sizes: [
          {
            size: "Regular",
            price: 21.5,
            nutritional: {
              size: "Regular",
              calories: 444,
              protein: 13.6,
              fat: 18,
              sat: 2,
              carbs: 54.5,
              fibre: 7.5
            }
          },
          {
            size: "Large",
            price: 25.5,
            nutritional: {
              size: "Large",
              calories: 575,
              protein: 17.4,
              fat: 23.9,
              sat: 2.6,
              carbs: 72.1,
              fibre: 9.5
            }
          }
        ],
        diets: [
          "GF",
          "DF",
          "VGN"
        ]
      },
      {
        id_product: "693",
        description: "Lamb shepards pie with silverbeet & green beans ",
        family: "Dinner",
        image_path: "https://eatfit.asmex.io/uploads/products/693/693201808211147011.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/693/693201808211147011_thumb.jpg",
        ingredients: "Lamb, potato, sweet potato, silverbeet, peas, garlic, onion, carrot, tomato, beef stock, mixed herbs, olive oil, parsley, salt & pepper",
        sizes: [
          {
            size: "Regular",
            price: 21.5,
            nutritional: {
              size: "Regular",
              calories: 305,
              protein: 29.3,
              fat: 10,
              sat: 3.8,
              carbs: 20.7,
              fibre: 7.1
            }
          },
          {
            size: "Large",
            price: 25.5,
            nutritional: {
              size: "Large",
              calories: 350,
              protein: 33.7,
              fat: 11.5,
              sat: 4.4,
              carbs: 23.8,
              fibre: 8.2
            }
          }
        ],
        diets: [
          "GF",
          "DF"
        ]
      },
      {
        id_product: "694",
        description: "Fish pie with silverbeet & peas",
        family: "Dinner",
        image_path: "https://eatfit.asmex.io/uploads/products/694/694201808281114091.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/694/694201808281114091_thumb.jpg",
        ingredients: "Barramundi, carrot, celery, leek, tomato, potato, spinach, silverbeet, peas, sweet potato, gluten free flour, almond milk, cheese, parsley, olive oil, salt & pepper",
        sizes: [
          {
            size: "Regular",
            price: 21.5,
            nutritional: {
              "id_nutritional": "431",
              size: "Regular",
              calories: 372,
              protein: 40.7,
              fat: 11.2,
              sat: 2.7,
              carbs: 22.4,
              fibre: 8.2
            }
          },
          {
            size: "Large",
            price: 25.5,
            nutritional: {
              size: "Large",
              calories: 441,
              protein: 48.3,
              fat: 13.3,
              sat: 3.2,
              carbs: 26.5,
              fibre: 9.7
            }
          }
        ],
        diets: [
          "GF"
        ]
      },
      {
        id_product: "683",
        description: "Pumpkin panang curry with brown rice",
        family: "Dinner",
        image_path: "https://eatfit.asmex.io/uploads/products/683/683201808281118191.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/683/683201808281118191_thumb.jpg",
        ingredients: "Pumpkin, brown rice, snow peas, broccoli, pineapple, corn flour, desiccated coconut, lite coconut milk, kafir lime leaf, coriander, garlic, ginger, panang curry paste, olive oil, onion",
        sizes: [
          {
            size: "Regular",
            price: 21.5,
            nutritional: {
              size: "Regular",
              calories: 428,
              protein: 12,
              fat: 13.3,
              sat: 6.8,
              carbs: 60,
              fibre: 9.5
            }
          },
          {
            size: "Large",
            price: 25.5,
            nutritional: {
              size: "Large",
              calories: 371,
              protein: 37.7,
              fat: 5.4,
              sat: 1.2,
              carbs: 36.8,
              fibre: 11.9
            }
          }
        ],
        diets: [
          "GF",
          "DF",
          "VGN"
        ]
      },
      {
        id_product: "699",
        description: "Mexican prawn adobo with mixed bean salad & gua-kale-mole",
        family: "Dinner",
        image_path: "https://eatfit.asmex.io/uploads/products/699/699201808281117371.jpg",
        thumb_path: "https://eatfit.asmex.io/uploads/products/699/699201808281117371_thumb.jpg",
        ingredients: "Prawns, onion, red capsicum, garlic, green beans, tomato, chilli, shallots, kale, tofu, avocado, lime, pepper, jalapeno, chickpeas, black kidney beans, red onion, coriander, lemon juice, adobo sauce",
        sizes: [
          {
            size: "Regular",
            price: 21.5,
            nutritional: {
              size: "Regular",
              calories: 335,
              protein: 36.5,
              fat: 10.1,
              sat: 2,
              carbs: 19,
              fibre: 10.7
            }
          },
          {
            size: "Large",
            price: 25.5,
            nutritional: {
              size: "Large",
              calories: 490,
              protein: 48,
              fat: 18.4,
              sat: 3.8,
              carbs: 25.1,
              fibre: 15.1
            }
          }
        ],
        diets: [
          "GF",
          "DF"
        ]
      }
]

const products = (state = initialState, action) => {
    return state;
}

export default products;