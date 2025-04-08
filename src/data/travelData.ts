type TravelItem = {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
};

const travelItems: TravelItem[] = [
    {
        id: 1,
        description: "Passport",
        quantity: 1,
        packed: true,
    },
    {
        id: 2,
        description: "Socks",
        quantity: 12,
        packed: false,
    },
    {
        id: 1,
        description: "Charger",
        quantity: 12,
        packed: false,
    },
];

export default travelItems;
