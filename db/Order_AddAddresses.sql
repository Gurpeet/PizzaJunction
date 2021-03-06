IF NOT EXISTS( SELECT NULL FROM INFORMATION_SCHEMA.COLUMNS 
	WHERE table_name = 'Order' AND table_schema = 'dbo' AND column_name = 'DeliveryAddress')  
	BEGIN
		ALTER TABLE [dbo].[Order] ADD [DeliveryAddress] NVARCHAR(MAX);
	END;

IF NOT EXISTS( SELECT NULL FROM INFORMATION_SCHEMA.COLUMNS 
	WHERE table_name = 'Order' AND table_schema = 'dbo' AND column_name = 'BillingAddress')
	BEGIN
		ALTER TABLE [dbo].[Order] ADD [BillingAddress] NVARCHAR(MAX);
	END;

