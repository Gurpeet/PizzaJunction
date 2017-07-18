export interface Address {
    DeliveryTime?: string;
    AddressId?: number;
    Street: string;
    Appartment: string;
    City: string;
    StateId: number;
    State: string;
    Country: string;
    Zip: string;
}

export interface GeoLocation {
    lat: number;
    lng: number;
}
