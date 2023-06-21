type Customer = {
    email: string;
    name: string;
}

type CustomerList = {
    name: ID;
    value: Customer;
}

type TrackingItem = {
    customer_id: ID;
    customer: Customer;
    items: Item[];
}

type Item = {
    item_id: ID;
    name: string;
    price: number;
    quantity: number;
}

type Order= {
    carrier: string;
    createdAt: string;
    shippingCost: number;
    trackingId: string;
    lat: number;
    Lng: number;
    Address: string;
    City: string;
}