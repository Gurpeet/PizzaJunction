USE [PizzaJunctionOrders]
GO

/****** Object:  Table [dbo].[State]    Script Date: 7/14/2017 1:26:41 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[State](
	[StateID] [int] IDENTITY(1,1) NOT NULL,
	[StateCode] [nchar](2) NULL,
	[StateName] [nvarchar](128) NOT NULL
) ON [PRIMARY]

GO


