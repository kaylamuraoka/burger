/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Specify the 'burgers_db' for use.
USE burgers_db;

-- Insert a set of records into the 'burgers' table
INSERT INTO burgers (burger_name, devoured) VALUES ("Old School Cheeseburger" ,1);
INSERT INTO burgers (burger_name, devoured) VALUES ("Sprouted Veggie Burger", 1);
INSERT INTO burgers (burger_name, devoured) VALUES ("Jalapeño Cowboy Burger", 1);
INSERT INTO burgers (burger_name, devoured) VALUES ("Breakfast Burger", 0);
INSERT INTO burgers (burger_name, devoured) VALUES ("Bacon Barbecue Burger", 0);
INSERT INTO burgers (burger_name, devoured) VALUES ("Spiced Falafel Burger ", 0);
INSERT INTO burgers (burger_name, devoured) VALUES ("Double Mushroom Burger ", 0);
INSERT INTO burgers (burger_name, devoured) VALUES ("Thai Salmon Burger ", 0);

