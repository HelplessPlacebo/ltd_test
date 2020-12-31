const SEARCH_PRODUCTS = "PRODUCTS/SEARCH_PRODUCTS"
const FILTER_PRODUCTS = "PRODUCTS/FILTER_PRODUCTS"
const GET_PRODUCT_BY_ID = "PRODUCTS/GET_PRODUCT_BY_ID"
const SET_CURRENT_PAGE_PRODUCTS = "PRODUCTS/SET_CURRENT_PAGE_PRODUCTS"


export type TFilterConfig = {
    price?: Array<number>
    isAvailable?: boolean
    brands?:  string[]
    availableSizes?: Array<Number>
    category?: string | Array<string>
}
export type TProduct = {
    name: string
    price: number
    imgUrl: string
    article: number
    isAvailable: boolean
    description: string
    id: number
    brand: string
    color: string
    category: string
    availableSizes: Array<number>
}
export type TProducts = Array<TProduct>

let DefaultState = {
    Products: [
        {
            name: "КРОСОВКИ NIKE AIR FORCE 1 LOW",
            price: 4990,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/19765/nike-air-force-1-low-19765-1.jpg",
            article: 41288428,
            isAvailable: true,
            description: "Кроссовки Nike Air Force 1 Low – современное переосмысление кроссовок, " +
                "которые были презентованы в качестве баскетбольной экипировки в 1982 году. Профиль " +
                "обуви не стесняет движений голеностопа, при этом поддерживая его. Для обеспечения вентиляции " +
                "в верхней части кроссовок, изготовленной из кожи, имеется перфорация. Для амортизации " +
                "стопы в подошве имеется вставка «Nike Air», которая «прописалась» в этих" +
                " кроссовках еще во время первой презентации в 1982 году. Рисунок протектора," +
                " состоящий из концентрических кругов, создает «пятна контакта», " +
                "что обеспечивает надежное сцепление с поверхностями.",
            id: 1,
            brand: "Nike",
            color: "блеый",
            category: "footwear",
            availableSizes: [36, 37, 38, 39, 40]
        },
        {
            name: "КРОССОВКИ ADIDAS OZWEEGO ",
            price: 5090,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/20932/adidas-ozweego-20932-1.jpg",
            article: 3213421,
            isAvailable: true,
            description: "Кроссовки Adidas Ozweego отлично подходят для занятий спортом. Верх модели обладает" +
                " отличными дышащими свойствами. Он изготовлен из искусственной кожи и текстиля. Система шнуровки" +
                " лаконично вписывается в образ модели. Внутри модели имеются мягкие вставки, которые обеспечивают " +
                "дополнительный комфорт во время носки. Стелька обладает дышащими свойствами. Подошва имеет необычное " +
                "рельефное строение. Промежуточный материал изготовлен с использованием новых технологий. " +
                "Поэтому обеспечивается погашение любых нагрузок. Резиновая подметка отлично взаимодействует с" +
                " разными поверхностями. По периметру модели имеются фирменные декорирующие элементы бренда.\n",
            id: 2,
            brand: "Adidas",
            color: "белый",
            category: "footwear",
            availableSizes: [36, 37, 38, 39, 40]
        },
        {
            name: "ФУТБОЛКА OFF-WHITE ",
            price: 1540,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/19630/off-white-19630-1.jpg",
            article: 535242,
            isAvailable: true,
            description: "Минималистичная футболка Off-White в белом цвете. Приталенное строение и округлая горловина в сочетании " +
                "с манжетами дает возможность использовать её как угодно." +
                " Материал модели отлично контактирует с кожей, обладает отличной теплопроводностью, швы не" +
                " вызывают дискомфорта. Перед лишён декора, а на спине располагается цветной принт, который " +
                "является основным дизайнерским элементом. При долгом взаимодействием с солнцем не выгорает.\n",
            id: 3,
            brand: "OFF-WHITE",
            color: "белый",
            category: "T-shirt",
            availableSizes: [46, 50, 52, 54]
        },
        {
            name: "ФУТБОЛКА AAPE ",
            price: 1320,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/19627/aape-19627-1.jpg",
            article: 312454125,
            isAvailable: true,
            description: "Модная футболка от бренда Aape выполнена на 100% из хлопка. Это позволяет носить её на прогулках, фитнесе," +
                " тренировках без дискомфорта. Модель приталенная с коротким рукавом. На груди расположен большой фирменный " +
                "принт бренда в контрастном цвете. После нескольких стирок цвет и состояние принта не изменяется." +
                " Также при долгом нахождении на солнце не выгорает.",
            id: 4,
            brand: "AAPE",
            color: "белый",
            category: "T-shirt",
            availableSizes: [46, 50, 52, 54]
        },
        {
            name: "ХУДИ NASA ",
            price: 2412,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/20540/nasa-20540-1.jpg",
            article: 312454125,
            isAvailable: true,
            description: "Стильный худи Nasa черного цвета выполнен из трикотажной ткани. Модель является трендом нынешнего сезона" +
                " и оснащена манжетами на рукавах и резинкой на поясе. У изделия классический несъемный капюшон и карман-кенгуру." +
                " Отличный трикотаж обеспечит комфортный тепловой режим на каждый день. Идеально подойдет для прогулок, пробежек." +
                " Изделие украшено контрастными принтами логотипа бренда: белым на груди, эмблемой-нашивкой – на рукаве. " +
                "Декор толстовки продолжают шнурки регулировки капюшона в тон и манжеты с плотной резинкой на поясе.",
            id: 5,
            brand: "NASA",
            color: "черный",
            category: "khudi",
            availableSizes: [46, 50, 52, 54]
        },
        {
            name: "КРОСОВКИ NIKE AIR FORCE 1 LOW",
            price: 4990,
            imgUrl: "https://images.ru.prom.st/794209655_w640_h640_nike-krossovki-nike.jpg",
            article: 41288428,
            isAvailable: true,
            description: "Кроссовки Nike Air Force 1 Low – современное переосмысление кроссовок, " +
                "которые были презентованы в качестве баскетбольной экипировки в 1982 году. Профиль " +
                "обуви не стесняет движений голеностопа, при этом поддерживая его. Для обеспечения вентиляции " +
                "в верхней части кроссовок, изготовленной из кожи, имеется перфорация. Для амортизации " +
                "стопы в подошве имеется вставка «Nike Air», которая «прописалась» в этих" +
                " кроссовках еще во время первой презентации в 1982 году. Рисунок протектора," +
                " состоящий из концентрических кругов, создает «пятна контакта», " +
                "что обеспечивает надежное сцепление с поверхностями.",
            id: 6,
            brand: "Nike",
            color: "блеый",
            category: "footwear",
            availableSizes: [36, 37, 38, 39, 40]
        },
        {
            name: "КРОССОВКИ ADIDAS OZWEEGO ",
            price: 5090,
            imgUrl: "https://images.ru.prom.st/798576238_w640_h640_adidas-krossovki-adidas.jpg",
            article: 3213421,
            isAvailable: true,
            description: "Кроссовки Adidas Ozweego отлично подходят для занятий спортом. Верх модели обладает" +
                " отличными дышащими свойствами. Он изготовлен из искусственной кожи и текстиля. Система шнуровки" +
                " лаконично вписывается в образ модели. Внутри модели имеются мягкие вставки, которые обеспечивают " +
                "дополнительный комфорт во время носки. Стелька обладает дышащими свойствами. Подошва имеет необычное " +
                "рельефное строение. Промежуточный материал изготовлен с использованием новых технологий. " +
                "Поэтому обеспечивается погашение любых нагрузок. Резиновая подметка отлично взаимодействует с" +
                " разными поверхностями. По периметру модели имеются фирменные декорирующие элементы бренда.\n",
            id: 7,
            brand: "Adidas",
            color: "белый",
            category: "footwear",
            availableSizes: [36, 37, 38, 39, 40]
        },
        {
            name: "ФУТБОЛКА OFF-WHITE ",
            price: 1540,
            imgUrl: "https://images.ru.prom.st/714696621_w640_h640_futbolka-off-white-belaya.jpg",
            article: 535242,
            isAvailable: true,
            description: "Минималистичная футболка Off-White в белом цвете. Приталенное строение и округлая горловина в сочетании " +
                "с манжетами дает возможность использовать её как угодно." +
                " Материал модели отлично контактирует с кожей, обладает отличной теплопроводностью, швы не" +
                " вызывают дискомфорта. Перед лишён декора, а на спине располагается цветной принт, который " +
                "является основным дизайнерским элементом. При долгом взаимодействием с солнцем не выгорает.\n",
            id: 8,
            brand: "OFF-WHITE",
            color: "белый",
            category: "T-shirt",
            availableSizes: [46, 50, 52, 54]
        },
        {
            name: "ФУТБОЛКА AAPE ",
            price: 1320,
            imgUrl: "https://хасл.рф/components/com_jshopping/files/img_products/7862/aape-7862-1.jpg",
            article: 312454125,
            isAvailable: true,
            description: "Модная футболка от бренда Aape выполнена на 100% из хлопка. Это позволяет носить её на прогулках, фитнесе," +
                " тренировках без дискомфорта. Модель приталенная с коротким рукавом. На груди расположен большой фирменный " +
                "принт бренда в контрастном цвете. После нескольких стирок цвет и состояние принта не изменяется." +
                " Также при долгом нахождении на солнце не выгорает.",
            id: 9,
            brand: "AAPE",
            color: "белый",
            category: "T-shirt",
            availableSizes: [46, 50, 52, 54]
        },
        {
            name: "ХУДИ NASA ",
            price: 2412,
            imgUrl: "https://printbar.ru/upload/images/b7/b7226.jpg",
            article: 312454125,
            isAvailable: true,
            description: "Стильный худи Nasa черного цвета выполнен из трикотажной ткани. Модель является трендом нынешнего сезона" +
                " и оснащена манжетами на рукавах и резинкой на поясе. У изделия классический несъемный капюшон и карман-кенгуру." +
                " Отличный трикотаж обеспечит комфортный тепловой режим на каждый день. Идеально подойдет для прогулок, пробежек." +
                " Изделие украшено контрастными принтами логотипа бренда: белым на груди, эмблемой-нашивкой – на рукаве. " +
                "Декор толстовки продолжают шнурки регулировки капюшона в тон и манжеты с плотной резинкой на поясе.",
            id: 10,
            brand: "NASA",
            color: "черный",
            category: "khudi",
            availableSizes: [46, 50, 52, 54]
        },
        {
            name: "КРОСОВКИ NIKE AIR FORCE 1 LOW",
            price: 4990,
            imgUrl: "https://хасл.рф/components/com_jshopping/files/img_products/5832/nike-air-force-1-low-5832-1.jpg",
            article: 41288428,
            isAvailable: true,
            description: "Кроссовки Nike Air Force 1 Low – современное переосмысление кроссовок, " +
                "которые были презентованы в качестве баскетбольной экипировки в 1982 году. Профиль " +
                "обуви не стесняет движений голеностопа, при этом поддерживая его. Для обеспечения вентиляции " +
                "в верхней части кроссовок, изготовленной из кожи, имеется перфорация. Для амортизации " +
                "стопы в подошве имеется вставка «Nike Air», которая «прописалась» в этих" +
                " кроссовках еще во время первой презентации в 1982 году. Рисунок протектора," +
                " состоящий из концентрических кругов, создает «пятна контакта», " +
                "что обеспечивает надежное сцепление с поверхностями.",
            id: 11,
            brand: "Nike",
            color: "блеый",
            category: "footwear",
            availableSizes: [36, 37, 38, 39, 40]
        },
        {
            name: "КРОССОВКИ ADIDAS OZWEEGO ",
            price: 5090,
            imgUrl: "https://greezzlee.ru/wp-content/uploads/2019/03/Adidas-ozweego-2-1-1.jpg",
            article: 3213421,
            isAvailable: true,
            description: "Кроссовки Adidas Ozweego отлично подходят для занятий спортом. Верх модели обладает" +
                " отличными дышащими свойствами. Он изготовлен из искусственной кожи и текстиля. Система шнуровки" +
                " лаконично вписывается в образ модели. Внутри модели имеются мягкие вставки, которые обеспечивают " +
                "дополнительный комфорт во время носки. Стелька обладает дышащими свойствами. Подошва имеет необычное " +
                "рельефное строение. Промежуточный материал изготовлен с использованием новых технологий. " +
                "Поэтому обеспечивается погашение любых нагрузок. Резиновая подметка отлично взаимодействует с" +
                " разными поверхностями. По периметру модели имеются фирменные декорирующие элементы бренда.\n",
            id: 12,
            brand: "Adidas",
            color: "белый",
            category: "footwear",
            availableSizes: [36, 37, 38, 39, 40]
        },
        {
            name: "ФУТБОЛКА OFF-WHITE ",
            price: 1540,
            imgUrl: "https://images.ru.prom.st/663506656_w640_h640_off-white-futbolka.jpg",
            article: 535242,
            isAvailable: true,
            description: "Минималистичная футболка Off-White в белом цвете. Приталенное строение и округлая горловина в сочетании " +
                "с манжетами дает возможность использовать её как угодно." +
                " Материал модели отлично контактирует с кожей, обладает отличной теплопроводностью, швы не" +
                " вызывают дискомфорта. Перед лишён декора, а на спине располагается цветной принт, который " +
                "является основным дизайнерским элементом. При долгом взаимодействием с солнцем не выгорает.\n",
            id: 13,
            brand: "OFF-WHITE",
            color: "белый",
            category: "T-shirt",
            availableSizes: [46, 50, 52, 54]
        },
        {
            name: "ФУТБОЛКА AAPE ",
            price: 1320,
            imgUrl: "https://хасл.рф/components/com_jshopping/files/img_products/7864/aape-7864-1.jpg",
            article: 312454125,
            isAvailable: true,
            description: "Модная футболка от бренда Aape выполнена на 100% из хлопка. Это позволяет носить её на прогулках, фитнесе," +
                " тренировках без дискомфорта. Модель приталенная с коротким рукавом. На груди расположен большой фирменный " +
                "принт бренда в контрастном цвете. После нескольких стирок цвет и состояние принта не изменяется." +
                " Также при долгом нахождении на солнце не выгорает.",
            id: 14,
            brand: "AAPE",
            color: "белый",
            category: "T-shirt",
            availableSizes: [46, 50, 52, 54]
        },
        {
            name: "ХУДИ NASA ",
            price: 2412,
            imgUrl: "https://images.ru.prom.st/785630382_w640_h640_nasa-hudi-nasa.jpg",
            article: 312454125,
            isAvailable: true,
            description: "Стильный худи Nasa черного цвета выполнен из трикотажной ткани. Модель является трендом нынешнего сезона" +
                " и оснащена манжетами на рукавах и резинкой на поясе. У изделия классический несъемный капюшон и карман-кенгуру." +
                " Отличный трикотаж обеспечит комфортный тепловой режим на каждый день. Идеально подойдет для прогулок, пробежек." +
                " Изделие украшено контрастными принтами логотипа бренда: белым на груди, эмблемой-нашивкой – на рукаве. " +
                "Декор толстовки продолжают шнурки регулировки капюшона в тон и манжеты с плотной резинкой на поясе.",
            id: 15,
            brand: "NASA",
            color: "черный",
            category: "khudi",
            availableSizes: [46, 50, 52, 54]
        },
    ] as TProducts,
    SearchResult: [] as TProducts ,
    FilterResult: [] as TProducts ,
    ClickedProduct: null as TProduct | null | undefined,
    currentPageProducts: null as TProducts | null,
    portionSize : 5
}

type  DefaultIssuesState = typeof DefaultState


type TIssuesReducerActions = ReturnType<TSearchProducts> | ReturnType<TFilterProducts>
    | ReturnType<TGetProductById> | ReturnType<TPutCurrentPageProducts>

const ProductsReducer = (state = DefaultState, action: TIssuesReducerActions): DefaultIssuesState => {

    const GetCopy = (orig : any): TProducts => {
        return JSON.parse(JSON.stringify(orig))
    }

    switch (action.type) {

        case GET_PRODUCT_BY_ID : {
            return {
                ...state,
                ClickedProduct: state.Products.find(e => e.id === action.id)
            }
        }
        case SET_CURRENT_PAGE_PRODUCTS:{
            let ProductsCopy = [] as TProducts
            if(state[action.component].length > 0){
                state[action.component].map((Product,index)=>{
                    if(index >= (action.pageNumber -1) * state.portionSize ){
                        if(ProductsCopy.length < state.portionSize) ProductsCopy.push(Product)
                    }
                })
            }else ProductsCopy = []
            return {
                ...state,
                 currentPageProducts:ProductsCopy
            }
        }
        case SEARCH_PRODUCTS:{
            return {
                ...state,
                 SearchResult: state.Products.filter(product=>product.name === action.name)
            }
        }
        case FILTER_PRODUCTS : {
            let ProductsCopy = GetCopy(state.Products)
            if(action.FilterConfig.price){
                ProductsCopy = ProductsCopy.filter(Product=>action.FilterConfig.price &&
                    Product.price < action.FilterConfig.price[1] &&Product.price > action.FilterConfig.price[0])
            }
            if(action.FilterConfig.brands && action.FilterConfig.brands.length>0){
                ProductsCopy = ProductsCopy.filter(Product=>action.FilterConfig.brands?.some(el=>el===Product.brand))
            }
            return {
                ...state,
                FilterResult: ProductsCopy
            }
        }

        default :
            return state
    }
}

export const SearchProducts = (name: string) => {
    return {type: SEARCH_PRODUCTS, name} as const
}
export type TSearchProducts = typeof SearchProducts

export const FilterProducts = (FilterConfig: TFilterConfig) => {
    return {type: FILTER_PRODUCTS, FilterConfig} as const
}
export type TFilterProducts = typeof FilterProducts

export const GetProductById = (id: number) => {
    return {type: GET_PRODUCT_BY_ID, id} as const
}
export type TGetProductById = typeof GetProductById

export const PutCurrentPageProducts = (pageNumber: number,component : "Products"|"SearchResult"|"FilterResult") => {
    return {type: SET_CURRENT_PAGE_PRODUCTS, pageNumber,component} as const
}
export type TPutCurrentPageProducts = typeof PutCurrentPageProducts

export default ProductsReducer