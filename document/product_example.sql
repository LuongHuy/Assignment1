CREATE DATABASE assignment1;
use assignment1;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_id` int(10) unsigned DEFAULT NULL,
  `product_name` varchar(20) DEFAULT NULL,
  `unit_price` float(8,2) DEFAULT NULL,
  `category` varchar(15) DEFAULT NULL,
  `unit_quantity` varchar(15) DEFAULT NULL,
  `in_stock` int(10) unsigned DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of products
-- ----------------------------
BEGIN;
INSERT INTO `products` VALUES (1000, 'Fish Fingers', 2.55,'Frozen', '500 gram', 1500,'Crispy breaded fish fillets, perfect for a quick meal.');
INSERT INTO `products` VALUES (1001, 'Fish Fingers', 5.00,'Frozen', '1000 gram', 750,'Crispy breaded fish fillets, perfect for a quick meal.');
INSERT INTO `products` VALUES (1002, 'Hamburger Patties', 2.35,'Frozen', 'Pack 10', 1200,'Ground meat formed into round discs, ideal for grilling or frying.');
INSERT INTO `products` VALUES (1003, 'Shelled Prawns', 6.90,'Frozen', '250 gram', 300,'Tender, succulent prawns with the shells removed, ready to cook.');
INSERT INTO `products` VALUES (1004, 'Tub Ice Cream', 1.80,'Frozen', 'I Litre', 800,'Creamy frozen dessert stored in a convenient tub container.');
INSERT INTO `products` VALUES (1005, 'Tub Ice Cream', 3.40,'Frozen', '2 Litre', 1200,'Creamy frozen dessert stored in a convenient tub container.');
INSERT INTO `products` VALUES (2000, 'Panadol', 3.00,'Home', 'Pack 24', 2000,'Over-the-counter pain relief medication for headaches, fever, and minor aches.');
INSERT INTO `products` VALUES (2001, 'Panadol', 5.50,'Home', 'Bottle 50', 1000,'Over-the-counter pain relief medication for headaches, fever, and minor aches.');
INSERT INTO `products` VALUES (2002, 'Bath Soap', 2.60,'Home', 'Pack 6', 500,'Cleansing bar for daily hygiene routines, available in various scents.');
INSERT INTO `products` VALUES (2003, 'Garbage Bags Small', 1.50,'Home', 'Pack 10', 500,'Strong, durable bags designed for containing household waste.');
INSERT INTO `products` VALUES (2004, 'Garbage Bags Large', 5.00,'Home', 'Pack 50', 300,'Strong, durable bags designed for containing household waste.');
INSERT INTO `products` VALUES (2005, 'Washing Powder', 4.00,'Home', '1000 gram', 800,'Laundry detergent in powdered form for effective cleaning.');
INSERT INTO `products` VALUES (3000, 'Cheddar Cheese', 8.00,'Fresh', '500 gram', 1000,'Sharp and tangy cheese with a rich flavor, perfect for sandwiches or snacking.');
INSERT INTO `products` VALUES (3001, 'Cheddar Cheese', 15.00,'Fresh', '1000 gram', 1000,'Sharp and tangy cheese with a rich flavor, perfect for sandwiches or snacking.');
INSERT INTO `products` VALUES (3002, 'T Bone Steak', 7.00,'Fresh', '1000 gram', 200,'Juicy, flavorful steak cut from the T-shaped bone, great for grilling.');
INSERT INTO `products` VALUES (3003, 'Navel Oranges', 3.99,'Fresh', 'Bag 20', 200,'Seedless oranges with a sweet and juicy flavor.');
INSERT INTO `products` VALUES (3004, 'Bananas', 1.49,'Fresh', 'Kilo', 400,'Sweet, potassium-rich fruit with a yellow peel.');
INSERT INTO `products` VALUES (3005, 'Peaches', 2.99,'Fresh', 'Kilo', 500,'Juicy, fragrant stone fruit with a velvety skin.');
INSERT INTO `products` VALUES (3006, 'Grapes', 3.50,'Fresh', 'Kilo', 200,'Sweet and succulent bite-sized fruits, available in various colors.');
INSERT INTO `products` VALUES (3007, 'Apples', 1.99,'Fresh', 'Kilo', 500,'Crisp and refreshing fruits with a range of flavors and textures.');
INSERT INTO `products` VALUES (4000, 'Earl Grey Tea Bags', 2.49,'Beverage', 'Pack 25', 1200,'Aromatic black tea flavored with bergamot oil, packaged in convenient bags.');
INSERT INTO `products` VALUES (4001, 'Earl Grey Tea Bags', 7.25,'Beverage', 'Pack 100', 1200,'Aromatic black tea flavored with bergamot oil, packaged in convenient bags.');
INSERT INTO `products` VALUES (4002, 'Earl Grey Tea Bags', 13.00,'Beverage', 'Pack 200', 800,'Aromatic black tea flavored with bergamot oil, packaged in convenient bags.');
INSERT INTO `products` VALUES (4003, 'Instant Coffee', 2.89,'Beverage', '200 gram', 500,'Quick and easy coffee granules for instant brewing.');
INSERT INTO `products` VALUES (4004, 'Instant Coffee', 5.10,'Beverage', '500 gram', 500,'Quick and easy coffee granules for instant brewing.');
INSERT INTO `products` VALUES (4005, 'Chocolate Bar', 2.50,'Beverage', '500 gram', 300,'a velvety texture and a heavenly blend of sweetness and cocoa flavors in each decadent bite.');
INSERT INTO `products` VALUES (5000, 'Dry Dog Food', 5.95,'Pet-food', '5 kg Pack', 400,'Nutritious kibble formulated for canine health.');
INSERT INTO `products` VALUES (5001, 'Dry Dog Food', 1.95,'Pet-food', '1 kg Pack', 400,'Nutritious kibble formulated for canine health.');
INSERT INTO `products` VALUES (5002, 'Bird Food', 3.99,'Pet-food', '500g packet', 200,' Mix of seeds, grains, and nuts for feeding pet birds.');
INSERT INTO `products` VALUES (5003, 'Cat Food', 2.00,'Pet-food', '500g tin', 200,'Balanced nutrition in convenient forms tailored for feline diets.');
INSERT INTO `products` VALUES (5004, 'Fish Food', 3.00,'Pet-food', '500g packet', 200,'Nutrient-rich pellets or flakes for feeding aquarium fish.');
INSERT INTO `products` VALUES (2006, 'Laundry Bleach', 3.55,'Home', '2 Litre Bottle', 500,' Whitening agent used to brighten and disinfect clothes during washing.');
COMMIT;
