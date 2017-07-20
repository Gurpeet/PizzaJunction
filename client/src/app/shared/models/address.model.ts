
export interface Address {
    DeliveryTime?: string;
    AddressId?: number;
    Street?: string;
    Appartment?: string;
    City?: string;
    StateId?: number;
    State?: string;
    Country?: string;
    Zip?: string;
    Name?: string;
    Phone?: string;
    OrderType?: number;
    Distance?: number;
    DeliveryFee?: number;
};

export interface GeoLocation {
    lat: number;
    lng: number;
};
