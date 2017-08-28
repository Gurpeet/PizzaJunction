USE [PizzaJunctionOrders]
GO
/****** Object:  StoredProcedure [dbo].[GetMenuItems]    Script Date: 8/23/2017 8:54:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Gurpreet Singh
-- Create date: 03/July/2017
-- Description:	Gets all the menu items
-- =============================================
ALTER PROCEDURE [dbo].[GetMenuItems]
	@itemTypeId int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT	mi.[MenuItemId],
        mi.[ItemId],
        i.[ItemTitle],
        ISNULL(i.[ItemDescription], '') AS [ItemDescription],
        ip.ItemPrice,
		s.[NumberOfToppings],
        ItemSize.Size,
        ItemSize.MetricType,
        ItemSize.[Description],
		sp.[SpecialityId],
		it.[ItemTypeName]
	FROM [dbo].[Item] i 
	JOIN [dbo].[MenuItems] mi ON mi.ItemId = i.ItemId
	LEFT JOIN [dbo].[SpecialityPrice] sp ON sp.SpecialityPriceId = mi.SpecialityPriceId
	LEFT JOIN [dbo].[Speciality] s ON s.SpecialityId = sp.SpecialityId
	LEFT JOIN [dbo].[ItemPrice] ip ON ip.ItemPriceId = sp.ItemPriceId
	LEFT JOIN [dbo].[ItemSize] ItemSize ON  ItemSize.ItemSizeId = sp.ItemSizeId
	LEFT JOIN [dbo].[ItemType] it ON i.ItemTypeId = it.ItemTypeId
	WHERE i.ItemTypeId = @itemTypeId
	ORDER BY [ItemId], mi.[SpecialityPriceId]

END
