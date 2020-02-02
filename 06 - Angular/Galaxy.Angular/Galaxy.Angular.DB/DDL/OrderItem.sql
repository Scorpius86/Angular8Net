CREATE TABLE [dbo].[OrderItem]
(
	OrderItemId INT NOT NULL PRIMARY KEY IDENTITY,
	OrderId INT NOT NULL,
	ProductId INT NOT NULL,

	CONSTRAINT FK_OrderItem_Product FOREIGN KEY (ProductId) REFERENCES Product(ProductId),
	CONSTRAINT FK_OrderItem_Order FOREIGN KEY (OrderId) REFERENCES [Order](OrderId),
)
