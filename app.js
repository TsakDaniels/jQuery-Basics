//jQuery

/*
$( document ).ready(function() {
    console.log( "document loaded" );
    
  });
  
  $( window ).on( "load", function() {
    console.log( "window loaded" );
  });
  
  
  function X(){
    console.log("hellooo")
  }
  
  $(document).ready(X);
  $(window).on("load", X);
  
  //$(".header").append("<h1>Restaurant</h1>")
  //$(".header").css("text-align", "center")
  //document.getElementByClassName("header").style.color = "blue";


  //tab1
  function createTokyoTab() {
    const tabDiv = document.querySelector("#tab-contents");
    
    let div2 = document.createElement("div");
    div2.style.cssText =
    "position:absolute;margin-top:50px;margin-left:80px;background-color:orange;width:400px;height:200px;border:3px solid black;";
  
    div2.classList.add("tabcontent");
    div2.id = "Tokyo";
  
    let h3 = document.createElement("h3");
    h3.innerHTML = "Contacts";
    div2.appendChild(h3);
  
    let p = document.createElement("p");
    p.innerHTML = "Contact us";
    div2.appendChild(p);
  
    tabDiv.appendChild(div2);
  }



  //tab2
  function createLondonTab() {
    const tabDiv = document.querySelector("#tab-contents");
    
    let div1 = document.createElement("div");
    div1.style.cssText =
      "position:absolute;margin-top:50px;background-color:orange;width:400px;height:200px;border:3px solid black;";
  
    div1.classList.add("tabcontent");
    div1.id = "London";
  
    let h3 = document.createElement("h3");
    h3.innerHTML = "Menu";
    div1.appendChild(h3);
  
    let p = document.createElement("p");
    p.innerHTML = "About the Menu";
    div1.appendChild(p);
  
    tabDiv.appendChild(div1);
  }


  function createButtonsInsideTabs() {
    const tabDiv = document.querySelector("#tab-contents");
  
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
  
    btn1.innerHTML = "Menu";
    btn2.innerHTML = "Contact";
  
    btn1.addEventListener("click", function (event) {
      openCity(event, "London");
    });
    btn2.addEventListener("click", function (event) {
      openCity(event, "Tokyo");
    });
  
    btn1.classList.add("tablinks");
    btn2.classList.add("tablinks");
  
    tabDiv.appendChild(btn1);
    tabDiv.appendChild(btn2);
  
    
  let header = document.createElement("h1")
  header.style.cssText = "text-align:center; color:white; font-size:45px"
  header.append("Restaurant")
  document.body.appendChild(header)
  
  
  const para = document.createElement("p");
  para.style.cssText = "text-align:center; color:white; font-size:20px"
  para.innerText = "Not too shabby";
  document.body.appendChild(para);
  }
  
  
  
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

createButtonsInsideTabs();
createLondonTab();
createTokyoTab();

*/


//background image
$("body").css("background-image", "url(/images/image.jpg)");

//toggle menu tab
$(document).ready(function(){
    $(menu).click(function(){
        $(".menuTab").toggle();
    })
})

//toggle contacts tab
$(document).ready(function(){
    $(contacts).click(function(){
        $(".contactsTab").toggle();
    })
})


//header
let title = document.createElement("h1")
document.body.append(title)
$(title).append("Restaurant").addClass("header");

//test to put the tabs in a div
let divTabs = document.createElement("div")

//menu
let menu = document.createElement('h3')
menu.append("MENU")
document.body.append(menu)
$(menu).addClass("tab")

//contacts
let contacts = document.createElement('h3')
contacts.append("CONTACTS")
document.body.append(contacts)
$(contacts).addClass("tab")


//menuTab
let menuTab = document.createElement("p")
menuTab.append("this is the info for menu")
//document.body.append(menuTab)
$(menuTab).addClass("menuTab")

//contactsTab
let contactsTab = document.createElement("p")
contactsTab.append("contacts:")
//document.body.append(contactsTab)
$(contactsTab).addClass("contactsTab")

//add the tabs inside the divtabs and append the divtab
$(divTabs).addClass("divTabs")
divTabs.appendChild(menuTab)
divTabs.appendChild(contactsTab)
document.body.append(divTabs)


let divReviews = document.createElement("div")
$(divReviews).addClass("containerReviews")

let reviews = document.createElement("p");
let text = "This is the greatest restaurant in the world!\n-Dalai Lama \n \n Best food ever! \n -Abraham Lincoln"
let text2 = "Hello" + "\r\n" + "world"
reviews.append(text)
$(reviews).addClass("reviews")
//document.body.append(reviews)
//$(".containerReviews").css("white-space", "pre-line")

divReviews.appendChild(reviews)
document.body.append(divReviews)
$(".containerReviews").css("white-space", "pre-line")