
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Gurpreet Singh
-- Create date: 10/Oct/2017
-- Description:	This sproc will be used for inserting Order
-- =============================================
CREATE PROCEDURE AddOrder
	@UserId int,
	@DeliveryModeId int,
	@PaymentModeId int,
	@OrderStatusId int,
	@OrderDate datetime,
	@OrderDetails nvarchar(MAX),
	@OrderPrice decimal(18, 2),
	@Status int
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
           ,[Status])
     VALUES
           (@UserId
           ,@DeliveryModeId
           ,@PaymentModeId
           ,@OrderStatusId
           ,@OrderDate
           ,@OrderDetails
           ,@OrderPrice
           ,@Status)

END
GO
