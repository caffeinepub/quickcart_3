export interface Product {
  id: string;
  name: string;
  price: number;
  mrp: number;
  unit: string;
  category: string;
  tags: string[];
  emoji: string;
}

export const ALL_PRODUCTS: Product[] = [
  // Fruits & Vegetables
  { id: 'fv1', name: 'Fresh Tomatoes', price: 29, mrp: 40, unit: '500g', category: 'fruits-vegetables', tags: ['vegetable', 'fresh'], emoji: '🍅' },
  { id: 'fv2', name: 'Organic Spinach', price: 35, mrp: 45, unit: '250g', category: 'fruits-vegetables', tags: ['vegetable', 'organic'], emoji: '🥬' },
  { id: 'fv3', name: 'Bananas', price: 49, mrp: 60, unit: '1 dozen', category: 'fruits-vegetables', tags: ['fruit'], emoji: '🍌' },
  { id: 'fv4', name: 'Red Apples', price: 89, mrp: 120, unit: '1kg', category: 'fruits-vegetables', tags: ['fruit'], emoji: '🍎' },
  { id: 'fv5', name: 'Carrots', price: 25, mrp: 35, unit: '500g', category: 'fruits-vegetables', tags: ['vegetable'], emoji: '🥕' },
  { id: 'fv6', name: 'Broccoli', price: 55, mrp: 70, unit: '500g', category: 'fruits-vegetables', tags: ['vegetable', 'organic'], emoji: '🥦' },
  { id: 'fv7', name: 'Mangoes', price: 120, mrp: 150, unit: '1kg', category: 'fruits-vegetables', tags: ['fruit', 'seasonal'], emoji: '🥭' },
  { id: 'fv8', name: 'Onions', price: 30, mrp: 40, unit: '1kg', category: 'fruits-vegetables', tags: ['vegetable'], emoji: '🧅' },
  { id: 'fv9', name: 'Potatoes', price: 28, mrp: 38, unit: '1kg', category: 'fruits-vegetables', tags: ['vegetable'], emoji: '🥔' },
  { id: 'fv10', name: 'Oranges', price: 75, mrp: 95, unit: '1kg', category: 'fruits-vegetables', tags: ['fruit'], emoji: '🍊' },
  { id: 'fv11', name: 'Cucumber', price: 20, mrp: 28, unit: '500g', category: 'fruits-vegetables', tags: ['vegetable'], emoji: '🥒' },
  { id: 'fv12', name: 'Grapes', price: 85, mrp: 110, unit: '500g', category: 'fruits-vegetables', tags: ['fruit'], emoji: '🍇' },
  // Dairy & Eggs
  { id: 'de1', name: 'Full Cream Milk', price: 62, mrp: 68, unit: '1L', category: 'dairy-eggs', tags: ['dairy'], emoji: '🥛' },
  { id: 'de2', name: 'Amul Butter', price: 55, mrp: 60, unit: '100g', category: 'dairy-eggs', tags: ['dairy'], emoji: '🧈' },
  { id: 'de3', name: 'Paneer', price: 85, mrp: 100, unit: '200g', category: 'dairy-eggs', tags: ['dairy'], emoji: '🧀' },
  { id: 'de4', name: 'Curd / Yogurt', price: 45, mrp: 52, unit: '400g', category: 'dairy-eggs', tags: ['dairy'], emoji: '🥣' },
  { id: 'de5', name: 'Eggs (Farm Fresh)', price: 72, mrp: 80, unit: '12 pcs', category: 'dairy-eggs', tags: ['eggs'], emoji: '🥚' },
  { id: 'de6', name: 'Cheese Slices', price: 110, mrp: 130, unit: '200g', category: 'dairy-eggs', tags: ['dairy'], emoji: '🧀' },
  { id: 'de7', name: 'Skimmed Milk', price: 58, mrp: 65, unit: '1L', category: 'dairy-eggs', tags: ['dairy', 'healthy'], emoji: '🥛' },
  { id: 'de8', name: 'Cream', price: 48, mrp: 55, unit: '200ml', category: 'dairy-eggs', tags: ['dairy'], emoji: '🍦' },
  { id: 'de9', name: 'Ghee', price: 280, mrp: 320, unit: '500ml', category: 'dairy-eggs', tags: ['dairy'], emoji: '🫙' },
  { id: 'de10', name: 'Buttermilk', price: 25, mrp: 30, unit: '500ml', category: 'dairy-eggs', tags: ['dairy'], emoji: '🥛' },
  { id: 'de11', name: 'Flavored Yogurt', price: 35, mrp: 42, unit: '100g', category: 'dairy-eggs', tags: ['dairy'], emoji: '🍓' },
  { id: 'de12', name: 'Condensed Milk', price: 65, mrp: 75, unit: '200g', category: 'dairy-eggs', tags: ['dairy'], emoji: '🥛' },
  // Bakery
  { id: 'bb1', name: 'Whole Wheat Bread', price: 45, mrp: 52, unit: '400g', category: 'bakery-breads', tags: ['bread', 'healthy'], emoji: '🍞' },
  { id: 'bb2', name: 'Croissants', price: 65, mrp: 80, unit: '4 pcs', category: 'bakery-breads', tags: ['pastry'], emoji: '🥐' },
  { id: 'bb3', name: 'Multigrain Bread', price: 55, mrp: 65, unit: '400g', category: 'bakery-breads', tags: ['bread', 'healthy'], emoji: '🍞' },
  { id: 'bb4', name: 'Pav Buns', price: 30, mrp: 38, unit: '6 pcs', category: 'bakery-breads', tags: ['bread'], emoji: '🥖' },
  { id: 'bb5', name: 'Chocolate Muffins', price: 75, mrp: 90, unit: '4 pcs', category: 'bakery-breads', tags: ['pastry', 'sweet'], emoji: '🧁' },
  { id: 'bb6', name: 'Sourdough Bread', price: 120, mrp: 145, unit: '500g', category: 'bakery-breads', tags: ['bread', 'artisan'], emoji: '🍞' },
  { id: 'bb7', name: 'Garlic Bread', price: 55, mrp: 65, unit: '200g', category: 'bakery-breads', tags: ['bread'], emoji: '🥖' },
  { id: 'bb8', name: 'Donuts', price: 80, mrp: 100, unit: '4 pcs', category: 'bakery-breads', tags: ['pastry', 'sweet'], emoji: '🍩' },
  { id: 'bb9', name: 'Bagels', price: 90, mrp: 110, unit: '4 pcs', category: 'bakery-breads', tags: ['bread'], emoji: '🥯' },
  { id: 'bb10', name: 'Rusk', price: 40, mrp: 48, unit: '200g', category: 'bakery-breads', tags: ['biscuit'], emoji: '🍪' },
  { id: 'bb11', name: 'Cake Slice', price: 95, mrp: 120, unit: '1 pc', category: 'bakery-breads', tags: ['cake', 'sweet'], emoji: '🎂' },
  { id: 'bb12', name: 'Pita Bread', price: 60, mrp: 72, unit: '4 pcs', category: 'bakery-breads', tags: ['bread'], emoji: '🫓' },
  // Meat & Seafood
  { id: 'ms1', name: 'Chicken Breast', price: 220, mrp: 260, unit: '500g', category: 'meat-seafood', tags: ['chicken', 'protein'], emoji: '🍗' },
  { id: 'ms2', name: 'Salmon Fillet', price: 380, mrp: 450, unit: '300g', category: 'meat-seafood', tags: ['fish', 'seafood'], emoji: '🐟' },
  { id: 'ms3', name: 'Mutton Curry Cut', price: 480, mrp: 550, unit: '500g', category: 'meat-seafood', tags: ['mutton'], emoji: '🥩' },
  { id: 'ms4', name: 'Prawns', price: 320, mrp: 380, unit: '250g', category: 'meat-seafood', tags: ['seafood'], emoji: '🦐' },
  { id: 'ms5', name: 'Chicken Mince', price: 180, mrp: 220, unit: '500g', category: 'meat-seafood', tags: ['chicken'], emoji: '🍗' },
  { id: 'ms6', name: 'Tuna Steak', price: 290, mrp: 340, unit: '200g', category: 'meat-seafood', tags: ['fish', 'seafood'], emoji: '🐠' },
  { id: 'ms7', name: 'Pork Ribs', price: 350, mrp: 420, unit: '500g', category: 'meat-seafood', tags: ['pork'], emoji: '🥩' },
  { id: 'ms8', name: 'Crab', price: 420, mrp: 500, unit: '500g', category: 'meat-seafood', tags: ['seafood'], emoji: '🦀' },
  { id: 'ms9', name: 'Chicken Wings', price: 200, mrp: 240, unit: '500g', category: 'meat-seafood', tags: ['chicken'], emoji: '🍗' },
  { id: 'ms10', name: 'Beef Steak', price: 520, mrp: 600, unit: '300g', category: 'meat-seafood', tags: ['beef'], emoji: '🥩' },
  { id: 'ms11', name: 'Squid', price: 280, mrp: 330, unit: '250g', category: 'meat-seafood', tags: ['seafood'], emoji: '🦑' },
  { id: 'ms12', name: 'Lamb Chops', price: 560, mrp: 640, unit: '400g', category: 'meat-seafood', tags: ['lamb'], emoji: '🥩' },
  // Beverages
  { id: 'bv1', name: 'Orange Juice', price: 85, mrp: 100, unit: '1L', category: 'beverages', tags: ['juice', 'healthy'], emoji: '🍊' },
  { id: 'bv2', name: 'Green Tea', price: 120, mrp: 145, unit: '25 bags', category: 'beverages', tags: ['tea', 'healthy'], emoji: '🍵' },
  { id: 'bv3', name: 'Cold Coffee', price: 65, mrp: 80, unit: '200ml', category: 'beverages', tags: ['coffee'], emoji: '☕' },
  { id: 'bv4', name: 'Coconut Water', price: 45, mrp: 55, unit: '200ml', category: 'beverages', tags: ['healthy', 'natural'], emoji: '🥥' },
  { id: 'bv5', name: 'Sparkling Water', price: 35, mrp: 42, unit: '500ml', category: 'beverages', tags: ['water'], emoji: '💧' },
  { id: 'bv6', name: 'Mango Lassi', price: 55, mrp: 65, unit: '300ml', category: 'beverages', tags: ['dairy', 'juice'], emoji: '🥭' },
  { id: 'bv7', name: 'Energy Drink', price: 95, mrp: 110, unit: '250ml', category: 'beverages', tags: ['energy'], emoji: '⚡' },
  { id: 'bv8', name: 'Lemonade', price: 40, mrp: 50, unit: '500ml', category: 'beverages', tags: ['juice'], emoji: '🍋' },
  { id: 'bv9', name: 'Apple Juice', price: 75, mrp: 90, unit: '1L', category: 'beverages', tags: ['juice'], emoji: '🍎' },
  { id: 'bv10', name: 'Herbal Tea', price: 110, mrp: 130, unit: '20 bags', category: 'beverages', tags: ['tea', 'healthy'], emoji: '🌿' },
  { id: 'bv11', name: 'Protein Shake', price: 180, mrp: 220, unit: '250ml', category: 'beverages', tags: ['protein', 'healthy'], emoji: '💪' },
  { id: 'bv12', name: 'Iced Tea', price: 50, mrp: 60, unit: '500ml', category: 'beverages', tags: ['tea'], emoji: '🧊' },
  // Snacks
  { id: 'sn1', name: 'Potato Chips', price: 30, mrp: 40, unit: '100g', category: 'snacks-munchies', tags: ['chips', 'snack'], emoji: '🥔' },
  { id: 'sn2', name: 'Popcorn', price: 45, mrp: 55, unit: '150g', category: 'snacks-munchies', tags: ['snack'], emoji: '🍿' },
  { id: 'sn3', name: 'Mixed Nuts', price: 180, mrp: 220, unit: '200g', category: 'snacks-munchies', tags: ['nuts', 'healthy'], emoji: '🥜' },
  { id: 'sn4', name: 'Chocolate Bar', price: 55, mrp: 65, unit: '100g', category: 'snacks-munchies', tags: ['chocolate', 'sweet'], emoji: '🍫' },
  { id: 'sn5', name: 'Biscuits', price: 35, mrp: 42, unit: '200g', category: 'snacks-munchies', tags: ['biscuit'], emoji: '🍪' },
  { id: 'sn6', name: 'Nachos', price: 65, mrp: 80, unit: '150g', category: 'snacks-munchies', tags: ['chips', 'snack'], emoji: '🌮' },
  { id: 'sn7', name: 'Trail Mix', price: 120, mrp: 145, unit: '200g', category: 'snacks-munchies', tags: ['nuts', 'healthy'], emoji: '🥜' },
  { id: 'sn8', name: 'Granola Bar', price: 45, mrp: 55, unit: '40g', category: 'snacks-munchies', tags: ['healthy', 'snack'], emoji: '🌾' },
  { id: 'sn9', name: 'Peanut Butter', price: 150, mrp: 180, unit: '400g', category: 'snacks-munchies', tags: ['spread', 'protein'], emoji: '🥜' },
  { id: 'sn10', name: 'Gummy Bears', price: 40, mrp: 50, unit: '100g', category: 'snacks-munchies', tags: ['candy', 'sweet'], emoji: '🐻' },
  { id: 'sn11', name: 'Rice Cakes', price: 55, mrp: 65, unit: '100g', category: 'snacks-munchies', tags: ['healthy', 'snack'], emoji: '🍚' },
  { id: 'sn12', name: 'Dark Chocolate', price: 95, mrp: 115, unit: '100g', category: 'snacks-munchies', tags: ['chocolate', 'healthy'], emoji: '🍫' },
  // Breakfast & Cereals
  { id: 'bc1', name: 'Oats', price: 85, mrp: 100, unit: '500g', category: 'breakfast-cereals', tags: ['healthy', 'cereal'], emoji: '🌾' },
  { id: 'bc2', name: 'Corn Flakes', price: 120, mrp: 145, unit: '500g', category: 'breakfast-cereals', tags: ['cereal'], emoji: '🌽' },
  { id: 'bc3', name: 'Muesli', price: 180, mrp: 220, unit: '500g', category: 'breakfast-cereals', tags: ['healthy', 'cereal'], emoji: '🥣' },
  { id: 'bc4', name: 'Pancake Mix', price: 95, mrp: 115, unit: '400g', category: 'breakfast-cereals', tags: ['breakfast'], emoji: '🥞' },
  { id: 'bc5', name: 'Granola', price: 150, mrp: 180, unit: '400g', category: 'breakfast-cereals', tags: ['healthy', 'cereal'], emoji: '🌾' },
  { id: 'bc6', name: 'Honey', price: 180, mrp: 220, unit: '500g', category: 'breakfast-cereals', tags: ['natural', 'sweet'], emoji: '🍯' },
  { id: 'bc7', name: 'Jam', price: 75, mrp: 90, unit: '300g', category: 'breakfast-cereals', tags: ['spread', 'sweet'], emoji: '🍓' },
  { id: 'bc8', name: 'Wheat Flakes', price: 110, mrp: 130, unit: '500g', category: 'breakfast-cereals', tags: ['cereal', 'healthy'], emoji: '🌾' },
  { id: 'bc9', name: 'Protein Oats', price: 220, mrp: 260, unit: '500g', category: 'breakfast-cereals', tags: ['healthy', 'protein'], emoji: '💪' },
  { id: 'bc10', name: 'Waffle Mix', price: 120, mrp: 145, unit: '400g', category: 'breakfast-cereals', tags: ['breakfast'], emoji: '🧇' },
  { id: 'bc11', name: 'Chia Seeds', price: 160, mrp: 195, unit: '200g', category: 'breakfast-cereals', tags: ['healthy', 'superfood'], emoji: '🌱' },
  { id: 'bc12', name: 'Flax Seeds', price: 90, mrp: 110, unit: '200g', category: 'breakfast-cereals', tags: ['healthy', 'superfood'], emoji: '🌱' },
  // Organic
  { id: 'or1', name: 'Organic Turmeric', price: 85, mrp: 110, unit: '100g', category: 'organic', tags: ['spice', 'organic'], emoji: '🌿' },
  { id: 'or2', name: 'Organic Quinoa', price: 220, mrp: 270, unit: '500g', category: 'organic', tags: ['grain', 'organic'], emoji: '🌾' },
  { id: 'or3', name: 'Organic Honey', price: 280, mrp: 340, unit: '500g', category: 'organic', tags: ['natural', 'organic'], emoji: '🍯' },
  { id: 'or4', name: 'Organic Coconut Oil', price: 320, mrp: 390, unit: '500ml', category: 'organic', tags: ['oil', 'organic'], emoji: '🥥' },
  { id: 'or5', name: 'Organic Almonds', price: 380, mrp: 450, unit: '250g', category: 'organic', tags: ['nuts', 'organic'], emoji: '🥜' },
  { id: 'or6', name: 'Organic Brown Rice', price: 120, mrp: 150, unit: '1kg', category: 'organic', tags: ['grain', 'organic'], emoji: '🍚' },
  { id: 'or7', name: 'Organic Lentils', price: 95, mrp: 120, unit: '500g', category: 'organic', tags: ['legume', 'organic'], emoji: '🫘' },
  { id: 'or8', name: 'Organic Olive Oil', price: 450, mrp: 540, unit: '500ml', category: 'organic', tags: ['oil', 'organic'], emoji: '🫒' },
  { id: 'or9', name: 'Organic Spinach', price: 55, mrp: 70, unit: '250g', category: 'organic', tags: ['vegetable', 'organic'], emoji: '🥬' },
  { id: 'or10', name: 'Organic Tomatoes', price: 65, mrp: 80, unit: '500g', category: 'organic', tags: ['vegetable', 'organic'], emoji: '🍅' },
  { id: 'or11', name: 'Organic Oats', price: 150, mrp: 185, unit: '500g', category: 'organic', tags: ['cereal', 'organic'], emoji: '🌾' },
  { id: 'or12', name: 'Organic Flaxseed Oil', price: 280, mrp: 340, unit: '250ml', category: 'organic', tags: ['oil', 'organic'], emoji: '🌱' },
  // Frozen Foods
  { id: 'ff1', name: 'Frozen Peas', price: 55, mrp: 68, unit: '500g', category: 'frozen-foods', tags: ['vegetable', 'frozen'], emoji: '🫛' },
  { id: 'ff2', name: 'Frozen Pizza', price: 180, mrp: 220, unit: '300g', category: 'frozen-foods', tags: ['pizza', 'frozen'], emoji: '🍕' },
  { id: 'ff3', name: 'Ice Cream', price: 120, mrp: 150, unit: '500ml', category: 'frozen-foods', tags: ['dessert', 'frozen'], emoji: '🍦' },
  { id: 'ff4', name: 'Frozen Corn', price: 45, mrp: 58, unit: '500g', category: 'frozen-foods', tags: ['vegetable', 'frozen'], emoji: '🌽' },
  { id: 'ff5', name: 'Frozen Fries', price: 95, mrp: 115, unit: '400g', category: 'frozen-foods', tags: ['snack', 'frozen'], emoji: '🍟' },
  { id: 'ff6', name: 'Frozen Berries', price: 150, mrp: 185, unit: '300g', category: 'frozen-foods', tags: ['fruit', 'frozen'], emoji: '🫐' },
  { id: 'ff7', name: 'Frozen Chicken Nuggets', price: 180, mrp: 220, unit: '400g', category: 'frozen-foods', tags: ['chicken', 'frozen'], emoji: '🍗' },
  { id: 'ff8', name: 'Frozen Samosas', price: 85, mrp: 105, unit: '10 pcs', category: 'frozen-foods', tags: ['snack', 'frozen'], emoji: '🥟' },
  { id: 'ff9', name: 'Frozen Waffles', price: 120, mrp: 145, unit: '6 pcs', category: 'frozen-foods', tags: ['breakfast', 'frozen'], emoji: '🧇' },
  { id: 'ff10', name: 'Frozen Edamame', price: 110, mrp: 135, unit: '300g', category: 'frozen-foods', tags: ['vegetable', 'frozen'], emoji: '🫛' },
  { id: 'ff11', name: 'Frozen Mango Chunks', price: 130, mrp: 160, unit: '400g', category: 'frozen-foods', tags: ['fruit', 'frozen'], emoji: '🥭' },
  { id: 'ff12', name: 'Frozen Paratha', price: 75, mrp: 92, unit: '5 pcs', category: 'frozen-foods', tags: ['bread', 'frozen'], emoji: '🫓' },
  // Personal Care
  { id: 'pc1', name: 'Shampoo', price: 180, mrp: 220, unit: '200ml', category: 'personal-care', tags: ['hair', 'care'], emoji: '🧴' },
  { id: 'pc2', name: 'Face Wash', price: 120, mrp: 150, unit: '100ml', category: 'personal-care', tags: ['skin', 'care'], emoji: '🧼' },
  { id: 'pc3', name: 'Toothpaste', price: 65, mrp: 80, unit: '150g', category: 'personal-care', tags: ['dental', 'care'], emoji: '🦷' },
  { id: 'pc4', name: 'Deodorant', price: 150, mrp: 185, unit: '150ml', category: 'personal-care', tags: ['body', 'care'], emoji: '🌸' },
  { id: 'pc5', name: 'Moisturizer', price: 220, mrp: 270, unit: '100ml', category: 'personal-care', tags: ['skin', 'care'], emoji: '🧴' },
  { id: 'pc6', name: 'Sunscreen SPF50', price: 280, mrp: 340, unit: '50ml', category: 'personal-care', tags: ['skin', 'care'], emoji: '☀️' },
  { id: 'pc7', name: 'Body Lotion', price: 160, mrp: 195, unit: '200ml', category: 'personal-care', tags: ['body', 'care'], emoji: '🧴' },
  { id: 'pc8', name: 'Lip Balm', price: 55, mrp: 68, unit: '4g', category: 'personal-care', tags: ['lip', 'care'], emoji: '💄' },
  { id: 'pc9', name: 'Hand Sanitizer', price: 75, mrp: 90, unit: '100ml', category: 'personal-care', tags: ['hygiene'], emoji: '🤲' },
  { id: 'pc10', name: 'Conditioner', price: 195, mrp: 240, unit: '200ml', category: 'personal-care', tags: ['hair', 'care'], emoji: '🧴' },
  { id: 'pc11', name: 'Razor', price: 85, mrp: 105, unit: '1 pc', category: 'personal-care', tags: ['grooming'], emoji: '🪒' },
  { id: 'pc12', name: 'Cotton Pads', price: 45, mrp: 55, unit: '100 pcs', category: 'personal-care', tags: ['skin', 'care'], emoji: '🌸' },
  // Household
  { id: 'hh1', name: 'Dish Soap', price: 55, mrp: 68, unit: '500ml', category: 'household', tags: ['cleaning'], emoji: '🧽' },
  { id: 'hh2', name: 'Floor Cleaner', price: 85, mrp: 105, unit: '1L', category: 'household', tags: ['cleaning'], emoji: '🧹' },
  { id: 'hh3', name: 'Laundry Detergent', price: 120, mrp: 150, unit: '1kg', category: 'household', tags: ['laundry'], emoji: '🫧' },
  { id: 'hh4', name: 'Toilet Cleaner', price: 65, mrp: 80, unit: '500ml', category: 'household', tags: ['cleaning'], emoji: '🚽' },
  { id: 'hh5', name: 'Garbage Bags', price: 45, mrp: 55, unit: '30 pcs', category: 'household', tags: ['waste'], emoji: '🗑️' },
  { id: 'hh6', name: 'Tissue Paper', price: 55, mrp: 68, unit: '200 sheets', category: 'household', tags: ['paper'], emoji: '🧻' },
  { id: 'hh7', name: 'Air Freshener', price: 95, mrp: 115, unit: '300ml', category: 'household', tags: ['fragrance'], emoji: '🌸' },
  { id: 'hh8', name: 'Sponge Scrubber', price: 35, mrp: 45, unit: '3 pcs', category: 'household', tags: ['cleaning'], emoji: '🧽' },
  { id: 'hh9', name: 'Broom', price: 120, mrp: 150, unit: '1 pc', category: 'household', tags: ['cleaning'], emoji: '🧹' },
  { id: 'hh10', name: 'Mop', price: 180, mrp: 220, unit: '1 pc', category: 'household', tags: ['cleaning'], emoji: '🧹' },
  { id: 'hh11', name: 'Candles', price: 75, mrp: 90, unit: '4 pcs', category: 'household', tags: ['decor'], emoji: '🕯️' },
  { id: 'hh12', name: 'Aluminum Foil', price: 55, mrp: 68, unit: '10m', category: 'household', tags: ['kitchen'], emoji: '🫙' },
  // Baby Care
  { id: 'baby1', name: 'Baby Diapers', price: 380, mrp: 450, unit: '40 pcs', category: 'baby-care', tags: ['diaper', 'baby'], emoji: '👶' },
  { id: 'baby2', name: 'Baby Shampoo', price: 150, mrp: 185, unit: '200ml', category: 'baby-care', tags: ['hair', 'baby'], emoji: '🧴' },
  { id: 'baby3', name: 'Baby Lotion', price: 180, mrp: 220, unit: '200ml', category: 'baby-care', tags: ['skin', 'baby'], emoji: '🧴' },
  { id: 'baby4', name: 'Baby Food', price: 95, mrp: 115, unit: '200g', category: 'baby-care', tags: ['food', 'baby'], emoji: '🍼' },
  { id: 'baby5', name: 'Baby Wipes', price: 120, mrp: 150, unit: '80 pcs', category: 'baby-care', tags: ['hygiene', 'baby'], emoji: '🧻' },
  { id: 'baby6', name: 'Baby Powder', price: 85, mrp: 105, unit: '200g', category: 'baby-care', tags: ['skin', 'baby'], emoji: '🌸' },
  { id: 'baby7', name: 'Baby Oil', price: 110, mrp: 135, unit: '200ml', category: 'baby-care', tags: ['skin', 'baby'], emoji: '🧴' },
  { id: 'baby8', name: 'Baby Cereal', price: 120, mrp: 150, unit: '300g', category: 'baby-care', tags: ['food', 'baby'], emoji: '🥣' },
  { id: 'baby9', name: 'Teether', price: 180, mrp: 220, unit: '1 pc', category: 'baby-care', tags: ['toy', 'baby'], emoji: '🧸' },
  { id: 'baby10', name: 'Baby Soap', price: 65, mrp: 80, unit: '75g', category: 'baby-care', tags: ['hygiene', 'baby'], emoji: '🧼' },
  { id: 'baby11', name: 'Nursing Pads', price: 150, mrp: 185, unit: '24 pcs', category: 'baby-care', tags: ['nursing', 'baby'], emoji: '🤱' },
  { id: 'baby12', name: 'Baby Sunscreen', price: 220, mrp: 270, unit: '50ml', category: 'baby-care', tags: ['skin', 'baby'], emoji: '☀️' },
  // Pet Care
  { id: 'pet1', name: 'Dog Food', price: 280, mrp: 340, unit: '1kg', category: 'pet-care', tags: ['dog', 'food'], emoji: '🐕' },
  { id: 'pet2', name: 'Cat Food', price: 220, mrp: 270, unit: '1kg', category: 'pet-care', tags: ['cat', 'food'], emoji: '🐈' },
  { id: 'pet3', name: 'Pet Shampoo', price: 180, mrp: 220, unit: '200ml', category: 'pet-care', tags: ['grooming', 'pet'], emoji: '🛁' },
  { id: 'pet4', name: 'Dog Treats', price: 120, mrp: 150, unit: '200g', category: 'pet-care', tags: ['dog', 'treat'], emoji: '🦴' },
  { id: 'pet5', name: 'Cat Litter', price: 150, mrp: 185, unit: '5kg', category: 'pet-care', tags: ['cat', 'hygiene'], emoji: '🐱' },
  { id: 'pet6', name: 'Pet Vitamins', price: 280, mrp: 340, unit: '60 tabs', category: 'pet-care', tags: ['health', 'pet'], emoji: '💊' },
  { id: 'pet7', name: 'Bird Seed', price: 95, mrp: 115, unit: '500g', category: 'pet-care', tags: ['bird', 'food'], emoji: '🐦' },
  { id: 'pet8', name: 'Fish Food', price: 65, mrp: 80, unit: '100g', category: 'pet-care', tags: ['fish', 'food'], emoji: '🐠' },
  { id: 'pet9', name: 'Pet Collar', price: 150, mrp: 185, unit: '1 pc', category: 'pet-care', tags: ['accessory', 'pet'], emoji: '🏷️' },
  { id: 'pet10', name: 'Pet Brush', price: 120, mrp: 150, unit: '1 pc', category: 'pet-care', tags: ['grooming', 'pet'], emoji: '🪮' },
  { id: 'pet11', name: 'Puppy Pads', price: 180, mrp: 220, unit: '20 pcs', category: 'pet-care', tags: ['dog', 'hygiene'], emoji: '🐶' },
  { id: 'pet12', name: 'Cat Toy', price: 85, mrp: 105, unit: '1 pc', category: 'pet-care', tags: ['cat', 'toy'], emoji: '🧶' },
];

export function getProductsByCategory(category: string): Product[] {
  return ALL_PRODUCTS.filter(p => p.category === category);
}

export function getProductById(id: string): Product | undefined {
  return ALL_PRODUCTS.find(p => p.id === id);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return ALL_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  );
}
