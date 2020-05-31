   'use strict'
   
    const openPopupBtn = document.getElementById("open_button");
    const popupContent = document.querySelector(".main-content__order-popup");
    const closePopupBtn = document.getElementById("close_button");
    const galleryBtn = document.getElementById("gallery-button");
    const galleryContent = document.querySelector(".fd__feedback__gallery__container");

    openPopupBtn.addEventListener("click", function(event) {
        event.preventDefault();
        popupContent.classList.add("main-content__order-popup--open");
    });

    closePopupBtn.addEventListener("click", function(event) {
        event.preventDefault();
        popupContent.classList.remove("main-content__order-popup--open");
    });

    galleryBtn.addEventListener("click", function(event) {
        event.preventDefault();

        if (galleryContent.classList.contains("fd__feedback__gallery__container--open")) {
            galleryContent.classList.remove("fd__feedback__gallery__container--open")
        } else {
        galleryContent.classList.add("fd__feedback__gallery__container--open");
        $(document).ready(function(){
            $('.fd__feedback__gallery').slick({
                nextArrow: document.getElementById("arrow-next"),
                prevArrow: document.getElementById("arrow-prev")
            });
          });};
    });


    $(".countdown-timer").TimeCircles(
        { time: {
            Days: { 
                show: false,
                 },
            Hours: {
                text: "",
                color: "ffcb00"
            },
            Minutes: {
                text: "",
                color: "#ffcb00"
            },
            Seconds: {
                text: "",
                color: "#ffcb00"
            }
        },
        circle_bg_color : "#ff1c00"}
    );

   
    