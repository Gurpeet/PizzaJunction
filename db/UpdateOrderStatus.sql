
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Gurpreet Singh
-- Create date: 10/Oct/2017
-- Description:	This sproc will Update Status for Order
-- =============================================
CREATE PROCEDURE UpdateOrderStatus
	@OrderId int,
	@Status int
AS
BEGIN
	SET NOCOUNT ON;
	UPDATE [dbo].[Order]
	SET [OrderStatusId] = @Status
	WHERE [OrderId] = @OrderId
END
GO

