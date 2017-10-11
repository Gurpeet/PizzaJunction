ALTER TABLE [dbo].[Order] ADD [OrderDetails] [nvarchar](max);
ALTER TABLE [dbo].[Order] ADD [OrderPrice] [decimal](18, 2);
ALTER TABLE [dbo].[Order] ADD [Status] [smallint];
