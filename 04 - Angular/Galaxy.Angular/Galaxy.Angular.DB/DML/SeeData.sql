/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/

INSERT INTO State (Abbreviation,Name)
VALUES ('Alabama', 'AL'),
       ('Alaska', 'AK'),
       ('Arizona', 'AZ'),
       ('Arkansas', 'AR'),
       ('California', 'CA'),
       ('Colorado', 'CO'),
       ('Connecticut', 'CT'),
       ('Delaware', 'DE'),
       ('District of Columbia', 'DC'),
       ('Florida', 'FL'),
       ('Georgia', 'GA'),
       ('Hawaii', 'HI'),
       ('Idaho', 'ID'),
       ('Illinois', 'IL'),
       ('Indiana', 'IN'),
       ('Iowa', 'IA'),
       ('Kansas', 'KS'),
       ('Kentucky', 'KY'),
       ('Louisiana', 'LA'),
       ('Maine', 'ME'),
       ('Maryland', 'MD'),
       ('Massachusetts', 'MA'),
       ('Michigan', 'MI'),
       ('Minnesota', 'MN'),
       ('Mississippi', 'MS'),
       ('Missouri', 'MO'),
       ('Montana', 'MT'),
       ('Nebraska', 'NE'),
       ('Nevada', 'NV'),
       ('New Hampshire', 'NH'),
       ('New Jersey', 'NJ'),
       ('New Mexico', 'NM'),
       ('New York', 'NY'),
       ('North Carolina', 'NC'),
       ('North Dakota', 'ND'),
       ('Ohio', 'OH'),
       ('Oklahoma', 'OK'),
       ('Oregon', 'OR'),
       ('Pennsylvania', 'PA'),
       ('Rhode Island', 'RI'),
       ('South Carolina', 'SC'),
       ('South Dakota', 'SD'),
       ('Tennessee', 'TN'),
       ('Texas', 'TX'),
       ('Utah', 'UT'),
       ('Vermont', 'VT'),
       ('Virginia', 'VA'),
       ('Washington', 'WA'),
       ('West Virginia', 'WV'),
       ('Wisconsin', 'WI'),
       ('Wyoming', 'WY'),
       ('Catalonia','CAT'),
       ('Iceland','IS'),
       ('Canton of Zurick','COZ'),
       ('Rio de Janeiro','WA');


INSERT INTO [dbo].[Product]([ProductName],[ItemCost])
     VALUES
           ('Basketball',7.99),
           ('Shoes',199.99),
           ('Frisbee',2.99),
           ('Hat',5.99),
           ('Boomerang', 29.99),
           ('Helmet',19.99),
           ('Kangaroo Saddle',179.99),
           ('Budgie Smugglers',19.99),
           ('Swimming Cap',5.49),
           ('Bow',399.99),
           ('Arrows',69.99),
           ('Baseball', 9.99),
           ('Bat',19.99),
           ('Surfboard',299.99),
           ('Wax',5.99),
           ('Shark Repellent',15.99),
           ('Saddle',599.99),
           ('Riding cap',79.99),
           ('Car',42999.99);

INSERT INTO [dbo].[Customer]
           ([FirstName]
           ,[LastName]
           ,[Gender]
           ,[Address]
           ,[City]
           ,[Latitude]
           ,[Longitude]
           ,[StateId])
     VALUES
           ('Ted','James','Male','1234 Anywhere St','Phoenix ',33.299,-111.963,3),
           ('Michelle','Thompson','Female','345 Cedar Point Ave.','Encinitas ',33.037,-117.291,5),
           ('Zed','Bishop','Male','1822 Long Bay Dr.','Seattle ',47.596,-122.331,48),
           ('Tina','Adams','Female','79455 Pinetop Way','Chandler',33.299,-111.963,3),
           ('Igor','Minar','Male','576 Crescent Blvd.',' Dallas',32.782927,-96.806191,44),
           ('Brad','Green','Male','9874 Center St.','Orlando ',28.384238,-81.564103,10),
           ('Misko','Hevery','Male','9812 Builtway Appt #1','Carey ',35.727985,-78.797594,34),
           ('Heedy','Wahlin','Female','4651 Tuvo St.','Anaheim',33.809898,-117.918757,5),
           ('John','Papa','Male','66 Ray St.','Orlando',28.384238,-81.564103,10),
           ('Tonya','Smith','Female','1455 Chandler Blvd.','',33.762297,-84.392953,11),
           ('ward','bell','male','888 Central St.','Los Angeles',34.042552,-118.266429,5),
           ('Marcus','Hightower','male','1699 Atomic St.','Dallas',32.782927,-96.806191,44),
           ('Thomas','Martin','male','98756 Center St.','New York',40.725037,-74.004903,33),
           ('Jean','Martin','female','98756 Center St.','New York City',40.725037,-74.004903,33),
           ('Pinal','Dave','male','23566 Directive Pl.','White Plains',41.028726,-73.758261,33),
           ('Robin','Cleark','female','35632 Richmond Circle Apt B','Las Vegas',36.091824,-115.174247,29),
           ('Fred','Roberts','male','12 Ocean View St.','Houston',29.750163,-95.362769,44),
           ('Robyn','Flores','female','23423 Adams St.','Seattle',47.596,-122.331,48),
           ('Elaine','Jones','female','98756 Center St.','Barcelona',41.386444,2.111988,52),
           ('Lilija','Arnarson','female','23423 Adams St.','Reykjavik',64.120278,-21.830471,53),
           ('Laurent','Bugnion','male','9874 Lake Blvd.','Zurich',47.341337,8.582503,54),
           ('Gabriel','Flores','male','2543 Cassiano','Rio de Janeiro',-22.919369,-43.181836,55);

INSERT INTO [dbo].[Order] ([CustomerId])
     VALUES
           (1),
           (2),
           (3),
           (4),
           (5),
           (6),
           (7),
           (8),
           (9),
           (10),
           (11),
           (12),
           (13),
           (14),
           (15),
           (16),
           (17),
           (18),
           (19),
           (20),
           (21),
           (22);

INSERT INTO [dbo].[OrderItem]
           ([OrderId]
           ,[ProductId])
     VALUES
           (1,1),
           (1,2),
           (2,3),
           (2,4),
           (3,5),
           (3,6),
           (3,7),
           (4,8),
           (4,9),
           (5,10),
           (5,11),
           (6,12),
           (6,13),
           (7,14),
           (7,15),
           (7,16),
           (8,17),
           (8,18),
           (9,12),
           (9,13),
           (10,14),
           (10,15),
           (10,16),
           (13,15),
           (13,16),
           (13,19),
           (21,12),
           (21,13);
GO



