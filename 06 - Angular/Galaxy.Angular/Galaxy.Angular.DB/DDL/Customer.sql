CREATE TABLE [dbo].[Customer]
(
	CustomerId INT NOT NULL PRIMARY KEY IDENTITY,
	FirstName VARCHAR(250),
	LastName VARCHAR(250),
	Gender VARCHAR(250) DEFAULT 'male',
	Address VARCHAR(250),
	City  VARCHAR(250),
	Latitude Decimal (30,6),
	Longitude Decimal (30,6),
	StateId INT NOT NULL,

	CONSTRAINT FK_Customer_State FOREIGN KEY (StateId) REFERENCES State(StateId)
)
