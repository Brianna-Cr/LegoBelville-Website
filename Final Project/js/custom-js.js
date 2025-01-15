// dont style the whole web with JS


/*
Brianna C - 200602233
    Final project:  Lego Belville

    Styling with JS:
                    1. Global Header AND Footer
                    2. Header and footer as well, as it will be same all round website (any page)
*/


document.addEventListener('DOMContentLoaded', (loaded) => {

    //test to see if JS is connected
    console.log('Welcome to the Lego Belville Console!');


    //global header
    document.getElementById("Belville-global-header").innerHTML =
        "<div id='Belville-header-logo-con'>" +
           " <a href='../HomePage/index.html'>" +
               " <img id='BelvilleHeaderLogo' src='../../img/Lego_Belville_logo.png' alt='Belville.Logo'> " +
            "</a>"+
        "</div>"+
    "<nav>"+
        "<menu id='menu'>" +
            "<li><a id='aboutus' href='../AboutUsPage/index.html' target='_self'>About Us</a></li>" +
            "<li><a id='product' href='../ShopPage/index.html' target='_self'>Products</a></li>" +
        "</menu>"+
    "</nav>";

    document.getElementById("Belville-global-header").style.cssText = "display: grid; height: 125px; background-color: #9500b3; grid-template-columns: 50% 50%;";
    document.getElementById("Belville-header-logo-con").style.cssText = "flex-grow: 1; height: 110px; width: auto; padding-top: 25px;";
    document.getElementById("BelvilleHeaderLogo").style.cssText = "width: auto; height: 75%;";
    document.getElementById("menu").style.cssText = "display: grid; font-size: 22px; color: #0e0e0e; align-items: center; grid-template-columns: 50% 50%; padding-top: 25px;";



    //global footer
    document.getElementById("Belville-global-footer").innerHTML =
        "<div id='Belville-footer-logo-con'>" +
            "<a href='../HomePage/index.html'><img id='BelvilleFooterLogo' src='../../img/Lego_Belville_logo.png' alt='BelVille Logo'></a>" +
        "</div>" +
        "<div id='AboutUsSection'>" +
            "<h5 id='h5'>ABOUT US</h5>" +
                " <a id='History' href='../AboutUsPage/index.html'><p>Our History!</p></a>" +
                "<p></p>" +
                "<p></p>" +
        "</div>" +
        "<div id='SupportSection'>" +
            "<h5 id='h5-2'>SUPPORT</h5>" +
                "<a id='Contact' href='../ContactPage/index.html' target='_self'><p>Contact Us</p></a>" +
                "<p></p>" +
                "<p></p>" +
        "</div>" +
        "<div></div>" + //want blank area
        "<div id='copyright'>"+
        "<h6>©2024 The LEGO Group. All rights reserved. Use of this site signifies your agreement to the Terms of Use.</h6>" +
        "</div>"
    ;

    document.getElementById("Belville-global-footer").style.cssText = "grid-area: footer; display: grid; height: auto; background-color: #9500b3; grid-template-columns: 33% 33% 33%; padding:20px;";
    document.getElementById("Belville-footer-logo-con").style.cssText = "flex-grow: 1; height: 110px; width: 200px; padding-top: 25px; text-align: center;";
    document.getElementById("BelvilleFooterLogo").style.cssText = "width: auto; height: 75%;";

    document.getElementById("AboutUsSection").style.cssText = "display: grid; text-decoration: none; font-size: 15px; color: #0e0e0e; text-align: center; padding: 10px;";
    document.getElementById("h5").style.cssText = "margin: 0px; padding-top: 25px; font-size: 20px;";
    document.getElementById("History").style.cssText = "height: 32px;";

    document.getElementById("SupportSection").style.cssText = "display: grid; text-decoration: none; font-size: 15px; color: #0e0e0e; text-align: center; padding:10px;";
    document.getElementById("h5-2").style.cssText = "margin: 0px; padding-top: 25px; font-size: 20px;";
    document.getElementById("Contact").style.cssText = "height: 32px";

    document.getElementById("copyright").style.cssText = "text-align: center; font-size: 2px; font-weight: lighter;";
});
