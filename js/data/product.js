const PRODUCT_CATEGORY = [
    { name: "Mobiles", image: "Mobiles.png", brands: [] },
    { name: "Electronics", image: "Electronics.png", brands: [] },
    { name: "Toys", image: "Toys.png", brands: [] },
    { name: "Grocery", image: "Grocery.png", brands: [] },
    { name: "Fashion", image: "Fashion.png", brands: [] },
    { name: "Home", image: "Home.png", brands: [] },
    { name: "Appliances", image: "Appliances.png", brands: [] },
    { name: "Travel", image: "Travel.png", brands: [] },
];

constructProductList = () => {
    var categories = PRODUCT_CATEGORY;
    var nameStrings = [];

    categories.forEach((_c) => {
        var brandNames = [];
        var brandNameCount = 20;
        var productOnEachBrand = 20;

        for (let i = 0; i < brandNameCount; i++) {
            let brand = {
                name: `${_c.name}_Brand_Name_${i + 1}`,
                category: {
                    name: _c.name,
                    image: _c.image
                },
                products: []
            };

            nameStrings.push(`${brand.name}.png`);

            for (let j = 0; j < productOnEachBrand; j++) {
                let price = Math.floor(Math.random() * 10000);
                let discount = Math.floor(Math.random() * 100);
                let product = {
                    name: `${brand.name}_Product_Name_${j + 1}`,
                    brand: brand.name,
                    price: price,
                    discount: discount,
                    image: `${brand.name}.png`
                };

                brand.products.push(product);
            }

            brandNames.push(brand);
        }

        _c.brands.push(...brandNames);
    });

    console.log(categories, nameStrings);
}

const IMAGE_NAMES = [
    "Mobiles_Brand_Name_1.png",
    "Mobiles_Brand_Name_2.png",
    "Mobiles_Brand_Name_3.png",
    "Mobiles_Brand_Name_4.png",
    "Mobiles_Brand_Name_5.png",
    "Mobiles_Brand_Name_6.png",
    "Mobiles_Brand_Name_7.png",
    "Mobiles_Brand_Name_8.png",
    "Mobiles_Brand_Name_9.png",
    "Mobiles_Brand_Name_10.png",
    "Mobiles_Brand_Name_11.png",
    "Mobiles_Brand_Name_12.png",
    "Mobiles_Brand_Name_13.png",
    "Mobiles_Brand_Name_14.png",
    "Mobiles_Brand_Name_15.png",
    "Mobiles_Brand_Name_16.png",
    "Mobiles_Brand_Name_17.png",
    "Mobiles_Brand_Name_18.png",
    "Mobiles_Brand_Name_19.png",
    "Mobiles_Brand_Name_20.png",
    "Electronics_Brand_Name_1.png",
    "Electronics_Brand_Name_2.png",
    "Electronics_Brand_Name_3.png",
    "Electronics_Brand_Name_4.png",
    "Electronics_Brand_Name_5.png",
    "Electronics_Brand_Name_6.png",
    "Electronics_Brand_Name_7.png",
    "Electronics_Brand_Name_8.png",
    "Electronics_Brand_Name_9.png",
    "Electronics_Brand_Name_10.png",
    "Electronics_Brand_Name_11.png",
    "Electronics_Brand_Name_12.png",
    "Electronics_Brand_Name_13.png",
    "Electronics_Brand_Name_14.png",
    "Electronics_Brand_Name_15.png",
    "Electronics_Brand_Name_16.png",
    "Electronics_Brand_Name_17.png",
    "Electronics_Brand_Name_18.png",
    "Electronics_Brand_Name_19.png",
    "Electronics_Brand_Name_20.png",
    "Toys_Brand_Name_1.png",
    "Toys_Brand_Name_2.png",
    "Toys_Brand_Name_3.png",
    "Toys_Brand_Name_4.png",
    "Toys_Brand_Name_5.png",
    "Toys_Brand_Name_6.png",
    "Toys_Brand_Name_7.png",
    "Toys_Brand_Name_8.png",
    "Toys_Brand_Name_9.png",
    "Toys_Brand_Name_10.png",
    "Toys_Brand_Name_11.png",
    "Toys_Brand_Name_12.png",
    "Toys_Brand_Name_13.png",
    "Toys_Brand_Name_14.png",
    "Toys_Brand_Name_15.png",
    "Toys_Brand_Name_16.png",
    "Toys_Brand_Name_17.png",
    "Toys_Brand_Name_18.png",
    "Toys_Brand_Name_19.png",
    "Toys_Brand_Name_20.png",
    "Grocery_Brand_Name_1.png",
    "Grocery_Brand_Name_2.png",
    "Grocery_Brand_Name_3.png",
    "Grocery_Brand_Name_4.png",
    "Grocery_Brand_Name_5.png",
    "Grocery_Brand_Name_6.png",
    "Grocery_Brand_Name_7.png",
    "Grocery_Brand_Name_8.png",
    "Grocery_Brand_Name_9.png",
    "Grocery_Brand_Name_10.png",
    "Grocery_Brand_Name_11.png",
    "Grocery_Brand_Name_12.png",
    "Grocery_Brand_Name_13.png",
    "Grocery_Brand_Name_14.png",
    "Grocery_Brand_Name_15.png",
    "Grocery_Brand_Name_16.png",
    "Grocery_Brand_Name_17.png",
    "Grocery_Brand_Name_18.png",
    "Grocery_Brand_Name_19.png",
    "Grocery_Brand_Name_20.png",
    "Fashion_Brand_Name_1.png",
    "Fashion_Brand_Name_2.png",
    "Fashion_Brand_Name_3.png",
    "Fashion_Brand_Name_4.png",
    "Fashion_Brand_Name_5.png",
    "Fashion_Brand_Name_6.png",
    "Fashion_Brand_Name_7.png",
    "Fashion_Brand_Name_8.png",
    "Fashion_Brand_Name_9.png",
    "Fashion_Brand_Name_10.png",
    "Fashion_Brand_Name_11.png",
    "Fashion_Brand_Name_12.png",
    "Fashion_Brand_Name_13.png",
    "Fashion_Brand_Name_14.png",
    "Fashion_Brand_Name_15.png",
    "Fashion_Brand_Name_16.png",
    "Fashion_Brand_Name_17.png",
    "Fashion_Brand_Name_18.png",
    "Fashion_Brand_Name_19.png",
    "Fashion_Brand_Name_20.png",
    "Home_Brand_Name_1.png",
    "Home_Brand_Name_2.png",
    "Home_Brand_Name_3.png",
    "Home_Brand_Name_4.png",
    "Home_Brand_Name_5.png",
    "Home_Brand_Name_6.png",
    "Home_Brand_Name_7.png",
    "Home_Brand_Name_8.png",
    "Home_Brand_Name_9.png",
    "Home_Brand_Name_10.png",
    "Home_Brand_Name_11.png",
    "Home_Brand_Name_12.png",
    "Home_Brand_Name_13.png",
    "Home_Brand_Name_14.png",
    "Home_Brand_Name_15.png",
    "Home_Brand_Name_16.png",
    "Home_Brand_Name_17.png",
    "Home_Brand_Name_18.png",
    "Home_Brand_Name_19.png",
    "Home_Brand_Name_20.png",
    "Appliances_Brand_Name_1.png",
    "Appliances_Brand_Name_2.png",
    "Appliances_Brand_Name_3.png",
    "Appliances_Brand_Name_4.png",
    "Appliances_Brand_Name_5.png",
    "Appliances_Brand_Name_6.png",
    "Appliances_Brand_Name_7.png",
    "Appliances_Brand_Name_8.png",
    "Appliances_Brand_Name_9.png",
    "Appliances_Brand_Name_10.png",
    "Appliances_Brand_Name_11.png",
    "Appliances_Brand_Name_12.png",
    "Appliances_Brand_Name_13.png",
    "Appliances_Brand_Name_14.png",
    "Appliances_Brand_Name_15.png",
    "Appliances_Brand_Name_16.png",
    "Appliances_Brand_Name_17.png",
    "Appliances_Brand_Name_18.png",
    "Appliances_Brand_Name_19.png",
    "Appliances_Brand_Name_20.png",
    "Travel_Brand_Name_1.png",
    "Travel_Brand_Name_2.png",
    "Travel_Brand_Name_3.png",
    "Travel_Brand_Name_4.png",
    "Travel_Brand_Name_5.png",
    "Travel_Brand_Name_6.png",
    "Travel_Brand_Name_7.png",
    "Travel_Brand_Name_8.png",
    "Travel_Brand_Name_9.png",
    "Travel_Brand_Name_10.png",
    "Travel_Brand_Name_11.png",
    "Travel_Brand_Name_12.png",
    "Travel_Brand_Name_13.png",
    "Travel_Brand_Name_14.png",
    "Travel_Brand_Name_15.png",
    "Travel_Brand_Name_16.png",
    "Travel_Brand_Name_17.png",
    "Travel_Brand_Name_18.png",
    "Travel_Brand_Name_19.png",
    "Travel_Brand_Name_20.png"
]