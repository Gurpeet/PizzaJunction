
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Gurpreet Singh
-- Create date: 14/July/2017
-- Description:	Gets all the states where order can be delivered
-- =============================================
CREATE PROCEDURE GetStates 
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
    
	SELECT [StateID]
		,[StateCode]
		,[StateName]
	FROM [dbo].[State]

END
GO
