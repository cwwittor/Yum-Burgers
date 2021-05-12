document.addEventListener("DOMContentLoaded", (event) => {
    if (event) {
      console.info("DOM loaded");
    }
    
    const devourBtn = document.querySelectorAll(".devour");
  
    //This is when the devour button is clicked
    if (devourBtn) {
      devourBtn.forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          const id = e.target.getAttribute("data-id");
          //sets the boolean to true for the burger
          const burgerDevoured = {
            devoured: true,
          };

          fetch(`/api/burgers/${id}`, {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(burgerDevoured),
        }).then((response) => {
            location.reload("/");
        }).catch(err => {
            alert("error with devour button");
            });
          });
        });
      }
    
  
    const createBurger = document.getElementById("create-form");

    //This is when the create button is clicked
    if (createBurger) {
      createBurger.addEventListener("submit", (e) => {
        e.preventDefault();
  
        //new burger name
        const newBurger = {
          burger_name: document.getElementById("newBurger").value.trim(),
        };
  

        fetch("/api/burgers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBurger),
        }).then((response) => {
          //set val back to empty
          document.getElementById("newBurger").value = "";
          location.reload("/");
        });
      });
    }
  });