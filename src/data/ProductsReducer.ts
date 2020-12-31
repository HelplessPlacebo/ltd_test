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
            name: "NIKE AIR FORCE 1 LOW",
            price: 100,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/19765/nike-air-force-1-low-19765-1.jpg",
            article: 41288428,
            isAvailable: true,
            description: "The Nike Air Force 1 is one of the brand's most popular shoes.  The upper is made of artificial " +
                "leather, which perfectly releases excess heat.  The lacing system fits neatly into the image of the model. " +
                " Inside the model, there are soft inserts that provide additional comfort while walking.  The midsole " +
                "material is responsible for cushioning.  It is manufactured using Air technology.  It allows you to pay off any load. " +
                " Traction is provided by a unique rubber outsole pattern.  The model will perfectly highlight any look.",
            id: 1,
            brand: "Nike",
            color: "white",
            category: "footwear",
            availableSizes: [36, 37, 38, 39, 40]
        },
        {
            name: "ADIDAS OZWEEGO",
            price: 95,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/20932/adidas-ozweego-20932-1.jpg",
            article: 3213421,
            isAvailable: true,
            description: "ADIDAS OZWEEGO combine futurism and sporty style at the milestone of the retros.\n" +
                "Such a tandem creates an ambiguous feeling when looking at this model,\n" +
                "however, does not leave anyone indifferent.  The body is made from a combination\n" +
                "mesh material and special synthetic material,\n" +
                "forming smooth shapes.\n" +
                "\n" +
                "Adiprene + cushioning system combined with midsole\n" +
                "made of EVA provide a soft step, and also protects the foot from too\n" +
                "powerful hits on the ground.  This property allows you to use\n" +
                "this model is both basic and sports.",
            id: 2,
            brand: "Adidas",
            color: "white",
            category: "footwear",
            availableSizes: [36, 37, 38, 39, 40]
        },
        {
            name: "T-shirt OFF-WHITE",
            price: 40,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/19630/off-white-19630-1.jpg",
            article: 535242,
            isAvailable: true,
            description: "Stylish T-shirt from the youth brand Off-White made of eco-friendly material.  Due to the fitted cut," +
                " it can be used for walking and playing sports.  From the point of view of style, the designers approached in a new way. " +
                " They placed a large brand logo on the back for a unique look.  There are cuffs for ease of use. " +
                " After prolonged wear, the state of the print changes.",
            id: 3,
            brand: "OFF-WHITE",
            color: "white",
            category: "T-shirt",
            availableSizes: [46, 50, 52, 54]
        },
        {
            name: "T-shirt AAPE",
            price: 35,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/19627/aape-19627-1.jpg",
            article: 312454125,
            isAvailable: true,
            description: "The all-purpose T-shirt from Aape is made from 100% cotton.  The model is fitted, has a round neckline" +
                " and short sleeves.  The comfortable fit provides maximum comfort during use.  The T-shirt is decorated" +
                " with a large print in the chest area.  There is also an original print on the neck area.  It is made in" +
                " a contrasting color.  The color and state do not change over time.  Perfect for both walking and fitness.",
            id: 4,
            brand: "AAPE",
            color: "white",
            category: "T-shirt",
            availableSizes: [46, 50, 52, 54]
        },
        {
            name: "khudi NASA",
            price: 78,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/20540/nasa-20540-1.jpg",
            article: 312454125,
            isAvailable: true,
            description: "Stylish black NASA hoodie sewn in a semi-loose silhouette.  Jersey\n" +
                "on the three-thread looks elegant and will suit young people who understand a lot about fashion.\n" +
                "The product will be a good help on cool evenings during the demi-season.\n" +
                "It can also be worn under a dark bomber jacket.\n" +
                "\n" +
                "The product has a drawstring-adjustable hood, cuffs and a classic pass-through pocket.\n" +
                "The model is decorated with the US national flag on the left sleeve.  Chest print\n" +
                "in the form of the NASA emblem is the dominant design of the model.",
            id: 5,
            brand: "NASA",
            color: "black",
            category: "khudi",
            availableSizes: [46, 50, 52, 54]
        },
        {
            name: "NIKE AIR FORCE 1 LOW",
            price: 85,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/18837/nike-air-force-1-18837-1.jpg",
            article: 41288428,
            isAvailable: true,
            description: "The Nike Air Force 1 is one of the brand's most popular shoes.  The upper is made of artificial " +
                "leather, which perfectly releases excess heat.  The lacing system fits neatly into the image of the model. " +
                " Inside the model, there are soft inserts that provide additional comfort while walking.  The midsole " +
                "material is responsible for cushioning.  It is manufactured using Air technology.  It allows you to pay off any load. " +
                " Traction is provided by a unique rubber outsole pattern.  The model will perfectly highlight any look.",
            id: 6,
            brand: "Nike",
            color: "white",
            category: "footwear",
            availableSizes: [36, 37, 38, 39, 40]
        },
        {
            name: "ADIDAS OZWEEGO",
            price: 95,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/17252/adidas-ozweego-17252-1.jpg",
            article: 3213421,
            isAvailable: true,
            description: "ADIDAS OZWEEGO combine futurism and sporty style at the milestone of the retros.\n" +
                "Such a tandem creates an ambiguous feeling when looking at this model,\n" +
                "however, does not leave anyone indifferent.  The body is made from a combination\n" +
                "mesh material and special synthetic material,\n" +
                "forming smooth shapes.\n" +
                "\n" +
                "Adiprene + cushioning system combined with midsole\n" +
                "made of EVA provide a soft step, and also protects the foot from too\n" +
                "powerful hits on the ground.  This property allows you to use\n" +
                "this model is both basic and sports.",
            id: 7,
            brand: "Adidas",
            color: "white",
            category: "footwear",
            availableSizes: [36, 37, 38, 39, 40]
        },
        {
            name: "T-shirt OFF-WHITE",
            price: 40,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/15223/off-white-15223-1.jpg",
            article: 535242,
            isAvailable: true,
            description: "Stylish T-shirt from the youth brand Off-White made of eco-friendly material.  Due to the fitted cut," +
                " it can be used for walking and playing sports.  From the point of view of style, the designers approached in a new way. " +
                " They placed a large brand logo on the back for a unique look.  There are cuffs for ease of use. " +
                " After prolonged wear, the state of the print changes.",
            id: 8,
            brand: "OFF-WHITE",
            color: "white",
            category: "T-shirt",
            availableSizes: [46, 50, 52, 54]
        },
        {
            name: "T-shirt AAPE",
            price: 35,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/19626/aape-19626-1.jpg",
            article: 312454125,
            isAvailable: true,
            description: "The all-purpose T-shirt from Aape is made from 100% cotton.  The model is fitted, has a round neckline" +
                " and short sleeves.  The comfortable fit provides maximum comfort during use.  The T-shirt is decorated" +
                " with a large print in the chest area.  There is also an original print on the neck area.  It is made in" +
                " a contrasting color.  The color and state do not change over time.  Perfect for both walking and fitness.",
            id: 9,
            brand: "AAPE",
            color: "white",
            category: "T-shirt",
            availableSizes: [46, 50, 52, 54]
        },
        {
            name: "khudi NASA",
            price: 71,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/17884/nasa-17884-1.jpg",
            article: 312454125,
            isAvailable: true,
            description: "Stylish black NASA hoodie sewn in a semi-loose silhouette.  Jersey\n" +
                "on the three-thread looks elegant and will suit young people who understand a lot about fashion.\n" +
                "The product will be a good help on cool evenings during the demi-season.\n" +
                "It can also be worn under a dark bomber jacket.\n" +
                "\n" +
                "The product has a drawstring-adjustable hood, cuffs and a classic pass-through pocket.\n" +
                "The model is decorated with the US national flag on the left sleeve.  Chest print\n" +
                "in the form of the NASA emblem is the dominant design of the model.",
            id: 10,
            brand: "NASA",
            color: "black",
            category: "khudi",
            availableSizes: [46, 50, 52, 54]
        },
        {
            name: "NIKE AIR FORCE 1 LOW",
            price: 80,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/19764/nike-air-force-1-low-19764-1.jpg",
            article: 41288428,
            isAvailable: true,
            description: "The Nike Air Force 1 is one of the brand's most popular shoes.  The upper is made of artificial " +
                "leather, which perfectly releases excess heat.  The lacing system fits neatly into the image of the model. " +
                " Inside the model, there are soft inserts that provide additional comfort while walking.  The midsole " +
                "material is responsible for cushioning.  It is manufactured using Air technology.  It allows you to pay off any load. " +
                " Traction is provided by a unique rubber outsole pattern.  The model will perfectly highlight any look.",
            id: 11,
            brand: "Nike",
            color: "white",
            category: "footwear",
            availableSizes: [36, 37, 38, 39, 40]
        },
        {
            name: "ADIDAS OZWEEGO",
            price: 88,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/20932/adidas-ozweego-20932-1.jpg",
            article: 3213421,
            isAvailable: true,
            description: "ADIDAS OZWEEGO combine futurism and sporty style at the milestone of the retros.\n" +
                "Such a tandem creates an ambiguous feeling when looking at this model,\n" +
                "however, does not leave anyone indifferent.  The body is made from a combination\n" +
                "mesh material and special synthetic material,\n" +
                "forming smooth shapes.\n" +
                "\n" +
                "Adiprene + cushioning system combined with midsole\n" +
                "made of EVA provide a soft step, and also protects the foot from too\n" +
                "powerful hits on the ground.  This property allows you to use\n" +
                "this model is both basic and sports.",
            id: 12,
            brand: "Adidas",
            color: "white",
            category: "footwear",
            availableSizes: [36, 37, 38, 39, 40]
        },
        {
            name: "T-shirt OFF-WHITE",
            price: 40,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/19630/off-white-19630-1.jpg",
            article: 535242,
            isAvailable: true,
            description: "Stylish T-shirt from the youth brand Off-White made of eco-friendly material.  Due to the fitted cut," +
                " it can be used for walking and playing sports.  From the point of view of style, the designers approached in a new way. " +
                " They placed a large brand logo on the back for a unique look.  There are cuffs for ease of use. " +
                " After prolonged wear, the state of the print changes.",
            id: 13,
            brand: "OFF-WHITE",
            color: "white",
            category: "T-shirt",
            availableSizes: [46, 50, 52, 54]
        },
        {
            name: "T-shirt AAPE",
            price: 35,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/19627/aape-19627-1.jpg",
            article: 312454125,
            isAvailable: true,
            description: "The all-purpose T-shirt from Aape is made from 100% cotton.  The model is fitted, has a round neckline" +
                " and short sleeves.  The comfortable fit provides maximum comfort during use.  The T-shirt is decorated" +
                " with a large print in the chest area.  There is also an original print on the neck area.  It is made in" +
                " a contrasting color.  The color and state do not change over time.  Perfect for both walking and fitness.",
            id: 14,
            brand: "AAPE",
            color: "white",
            category: "T-shirt",
            availableSizes: [46, 50, 52, 54]
        },
        {
            name: "khudi NASA",
            price: 74,
            imgUrl: "https://outmaxshop.ru/components/com_jshopping/files/img_products/17901/nasa-17901-1.jpg",
            article: 312454125,
            isAvailable: true,
            description: "Stylish black NASA hoodie sewn in a semi-loose silhouette.  Jersey\n" +
                "on the three-thread looks elegant and will suit young people who understand a lot about fashion.\n" +
                "The product will be a good help on cool evenings during the demi-season.\n" +
                "It can also be worn under a dark bomber jacket.\n" +
                "\n" +
                "The product has a drawstring-adjustable hood, cuffs and a classic pass-through pocket.\n" +
                "The model is decorated with the US national flag on the left sleeve.  Chest print\n" +
                "in the form of the NASA emblem is the dominant design of the model.",
            id: 15,
            brand: "NASA",
            color: "black",
            category: "khudi",
            availableSizes: [46, 50, 52, 54]
        }
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