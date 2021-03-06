
-- =============================================
-- Author:		Gurpreet Singh
-- Create date: 16/Oct/2017
-- Description:	This sproc will be used for updating OrderStatus
-- =============================================
CREATE PROCEDURE [dbo].[AcceptOrder]
	@OrderId int,
	@OrderStatusId int
AS
BEGIN
	SET NOCOUNT ON;

	UPDATE [dbo].[Order]
	SET [OrderStatusId] = @OrderStatusId
	WHERE [OrderId] = @OrderId

END
