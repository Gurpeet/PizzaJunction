
-- =============================================
-- Author:		Gurpreet Singh
-- Create date: 10/Oct/2017
-- Description:	This sproc will be used for getting an order details
-- =============================================
CREATE PROCEDURE [dbo].[GetOrder]
	@OrderId int
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
			  ,[DeliveryAddress]
			  ,[BillingAddress]
		  FROM [dbo].[Order]
		  WHERE [OrderId] = @OrderId
END
