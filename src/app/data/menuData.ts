export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVeg: boolean;
  isTopSeller?: boolean;
  isRecommended?: boolean;
};

export const menuItems: MenuItem[] = [
  // Vegetarian Items
  {
    id: "veg-1",
    name: "Paneer Butter Masala",
    description: "Cottage cheese cubes in rich, creamy tomato gravy with butter",
    price: 280,
    category: "Veg",
    image: "https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzY2NDk2NDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true,
    isRecommended: true,
    isTopSeller: true
  },
  {
    id: "veg-2",
    name: "Palak Paneer",
    description: "Cottage cheese in spinach gravy with aromatic spices",
    price: 260,
    category: "Veg",
    image: "https://images.unsplash.com/photo-1671507136750-05ebd0f97843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwY3Vycnl8ZW58MXx8fHwxNzY2NTI5MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true,
    isRecommended: true
  },
  {
    id: "veg-3",
    name: "Dal Makhani",
    description: "Slow-cooked black lentils with butter and cream",
    price: 220,
    category: "Veg",
    image: "https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzY2NDk2NDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true,
    isTopSeller: true
  },
  {
    id: "veg-4",
    name: "Malai Kofta",
    description: "Cottage cheese and potato dumplings in creamy gravy",
    price: 290,
    category: "Veg",
    image: "https://images.unsplash.com/photo-1671507136750-05ebd0f97843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwY3Vycnl8ZW58MXx8fHwxNzY2NTI5MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "veg-5",
    name: "Kadai Paneer",
    description: "Cottage cheese with bell peppers in spicy tomato gravy",
    price: 270,
    category: "Veg",
    image: "https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzY2NDk2NDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true,
    isRecommended: true
  },
  {
    id: "veg-6",
    name: "Mushroom Masala",
    description: "Fresh mushrooms in spicy onion-tomato curry",
    price: 250,
    category: "Veg",
    image: "https://images.unsplash.com/photo-1671507136750-05ebd0f97843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwY3Vycnl8ZW58MXx8fHwxNzY2NTI5MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "veg-7",
    name: "Chana Masala",
    description: "Chickpeas in tangy tomato-onion gravy",
    price: 200,
    category: "Veg",
    image: "https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzY2NDk2NDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "veg-8",
    name: "Mix Veg Curry",
    description: "Assorted vegetables in aromatic curry sauce",
    price: 210,
    category: "Veg",
    image: "https://images.unsplash.com/photo-1671507136750-05ebd0f97843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwY3Vycnl8ZW58MXx8fHwxNzY2NTI5MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "veg-9",
    name: "Aloo Gobi",
    description: "Potato and cauliflower with Indian spices",
    price: 180,
    category: "Veg",
    image: "https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzY2NDk2NDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "veg-10",
    name: "Bhindi Masala",
    description: "Crispy okra with onions and spices",
    price: 190,
    category: "Veg",
    image: "https://images.unsplash.com/photo-1671507136750-05ebd0f97843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwY3Vycnl8ZW58MXx8fHwxNzY2NTI5MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "veg-11",
    name: "Shahi Paneer",
    description: "Royal cottage cheese in cashew-cream gravy",
    price: 300,
    category: "Veg",
    image: "https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzY2NDk2NDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "veg-12",
    name: "Veg Kolhapuri",
    description: "Spicy mixed vegetables in Maharashtrian style",
    price: 240,
    category: "Veg",
    image: "https://images.unsplash.com/photo-1671507136750-05ebd0f97843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwY3Vycnl8ZW58MXx8fHwxNzY2NTI5MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "veg-13",
    name: "Baingan Bharta",
    description: "Smoked eggplant mash with spices",
    price: 210,
    category: "Veg",
    image: "https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzY2NDk2NDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "veg-14",
    name: "Rajma Masala",
    description: "Red kidney beans in thick gravy",
    price: 200,
    category: "Veg",
    image: "https://images.unsplash.com/photo-1671507136750-05ebd0f97843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwY3Vycnl8ZW58MXx8fHwxNzY2NTI5MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "veg-15",
    name: "Paneer Tikka Masala",
    description: "Grilled cottage cheese in tangy tomato sauce",
    price: 310,
    category: "Veg",
    image: "https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzY2NDk2NDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },

  // Non-Vegetarian Items
  {
    id: "nonveg-1",
    name: "Butter Chicken",
    description: "Tender chicken in creamy tomato butter sauce",
    price: 350,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjY1NDY4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false,
    isRecommended: true,
    isTopSeller: true
  },
  {
    id: "nonveg-2",
    name: "Chicken Tikka Masala",
    description: "Grilled chicken chunks in spiced tomato gravy",
    price: 340,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjY1NDY4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false,
    isTopSeller: true
  },
  {
    id: "nonveg-3",
    name: "Kadai Chicken",
    description: "Chicken with bell peppers in spicy kadai gravy",
    price: 330,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjY1NDY4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "nonveg-4",
    name: "Chicken Curry",
    description: "Classic home-style chicken curry",
    price: 310,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjY1NDY4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "nonveg-5",
    name: "Chicken Korma",
    description: "Chicken in rich cashew cream sauce",
    price: 360,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjY1NDY4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "nonveg-6",
    name: "Mutton Rogan Josh",
    description: "Tender mutton in aromatic Kashmiri gravy",
    price: 420,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjY1NDY4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false,
    isRecommended: true
  },
  {
    id: "nonveg-7",
    name: "Mutton Curry",
    description: "Slow-cooked mutton in traditional spiced gravy",
    price: 400,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjY1NDY4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "nonveg-8",
    name: "Fish Curry",
    description: "Fresh fish in tangy coconut curry",
    price: 380,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjY1NDY4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "nonveg-9",
    name: "Prawn Masala",
    description: "Juicy prawns in spicy masala gravy",
    price: 450,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjY1NDY4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "nonveg-10",
    name: "Chicken 65",
    description: "Spicy fried chicken with curry leaves",
    price: 320,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjY1NDY4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "nonveg-11",
    name: "Egg Curry",
    description: "Boiled eggs in spicy onion-tomato gravy",
    price: 180,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjY1NDY4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "nonveg-12",
    name: "Chicken Vindaloo",
    description: "Hot and spicy Goan chicken curry",
    price: 340,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjY1NDY4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "nonveg-13",
    name: "Tandoori Chicken",
    description: "Clay oven grilled chicken with spices",
    price: 380,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjY1NDY4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false,
    isRecommended: true
  },
  {
    id: "nonveg-14",
    name: "Mutton Keema",
    description: "Minced mutton with peas and spices",
    price: 390,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjY1NDY4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "nonveg-15",
    name: "Chicken Kolhapuri",
    description: "Spicy chicken in Maharashtrian style",
    price: 340,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NjY1NDY4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },

  // Rice & Biryani
  {
    id: "rice-1",
    name: "Chicken Biryani",
    description: "Fragrant basmati rice with tender chicken pieces",
    price: 320,
    category: "Rice & Biryani",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjY0NzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false,
    isTopSeller: true,
    isRecommended: true
  },
  {
    id: "rice-2",
    name: "Mutton Biryani",
    description: "Rich biryani with succulent mutton pieces",
    price: 380,
    category: "Rice & Biryani",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjY0NzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false,
    isRecommended: true
  },
  {
    id: "rice-3",
    name: "Veg Biryani",
    description: "Aromatic rice with mixed vegetables",
    price: 240,
    category: "Rice & Biryani",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjY0NzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true,
    isTopSeller: true
  },
  {
    id: "rice-4",
    name: "Egg Biryani",
    description: "Flavorful biryani with boiled eggs",
    price: 200,
    category: "Rice & Biryani",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjY0NzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "rice-5",
    name: "Prawn Biryani",
    description: "Coastal style biryani with juicy prawns",
    price: 420,
    category: "Rice & Biryani",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjY0NzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "rice-6",
    name: "Jeera Rice",
    description: "Cumin flavored basmati rice",
    price: 120,
    category: "Rice & Biryani",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjY0NzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "rice-7",
    name: "Pulao",
    description: "Mildly spiced rice with vegetables",
    price: 160,
    category: "Rice & Biryani",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjY0NzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "rice-8",
    name: "Kashmiri Pulao",
    description: "Sweet & savory rice with dry fruits",
    price: 220,
    category: "Rice & Biryani",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjY0NzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "rice-9",
    name: "Chicken Fried Rice",
    description: "Indo-Chinese style fried rice",
    price: 200,
    category: "Rice & Biryani",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjY0NzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "rice-10",
    name: "Veg Fried Rice",
    description: "Mixed vegetables in fried rice",
    price: 160,
    category: "Rice & Biryani",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjY0NzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "rice-11",
    name: "Plain Rice",
    description: "Steamed basmati rice",
    price: 80,
    category: "Rice & Biryani",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjY0NzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "rice-12",
    name: "Curd Rice",
    description: "Cool rice mixed with yogurt",
    price: 100,
    category: "Rice & Biryani",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjY0NzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "rice-13",
    name: "Lemon Rice",
    description: "Tangy rice with lemon and spices",
    price: 130,
    category: "Rice & Biryani",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjY0NzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "rice-14",
    name: "Paneer Biryani",
    description: "Biryani with cottage cheese cubes",
    price: 280,
    category: "Rice & Biryani",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjY0NzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "rice-15",
    name: "Hyderabadi Biryani",
    description: "Authentic Hyderabadi dum biryani",
    price: 360,
    category: "Rice & Biryani",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjY0NzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },

  // Snacks & Starters
  {
    id: "snack-1",
    name: "Samosa",
    description: "Crispy pastry with spiced potato filling",
    price: 40,
    category: "Snacks & Starters",
    image: "https://images.unsplash.com/photo-1589301773859-bb024d3ad558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1vc2ElMjBzbmFja3xlbnwxfHx8fDE3NjY0MzEzODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true,
    isTopSeller: true
  },
  {
    id: "snack-2",
    name: "Paneer Pakora",
    description: "Cottage cheese fritters with spices",
    price: 180,
    category: "Snacks & Starters",
    image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtvcmElMjBmcml0dGVyc3xlbnwxfHx8fDE3NjY0NjY2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "snack-3",
    name: "Veg Pakora",
    description: "Mixed vegetable fritters",
    price: 140,
    category: "Snacks & Starters",
    image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtvcmElMjBmcml0dGVyc3xlbnwxfHx8fDE3NjY0NjY2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "snack-4",
    name: "Chicken Kebab",
    description: "Grilled chicken on skewers",
    price: 250,
    category: "Snacks & Starters",
    image: "https://images.unsplash.com/photo-1626323109252-0adb3b46692b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZWJhYiUyMHNrZXdlcnN8ZW58MXx8fHwxNzY2NTAzNDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false,
    isRecommended: true
  },
  {
    id: "snack-5",
    name: "Seekh Kebab",
    description: "Minced meat kebabs with spices",
    price: 280,
    category: "Snacks & Starters",
    image: "https://images.unsplash.com/photo-1626323109252-0adb3b46692b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZWJhYiUyMHNrZXdlcnN8ZW58MXx8fHwxNzY2NTAzNDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "snack-6",
    name: "Paneer Tikka",
    description: "Grilled cottage cheese with bell peppers",
    price: 240,
    category: "Snacks & Starters",
    image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtvcmElMjBmcml0dGVyc3xlbnwxfHx8fDE3NjY0NjY2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true,
    isRecommended: true
  },
  {
    id: "snack-7",
    name: "Aloo Tikki",
    description: "Potato patties with spices",
    price: 60,
    category: "Snacks & Starters",
    image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtvcmElMjBmcml0dGVyc3xlbnwxfHx8fDE3NjY0NjY2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "snack-8",
    name: "Hara Bhara Kebab",
    description: "Spinach and peas patties",
    price: 160,
    category: "Snacks & Starters",
    image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtvcmElMjBmcml0dGVyc3xlbnwxfHx8fDE3NjY0NjY2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "snack-9",
    name: "Chicken Wings",
    description: "Spicy fried chicken wings",
    price: 220,
    category: "Snacks & Starters",
    image: "https://images.unsplash.com/photo-1626323109252-0adb3b46692b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZWJhYiUyMHNrZXdlcnN8ZW58MXx8fHwxNzY2NTAzNDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "snack-10",
    name: "Spring Roll",
    description: "Crispy rolls with vegetable filling",
    price: 120,
    category: "Snacks & Starters",
    image: "https://images.unsplash.com/photo-1589301773859-bb024d3ad558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1vc2ElMjBzbmFja3xlbnwxfHx8fDE3NjY0MzEzODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "snack-11",
    name: "Onion Bhaji",
    description: "Crispy onion fritters",
    price: 100,
    category: "Snacks & Starters",
    image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtvcmElMjBmcml0dGVyc3xlbnwxfHx8fDE3NjY0NjY2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "snack-12",
    name: "Fish Finger",
    description: "Crispy fried fish strips",
    price: 260,
    category: "Snacks & Starters",
    image: "https://images.unsplash.com/photo-1626323109252-0adb3b46692b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZWJhYiUyMHNrZXdlcnN8ZW58MXx8fHwxNzY2NTAzNDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "snack-13",
    name: "Veg Cutlet",
    description: "Mixed vegetable patties",
    price: 90,
    category: "Snacks & Starters",
    image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtvcmElMjBmcml0dGVyc3xlbnwxfHx8fDE3NjY0NjY2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "snack-14",
    name: "Chilli Chicken",
    description: "Indo-Chinese spicy chicken",
    price: 240,
    category: "Snacks & Starters",
    image: "https://images.unsplash.com/photo-1626323109252-0adb3b46692b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZWJhYiUyMHNrZXdlcnN8ZW58MXx8fHwxNzY2NTAzNDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: false
  },
  {
    id: "snack-15",
    name: "Paneer Chilli",
    description: "Cottage cheese in spicy sauce",
    price: 220,
    category: "Snacks & Starters",
    image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtvcmElMjBmcml0dGVyc3xlbnwxfHx8fDE3NjY0NjY2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },

  // Desserts
  {
    id: "dessert-1",
    name: "Gulab Jamun",
    description: "Milk solid balls in sweet syrup",
    price: 60,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVufGVufDF8fHx8MTc2NjUxOTc1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true,
    isTopSeller: true
  },
  {
    id: "dessert-2",
    name: "Rasmalai",
    description: "Cottage cheese dumplings in sweet milk",
    price: 80,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1707387312941-ac872ffde2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkZXNzZXJ0JTIwc3dlZXR8ZW58MXx8fHwxNzY2NTU4NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true,
    isRecommended: true
  },
  {
    id: "dessert-3",
    name: "Rasgulla",
    description: "Spongy cottage cheese balls in sugar syrup",
    price: 60,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVufGVufDF8fHx8MTc2NjUxOTc1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "dessert-4",
    name: "Kheer",
    description: "Rice pudding with nuts",
    price: 70,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1707387312941-ac872ffde2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkZXNzZXJ0JTIwc3dlZXR8ZW58MXx8fHwxNzY2NTU4NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "dessert-5",
    name: "Jalebi",
    description: "Crispy sweet pretzel in sugar syrup",
    price: 50,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVufGVufDF8fHx8MTc2NjUxOTc1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "dessert-6",
    name: "Kulfi",
    description: "Traditional Indian ice cream",
    price: 60,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1710106519622-8c49d0bcff2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwc3dlZXR8ZW58MXx8fHwxNzY2NTE0ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true,
    isRecommended: true
  },
  {
    id: "dessert-7",
    name: "Gajar Halwa",
    description: "Carrot pudding with nuts",
    price: 90,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1707387312941-ac872ffde2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkZXNzZXJ0JTIwc3dlZXR8ZW58MXx8fHwxNzY2NTU4NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "dessert-8",
    name: "Moong Dal Halwa",
    description: "Lentil pudding with ghee",
    price: 100,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1707387312941-ac872ffde2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkZXNzZXJ0JTIwc3dlZXR8ZW58MXx8fHwxNzY2NTU4NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "dessert-9",
    name: "Ras Malai Cake",
    description: "Fusion dessert with rasmalai flavor",
    price: 120,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1710106519622-8c49d0bcff2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwc3dlZXR8ZW58MXx8fHwxNzY2NTE0ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "dessert-10",
    name: "Shahi Tukda",
    description: "Bread pudding in sweet milk",
    price: 85,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1707387312941-ac872ffde2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkZXNzZXJ0JTIwc3dlZXR8ZW58MXx8fHwxNzY2NTU4NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "dessert-11",
    name: "Phirni",
    description: "Ground rice pudding",
    price: 70,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1707387312941-ac872ffde2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkZXNzZXJ0JTIwc3dlZXR8ZW58MXx8fHwxNzY2NTU4NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "dessert-12",
    name: "Sandesh",
    description: "Bengali sweet made from cottage cheese",
    price: 55,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVufGVufDF8fHx8MTc2NjUxOTc1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "dessert-13",
    name: "Ladoo",
    description: "Sweet ball made from flour and ghee",
    price: 45,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVufGVufDF8fHx8MTc2NjUxOTc1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "dessert-14",
    name: "Ice Cream",
    description: "Assorted flavors of ice cream",
    price: 80,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1710106519622-8c49d0bcff2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwc3dlZXR8ZW58MXx8fHwxNzY2NTE0ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "dessert-15",
    name: "Falooda",
    description: "Sweet cold dessert drink with ice cream",
    price: 110,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1710106519622-8c49d0bcff2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwc3dlZXR8ZW58MXx8fHwxNzY2NTE0ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },

  // Beverages
  {
    id: "bev-1",
    name: "Mango Lassi",
    description: "Sweet mango yogurt drink",
    price: 80,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpfGVufDF8fHx8MTc2NjQ2NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true,
    isTopSeller: true
  },
  {
    id: "bev-2",
    name: "Sweet Lassi",
    description: "Traditional sweet yogurt drink",
    price: 60,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpfGVufDF8fHx8MTc2NjQ2NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "bev-3",
    name: "Salted Lassi",
    description: "Refreshing salted yogurt drink",
    price: 60,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpfGVufDF8fHx8MTc2NjQ2NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "bev-4",
    name: "Masala Chaas",
    description: "Spiced buttermilk",
    price: 50,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpfGVufDF8fHx8MTc2NjQ2NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "bev-5",
    name: "Fresh Lime Soda",
    description: "Refreshing lemon soda",
    price: 50,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpfGVufDF8fHx8MTc2NjQ2NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "bev-6",
    name: "Masala Tea",
    description: "Spiced Indian tea",
    price: 30,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpfGVufDF8fHx8MTc2NjQ2NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "bev-7",
    name: "Filter Coffee",
    description: "South Indian style coffee",
    price: 40,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpfGVufDF8fHx8MTc2NjQ2NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "bev-8",
    name: "Cold Coffee",
    description: "Chilled coffee with ice cream",
    price: 90,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpfGVufDF8fHx8MTc2NjQ2NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "bev-9",
    name: "Badam Milk",
    description: "Almond flavored milk",
    price: 70,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpfGVufDF8fHx8MTc2NjQ2NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "bev-10",
    name: "Soft Drink",
    description: "Assorted carbonated drinks",
    price: 40,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpfGVufDF8fHx8MTc2NjQ2NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "bev-11",
    name: "Mineral Water",
    description: "Bottled drinking water",
    price: 20,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpfGVufDF8fHx8MTc2NjQ2NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "bev-12",
    name: "Rose Milk",
    description: "Sweet rose flavored milk",
    price: 65,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpfGVufDF8fHx8MTc2NjQ2NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "bev-13",
    name: "Fruit Juice",
    description: "Fresh seasonal fruit juice",
    price: 70,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpfGVufDF8fHx8MTc2NjQ2NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "bev-14",
    name: "Jaljeera",
    description: "Spicy cumin drink",
    price: 50,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpfGVufDF8fHx8MTc2NjQ2NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  },
  {
    id: "bev-15",
    name: "Aam Panna",
    description: "Raw mango cooler",
    price: 60,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpfGVufDF8fHx8MTc2NjQ2NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVeg: true
  }
];

export const categories = [
  { id: "recommended", name: "Recommended" },
  { id: "top-selling", name: "Top Selling" },
  { id: "veg", name: "Veg" },
  { id: "non-veg", name: "Non-Veg" },
  { id: "rice-biryani", name: "Rice & Biryani" },
  { id: "snacks-starters", name: "Snacks & Starters" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" }
];
