//background image
$("body").css("background-image", "url(/images/image.jpg)");

//toggle menu tab
$(document).ready(function () {
  $(menu).click(function () {
    $(".menuTab").toggle();
    $(".contactsTab").css("display", "none");
  });
});

//toggle contacts tab
$(document).ready(function () {
  $(contacts).click(function () {
    $(".contactsTab").toggle();
    $(".menuTab").css("display", "none");
  });
});

//header
let title = document.createElement("h1");
//document.body.append(title)
$(title).append("Restaurant").addClass("header");

//test to put the tabs in a div
let divTabs = document.createElement("div");
//div for navbar
let divNav = document.createElement("div");

//menu
let menu = document.createElement("h3");
menu.append("MENU");
//document.body.append(menu)
$(menu).addClass("tab");

//contacts
let contacts = document.createElement("h3");
contacts.append("CONTACTS");
//document.body.append(contacts)
$(contacts).addClass("tab");
$(divNav).addClass("divNav");
divNav.appendChild(title);
divNav.appendChild(menu);
divNav.appendChild(contacts);
document.body.append(divNav);

//menuTab
let menuTab = document.createElement("p");
let menuText =
  "omelette: 5.00$ \n eggs: 3.00$ \n spaghetti with meatball: 6.50$ \n sausage and beans: 5.00$ \n grilled chicken with chips: 8.50$ \n soda: 1.00$ \n water 500ml: 0.50$";
menuTab.append(menuText);
//document.body.append(menuTab)
$(menuTab).addClass("menuTab");

//contactsTab
let contactsTab = document.createElement("p");
let contactText = "phone: 603-432-5633 \n mail:crustycrab@hotmail.com";
contactsTab.append(contactText);
//document.body.append(contactsTab)
$(contactsTab).addClass("contactsTab");

//add the tabs inside the divtabs and append the divtab
$(divTabs).addClass("divTabs");
divTabs.appendChild(menuTab);
divTabs.appendChild(contactsTab);
document.body.append(divTabs);

let divReviews = document.createElement("div");
$(divReviews).addClass("containerReviews");

let reviews = document.createElement("p");
let text =
  "This is the greatest restaurant in the world!\n-Dalai Lama \n \n Best food ever! \n -Abraham Lincoln \n\n Don't believe what they say on the internet! \n -Alexander the Great \n\n There is no burger in the menu!\n -Bruce Lee\n\n The cake is a lie!\n -Marie Curie";
reviews.append("REVIEWS\n\n", text);
$(reviews).addClass("reviews");
//document.body.append(reviews)
//$(".containerReviews").css("white-space", "pre-line")

divReviews.appendChild(reviews);
document.body.append(divReviews);
$(".containerReviews").css("white-space", "pre-line");
