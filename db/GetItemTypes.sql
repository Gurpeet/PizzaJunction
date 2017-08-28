SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Gurpreet Singh
-- Create date: 25/August/2017
-- Description:	Gets all the menu item types
-- =============================================
CREATE PROCEDURE [dbo].[GetItemTypes]
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SELECT [ItemTypeId]
      ,[ItemTypeName]
	FROM [dbo].[ItemType]
	ORDER BY [ItemTypeId]

END
