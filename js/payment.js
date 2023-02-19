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

const prices = [160, 90, 50, 60, 300, 80, 50, 90, 160, 70, 250, 100, 200, 80, 100, 30, 100, 120, 400, 140];

$(function(){
    quantitesInKg.forEach (function(value , key) {
        quantitesInKg.set(key,Number(localStorage.getItem(key)));
    });

    let counter = -1;
    let priceCounter = 0;
    let totalQuantity = 0;
    let totalPrice = 0;
    quantitesInKg.forEach (function(value , key) {
        if(quantitesInKg.get(key) != 0) {
            counter += 3;
            const markup = "<tr><td></td><td></td><td></td></tr>";
            $("table tbody").append(markup);
            $("table td").eq(counter-2).text(key);
            let qt = quantitesInKg.get(key);
            $("table td").eq(counter-1).text(qt + " kg \t");
            totalQuantity += Number(qt);
            $("table td").eq(counter).html("<span> &#8377 </span>" + qt*prices[priceCounter]);
            totalPrice += (qt*prices[priceCounter]);
        }
        priceCounter++;
    });
    $("table th").eq(4).text(totalQuantity + " kg");
    $("table th").eq(5).html("<span> &#8377 </span>" + totalPrice);
});

$("#order").click(function(){
    alert("Order placed \nbut we cannot deliver as we have no fruit stock,\nif you wanna buy, go to market \n\nThank Youuu...");
    localStorage.clear();
})