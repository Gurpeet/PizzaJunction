USE [PizzaJunctionOrders]
GO
/****** Object:  StoredProcedure [dbo].[AddOrder]    Script Date: 10/17/2017 12:19:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Gurpreet Singh
-- Create date: 10/Oct/2017
-- Description:	This sproc will be used for inserting Order
-- =============================================
CREATE PROCEDURE [dbo].[AddOrder]
	@UserId int,
	@DeliveryModeId int,
	@PaymentModeId int,
	@OrderStatusId int,
	@OrderDate datetime,
	@OrderDetails nvarchar(MAX),
	@OrderPrice decimal(18, 2),
	@DeliveryAddress nvarchar(MAX),
	@BillingAddress nvarchar(MAX)
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO [dbo].[Order]
           ([UserId]
           ,[DeliveryModeId]
           ,[PaymentModeId]
           ,[OrderStatusId]
           ,[OrderDate]
           ,[OrderDetails]
           ,[OrderPrice]
		   ,[DeliveryAddress]
		   ,[BillingAddress])
	 OUTPUT Inserted.OrderId
     VALUES
           (@UserId
           ,@DeliveryModeId
           ,@PaymentModeId
           ,@OrderStatusId
           ,@OrderDate
           ,@OrderDetails
           ,@OrderPrice
		   ,@DeliveryAddress
		   ,@BillingAddress)

END
