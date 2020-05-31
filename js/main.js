   'use strict'

   
   
    const openPopupBtn = document.getElementById("open_button");
    const popupContent = document.querySelector(".main-content__order-popup");
    const closePopupBtn = document.getElementById("close_button");
    const galleryBtn = document.getElementById("gallery-button");
    const galleryContent = document.querySelector(".fd__feedback__gallery__container");
    const dataSetter = document.getElementById("timer");

    $(document).ready(function(){
        $('.fd__feedback__gallery').slick({
            nextArrow: document.getElementById("arrow-next"),
            prevArrow: document.getElementById("arrow-prev")
        });
      });

    function getSecondsToTomorrow() {
        let now = new Date();
        let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
        let diff = tomorrow - now;
        return Math.round(diff/1000);
    }


    dataSetter.dataset.timer = getSecondsToTomorrow();

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
            galleryContent.classList.remove("fd__feedback__gallery__container--open");
        } else {
        galleryContent.classList.add("fd__feedback__gallery__container--open");
        $('.fd__feedback__gallery').slick('refresh');
       };
    });

    
        

    $(".countdown-timer").TimeCircles(
        { time: {
            Days: { 
                show: false,
                 },
            Hours: {
                text: "",
                color: "rgba(255, 203, 0, 0.6)"
            },
            Minutes: {
                text: "",
                color: "rgba(255, 203, 0, 0.6)"
            },
            Seconds: {
                text: "",
                color: "rgba(255, 203, 0, 0.6)"
            }
        },
        circle_bg_color : "rgba(255, 28, 0, 0.5)"}
    );

   
    