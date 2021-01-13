// Make sure to wait to attach our handlers until the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  // UPDATE
  const devourItBtns = document.querySelectorAll("#devourBurger");

  // Set up the event listener for the devour buttons
  if (devourItBtns) {
    devourItBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute("data-id");
        const devouredState = {
          devoured: 1,
        };
        fetch(`/api/burgers/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(devouredState),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            location.reload("/");
          } else {
            alert("something went wrong!");
          }
        });
      });
    });
  }

  // CREATE
  const createBurgerBtn = document.getElementById("createBurgerForm");
  createBurgerBtn.addEventListener("submit", (e) => {
    e.preventDefault();

    // Grabs the input value
    const newBurger = {
      burger_name: document.getElementById("burger_name").value.trim(),
      devoured: document.getElementById("devoured").checked,
    };

    // Send POST request to create a new burger
    fetch("/api/burgers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBurger),
    }).then(() => {
      // Empty the form
      document.getElementById("burger_name").value = "";

      // Reload the page so the user can see the new burger
      console.log("Created a new burger!");
      location.reload("/");
    });
  });

  // DELETE
  const deleteBurgerBtns = document.querySelectorAll("#deleteBurger");

  // Set up the event listener for the devour buttons
  if (deleteBurgerBtns) {
    deleteBurgerBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute("data-id");

        fetch(`/api/burgers/${id}`, {
          method: "DELETE",
        });
        console.log("Deleted burger with id: " + id);

        location.reload("/");
      });
    });
  }
});
