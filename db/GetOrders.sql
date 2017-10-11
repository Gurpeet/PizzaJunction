
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Gurpreet Singh
-- Create date: 10/Oct/2017
-- Description:	This sproc will be used for displaying
-- =============================================
CREATE PROCEDURE GetOrders
AS
BEGIN
	SET NOCOUNT ON;

		SELECT [OrderId]
			  ,[UserId]
			  ,[DeliveryModeId]
			  ,[PaymentModeId]
			  ,[OrderStatusId]
			  ,[OrderDate]
			  ,[OrderDetails]
			  ,[OrderPrice]
			  ,[Status]
		  FROM [dbo].[Order]
END
GO
