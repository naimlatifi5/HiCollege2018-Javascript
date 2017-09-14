const taxRate = 0.13;

 const couponCodes = ['BLACKFRIDAY', 'FREESHIP', 'HOHOHO'];

 function formatPrice(price) {
    // .. do some formatting
    return formattedPrice;
}

 function addTax(price) {
    return price * (1 + taxRate);
}

 function discountPrice(price, percentage) {
    return price * (1 - percentage);
}

 const helloWorld = () => {
    return "hello world as module";
 }

// export all at once

module.exports = {
   couponCodes : couponCodes,
   formatPrice : formatPrice,
   addTax : addTax,
   discountPrice: discountPrice,
   helloWorld: helloWorld
}
