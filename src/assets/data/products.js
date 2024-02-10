export const products = [
    {
        id: 1,
        name: 'sanguche de bondiola',
        price: 3000,
        category: 'simple',
        img:'https://images.rappi.com.ar/products/1928690-1611881525092.png',
        stock: 16,
        description: 'Sandwich de bondiola feteada y queso'
    },
    {
        id: 2,
        name: 'sanguche jamón crudo',
        price: 5500,
        category: 'premium',
        img:'https://alacarta.com.py/filemanager/photos/15/REVISTAS/119/NotaDeTapa/fotos/recetasok/sandwichok.png',
        stock: 7,
        description: 'Sandwich de jamón crudo, queso brie, rúcula y tomates cherry sin piel'
    },
    {
        id: 3,
        name: 'montecristo',
        price: 3000,
        category: 'simple',
        img:'https://www.terra.us/u/fotografias/m/2023/12/21/f608x342-3021_32744_0.png',
        stock: 22,
        description: 'Sandwich de tostadas francesas con jamón cocido y queso'
    },
    {
        id: 4,
        name: 'sanguche primavera',
        price: 5000,
        category: 'premium',
        img:'https://w7.pngwing.com/pngs/458/187/png-transparent-cheeseburger-slider-buffalo-burger-breakfast-sandwich-ham-and-cheese-sandwich-bun-food-cheese-sandwich-cheeseburger.png',
        stock: 18,
        description: 'Sandwich de ternera desmenuzada con mayonesa, palta y salsa especial'
    }
]

export const getProducts = () => {
    return new Promise((res, rej) =>{
        setTimeout(() => {
            res(products)
        }, 1000)
    })
}

export const getProductsByCategory = (category) =>{
    return new Promise((res, rej) =>{
        setTimeout(() =>{
            res(products.filter(prod => prod.category===category))
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res(products.find(prod => prod.id.toString() === id))
        }, 1000)
    })
}