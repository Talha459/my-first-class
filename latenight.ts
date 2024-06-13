 
 
var BBQMENU;
(function (BBQMENU) {
    BBQMENU["CHICKEN_TIKKA"] = "chicken-tikka";
    BBQMENU["BEHARI_BOTI"] = "behari-boti";
    BBQMENU["GOLA_KABAB"] = "gola-kabab";
    BBQMENU["SEEKH_KABAB"] = "seekh-kabab";
    BBQMENU["BEEF_BOTI"] = "beef-boti";
})(BBQMENU || (BBQMENU = {}));
var REVIEW;
(function (REVIEW) {
    REVIEW[REVIEW["GOOD"] = 0] = "GOOD";
    REVIEW[REVIEW["BAD"] = 1] = "BAD";
    REVIEW[REVIEW["DELICIOUS"] = 2] = "DELICIOUS";
})(REVIEW || (REVIEW = {}));
var BBQMENUORDER = {
    ORDER: BBQMENU.BEHARI_BOTI,
    PAYMENT: 200,
    REVIEW: REVIEW.DELICIOUS
};
console.log(BBQMENUORDER);