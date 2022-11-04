$ (function (){ //same as document.addEventListener("DOMContentLoaded")
  
    // same as document.querySelector("#navbarToggle").addEventListener("blur")

    $("#navbarToggle").blur(function (event){
        let screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
           
        }
    });

});

/*// Setting our home page to load dynamically
(function (global){
    let ab = {}; //abbreviation for our site name ab
     //let homeHtml = "index.html //snippet/home-snip.html";

     //let allCategoriesUrl =
     //"http://ayos-restaurant.herokuapp.com/categories.json";
     let categoriesTitleHtml = "snippet/cat-site-snip.html";
     let categoryHtml = "snippet/cat-snip.html";
     //let menuItemsUrl = 
       // "http://ayos-restaurant.herokuapp.com/menu_items.json?category=";
       // let menuItemHtml = "snippets/menu-item.html";

    //  Convenience function for inserting innerHTML for 'select'
    let insertHtml = function (selector, html) {
        let targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    // Show loading icon inside element indetified by 'selector'.
    let showLoading = function (selector) {
        let html = "<div class = 'text-center'>";
        html += "<img src = 'images/loading.gif'></div>";
        insertHtml(selector, html);
    };

    //Return substitute of '{{propName}}'
    // with propValue in given 'string'
    //The next line of code is use to grab the cat-snip as a string then substitute it with a value
    // The insert property do the substituting

    let insertProperty = function (string, propName, propValue) {
        let propToReplace = "{{" + propName + "}}";
        string = string
        .replace(new RegExp(propToReplace, "g"), propValue); //RegExp is to ensure the replacement occurn in every where the word apperaed
        return string;
    }

    // Remove the class 'active' from home and switch to menu button
    let switchMenuToActive = function () {
        //Remove 'active' from home button 
        let classes = document.querySelector("#navHomeButton").className;
       classes = classes.replace(new RegExp("active", "g"), "");
       document.querySelector("#navHomeButton").className = classes;

       // Add 'active' to menu button if not alreay there
       classes = document.querySelector("#navMenuButton").className;
       if (classes.indexOf("active") == -1){
        classes += " active";
        document.querySelector("#navMenuButton").className = classes;
       }
    };


    // On page load (before images or css)
    document.addEventListener("DOMContentLoaded", function (event){
        // on first load show home view
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function (responseText){
                document.querySelector("#main-content")
                .innerHTML = responseText;
            },
            false);
    });
    ab.loadMenuCategories = function () {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            allCategoriesUrl,
            buildAndShowCategoriesHTML);
    };
    //LOAD the menu items view
    // categoryShort is a short name for a category
    ab.loadMenuItems = function (categoryShort) {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            menuItemsUrl + categoryShort,
            buildAndShowMenuItemsHTML);
    };

    //Builds HTML for the categories page based on the data from the server
    function buildAndShowCategoriesHTML (categories){
        // load title snuppet of categories page
        $ajaxUtils.sendGetRequest(
            categoriesTitleHtml,
function (categoriesTitleHtml) {
    //retrieve single category snip
    $ajaxUtils.sendGetRequest(
        categoryHtml,
        function (categoryHtml) {
          let categoriesViewHtml = 
                buildCategoriesViewHtml(
                        categories,
                        categoriesTitleHtml,
                         categoryHtml);
                insertHtml("#main-content", categoriesViewHtml);
                },
                false);
            },
        false);
    }

    // using categories data and snippets html
    // build categories view HTML to be inserted into page
    function buildAndShowCategoriesHtml(categories,
                                        categoriesTitleHtml,
                                        categoryHtml){
    let finalHtml = categoriesTitleHtml;
    finalHtml += "<section class='row'>";
    //loop over categories
    for (let i = 0; i < categories.length; i++) {
        let html = categoryHtml;
        let name = "" + categories[i].name;
        let short_name = categories[i].name;
        html = 
            insertProperty(html, "name", name);
        html = 
            insertProperty(html,
                            "short_name",
                            short_name);
        finalHtml += html;
    }
    finalHtml += "</section>";
    return finalHtml;
    }
    //BUILDS HTML for the single category page based on the data
    //from server 
    function buildAndShowMenuItemsHTML (categoryMenuItems) {
        //Load title snippet of menu items page
        $ajaxUtils.sendGetRequest(
            menuItemsTitleHtml,
            function (menuItemTitleHtml) {
//RETRIEVE single menu item snippet
    $ajaxUtils.sendGetRequest(
        menuItemHtml,
    function (menuItemHtml){
        let menuItemsViewHtml = 
        buildMenuItemsViewHtml(categoryMenuItems,
                               menuItemsTitleHtml,
                               menuItemHtml);
        insertHtml("#main-content", menuItemsViewHtml);
    },
    false);
   },
        false);
    }
    // Using category and menu items data and snippet html
    //build menu items view Html to be inserted into page
    function buildMenuItemsViewHtml(categoryMenuItems,
                                    menuItemsTitleHtml,
                                    menuItemHtml) {
        menuItemsTitleHtml = 
         insertProperty(menuItemsTitleHtml,
                        "special_instructions",
                        categoryMenuItems.category.special_instructions);
        let finalHtml = menuItemsTitleHtml;
        finalHtml += "<section class='row'>";

        // Loop over menu items
        let menuItems = categoryMenuItems.menu_items;
        let catShortName = categoryMenuItems.category.short_name;
        for (let i = 0; i < menuItems.length; i++) {
            // insert menu item values
            let html = menuItemHtml;
            html = 
            insertProperty(html, "short_name", menuItems[i].short_name);
            html = 
            insertProperty(html,
                           "catShortName",
                           catShortName);
            html = 
             insertItemPrice(html,
                             "price_small",
                              menuItems[i].price_small);
            html = 
            insertItemPortionName(html,
                                  "small_portion_name",
                                   menuItems[i].small_portion_name);
            html = 
             insertItemPrice(html,
                             "price_large",
                             menuItems[i].price_large );
            html = 
             insertItemPortionName(html,
                           "large_portion_name",
                            menuItems[i].large_portion_name);
            html = 
             insertProperty(html,
                            "name",
                            menuItems[i].description);
        // Add clearfix after second menu item
        if (i % 2 != 0) {
            html +=
                "<div class = 'clearfix visible-lglblock visible-md-block'></div>"
        }

        finalHtml += html;
        }
        finalHtml += "</section>";
        return finalHtml;
        }

        //Appends price with '$' if price exists
        function insertItemPrice(html,
                                 pricePropName,
                                 priceValue) {
        // If not specified, replace with empty string
        if (!priceValue) {
            return insertProperty(html, pricePropName, "");;
        }

        priceValue = "$" + priceValue.toFixed(2);
        html = insertProperty(html, pricePropName, priceValue);
        return html;
        }

        //Appends portion name in parens if it exists
        function insertItemPortionName(html,
                                        portionPropName,
                                        portionValue) {
         // If not specified, return original string
        if (!portionValue) {

        }   
                                        }
    global.$ab = ab;

})(window);*/