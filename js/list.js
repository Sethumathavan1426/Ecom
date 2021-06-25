logout = () => {
    window.open("./login.html", "_self");
    window.localStorage.removeItem('userInfo');
}

cart = () => {
    window.open("./cart.html", "_self");
}

loadCategories = () => {
    var categories = PRODUCT_CATEGORY;
    var categoriesContainer = document.getElementById('product-category-content');
    var content = categories.map((_val) => {
        var template = `
        <div class="product-cat" onclick="listcontentpage('${_val.name}'); " id="${_val.name}-active-check">
            <img src="../img/${_val.image}" width="64" height="64">
            <label>${_val.name}</label>
        </div>
        `;

        return template;
    });

    categoriesContainer.innerHTML = content.join('');
}
(() => {
    setTimeout(() => {
        loadCategories();
        var userInfoString = window.localStorage.getItem('userInfo');
        if (userInfoString) {
            var userInfo = JSON.parse(userInfoString);
            document.getElementById('loggedInName').innerText = userInfo.username;
        } else {
            window.open("../html/login.html", "_self");
        }
    }, 0);
})();


listcontentpage = (_category) => {
    var ele = document.getElementById(`${_category}-active-check`);

    if (ele.classList.contains('product-cat-active')) {
        return;
    }

    //console.log(_category, PRODUCTS);
    var children = ele.parentElement.children;

    for (var i = 0; i < children.length; i++) {
        var item = children.item(i);
        if (item.classList.contains('product-cat-active')) {
            item.classList.remove('product-cat-active');
        }
    }

    ele.classList.add('product-cat-active');

    var product = PRODUCTS.find((_value) => {
        return _value.name === _category;
    });

    var productList = [];

    for (let i = 0; i < product.brands.length; i++) {
        var brand = product.brands[i];

        for (let j = 0; j < brand.products.length; j++) {
            var _product = brand.products[j];

            productList.push(_product);
        }
    }
    var displaycontent = document.getElementById("list-display");
    var content = productList.map((_pl) => {
        let finalPrice = Math.floor(_pl.price-(_pl.price*(_pl.discount/100)));
        var template = `<div class="childlistcontent">
    <img src="../img/${_pl.image}" width="250px" height="200px">
    <div class="inner-childcontent">
        <label class="brand-name">${_pl.brand}</label>
        <label class="product-name">${_pl.name}</label>
        <label class="final-price">&#8377; ${finalPrice}</label>
        <span class="price-display">
            <label class="product-price"><del>&#8377; ${_pl.price}</del></label>
            <label class="product-discount">${_pl.discount}% off</label>
        </span>
        <label><button class="cart-button" onclick=addtocart("${_pl.name}|${_category}")>ADD CART</button></lable>
    </div>
</div>`;

        return template;

    });

    displaycontent.innerHTML = content.join("");
}

addtocart = (_val_) => {
    var data = _val_.split('|');
    var _pl = data[0];
    var _category = data[1];

    console.log(_pl, _category);

    var productCategory = PRODUCTS.find((_value) => {
        return _value.name === _category;
    });

    var productList = [];

    for (let i = 0; i < productCategory.brands.length; i++) {
        var brand = productCategory.brands[i];

        for (let j = 0; j < brand.products.length; j++) {
            var _product = brand.products[j];

            productList.push(_product);
        }
    }

    var product = productList.find(_p => _p.name === _pl);

    console.log(product);

    var addedCartItems = [];
    var addedCartItemsString = window.localStorage.getItem('cartItems');

    if (!addedCartItemsString) {
        addedCartItems.push(product);
    } else {
        addedCartItems = JSON.parse(addedCartItemsString);
        addedCartItems.push(product);
    }

    window.localStorage.setItem('cartItems', JSON.stringify(addedCartItems));

    
}