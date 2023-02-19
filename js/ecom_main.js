const quantitesInKg = new Map([
    ["apple",0],
    ["avocado",0],
    ["banana",0],
    ["blueberry",0],
    ["cherry",0],
    ["coconut",0],
    ["cucumber",0],
    ["dates",0],
    ["grapes",0],
    ["guava",0],
    ["jackfruit",0],
    ["lemon",0],
    ["lichhi",0],
    ["mango",0],
    ["orange",0],
    ["papaya",0],
    ["peach",0],
    ["pineapple",0],
    ["strawberry",0],
    ["watermelon",0]
]);

// loading all quantities after page reload
quantitesInKg.forEach (function(value , key) {
    let id = "#" + key ;
    $(id).find("span").text(Number(localStorage.getItem(key)));
});

// Quantity incrementing
$("div.btn-group button:last-child").click(function(){
    let quantity = parseInt($(this).parent().find("span").text());
    quantity++;
    
    // save the qauntity in local storage
    let id = $(this).closest('div').attr('id');
    localStorage.setItem(id,quantity);
    $(this).parent().find("span").text(localStorage.getItem(id)); 
});

// Quantity decrementing 
$("div.btn-group button:first-child").click(function(){
    let quantity = parseInt($(this).parent().find("span").text());
    if (quantity > 0) {
        quantity--;
    }

    // save the quantity in local storage 
    let id = $(this).closest('div').attr('id');
    localStorage.setItem(id,quantity); 
    $(this).parent().find("span").text(localStorage.getItem(id));
});

// function to be called on clicking of buy button
$(".buy").click(function(){
    let quantity = parseInt($(this).prev().find("span").text());
    // open the payment page
    if (quantity != 0) {
        window.open("../html/payment.html", "_blank");
    }
    
});

function search() {
    const cards = $("div.card");
    let filter = $("#find").val().toUpperCase();
    for (i = 0; i < cards.length; i++) {
        a = cards[i].getElementsByTagName("h5")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}














