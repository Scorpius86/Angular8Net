CREATE TABLE [dbo].[Order]
(
	OrderId INT NOT NULL PRIMARY KEY IDENTITY,
	CustomerId INT NOT NULL,

	CONSTRAINT FK_Order_Customer FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId)
)
