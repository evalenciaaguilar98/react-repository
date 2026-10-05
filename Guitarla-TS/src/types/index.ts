export type Guitar = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
};

export type CartItem = Guitar & { // Extending the Guitar type to include quantity
    quantity: number;
};

/* export type CartItem = Pick<Guitar, 'id' | 'name' | 'image' | 'description' | 'price'> & { // Creating a new type that includes only specific properties from Guitar and adds quantity
    quantity: number;
}; */

/* export type CartItem = Omit<Guitar, 'id' | 'name' | 'image' | 'description' | 'price'> & { // Creating a new type that excludes specific properties from Guitar and adds quantity
    quantity: number;
}; */