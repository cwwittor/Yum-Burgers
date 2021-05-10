document.addEventListener("DOMContentLoaded", (event) => {
    if (event) {
      console.info("DOM loaded");
    }
  
    const devourBtn = document.querySelectorAll(".devour");
  
    if (devourBtn) {
      devourBtn.forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          const id = e.target.getAttribute("data-id");
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
            console.log(`changed  to: ${id}`);
            location.reload("/");
        }).catch(err => {
            alert("something went wrong!");
            });
          });
        });
      }
    
  
    const createBurger = document.getElementById("create-form");
  
    if (createBurger) {
      createBurger.addEventListener("submit", (e) => {
        e.preventDefault();
  
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
          document.getElementById("newBurger").value = "";
  
          console.log("Created a new burger!");
          location.reload("/");
        });
      });
    }
  });