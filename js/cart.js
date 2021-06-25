list = () => {
    window.open("./list.html", "_self")
}
logout = () => {
    window.open("./login.html", "_self");
}
(() => {
    setTimeout(() => {
        var userInfoString = window.localStorage.getItem('userInfo');
        if (userInfoString) {
            var finalusername = JSON.parse(userInfoString)
            document.getElementById("login-username").innerText = finalusername.username;
        } else {
            window.open("../html/login.html", "_self");
        }
        addcartof();
    }, 0);
})()
addcartof=()=>{
var cartid=document.getElementById("cart-product");
var productstring = window.localStorage.getItem('cartItems');
var products=JSON.parse(productstring);
    var content = products.map((_pl, idx, arr) => {
        let finalPrice = Math.floor(_pl.price-(_pl.price*(_pl.discount/100)));
        var template = `<div class="childlistcontent">
    <img src="../img/${_pl.image}" width="250px" height="200px">
    <div class="inner-childcontent">
        <label class="brand-name">${_pl.brand}</label>
        <label class="product-name">${_pl.name}</label>
        <label class="final-price">&#8377; ${finalPrice}</label>
    </div>
    <label class="_remove_cart"><button class="cart-button" onclick=removecart("${idx}")>REMOVE FROM CART</button></lable>
</div>`;

        return template;

    });
    cartid.innerHTML=content;
}

removecart=(_plname)=>{
    var addedCartItems = [];
    var addedCartItemsString = window.localStorage.getItem('cartItems');

        addedCartItems = JSON.parse(addedCartItemsString);
        // addedCartItems.remove(product);
        addedCartItems.splice(_plname,1)
    window.localStorage.setItem('cartItems', JSON.stringify(addedCartItems));
    addcartof();
}