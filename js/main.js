    alert("подключился")

    
    const openPopupBtn = document.getElementById("open_button");
    const popupContent = document.querySelector(".main-content__order-popup");
    const closePopupBtn = document.getElementById("close_button");

    openPopupBtn.addEventListener("click", function(event) {
        event.preventDefault();
        popupContent.classList.add("main-content__order-popup--open");
    });

    closePopupBtn.addEventListener("click", function(event) {
        event.preventDefault();
        popupContent.classList.remove("main-content__order-popup--open");
    })
    //slider

    