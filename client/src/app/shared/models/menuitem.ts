export interface MenuItem {
    MenuItemId: number;
    ItemId: number;
    ItemTitle: string;
    ItemDescription?: string;
    ItemPrice?: string;
    Size?: number;
    MetricType?: string;
    Description?: string;
    NumberOfToppings?: number;
    toppings?: MenuItem[]
};

export interface CartItem {
    items: MenuItem;
    totalPrice: number;
    totalQty: number;
};

export interface ItemType {
    ItemTypeId: number;
    ItemTypeName: string;
};
