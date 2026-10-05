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

//export type GuitarID = Guitar['id'] //Lookup to Id of Guitar - This is helpful when you want to change the type of Id, for example instead of number, use string and only have to change the type Guitar, instead of doing all the changes in each part of the code that use id

/* export type CartItem = Pick<Guitar, 'id' | 'name' | 'image' | 'description' | 'price'> & { // Creating a new type that includes only specific properties from Guitar and adds quantity
    quantity: number;
}; */

/* export type CartItem = Omit<Guitar, 'id' | 'name' | 'image' | 'description' | 'price'> & { // Creating a new type that excludes specific properties from Guitar and adds quantity
    quantity: number;
}; */