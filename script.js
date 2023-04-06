// Select the generate button and container elements
const generateBtn = document.querySelector("#generate-btn");
const container = document.querySelector(".container");

// Add a click event listener to the generate button
generateBtn.addEventListener("click", () => {
  // Get the value of the name input field
  const name = document.querySelector("#name").value;
  // Check if the name input field is not empty
  if (name !== "") {
    // Construct the URL for the Robohash image with the name and size parameters
    const imgUrl = `https://robohash.org/${name}.png?size=800x750&set=set3`;
    // Create a new div element for the Robohash image and add the appropriate CSS class
    const roboImage = document.createElement("div");
    roboImage.classList.add("robo-image");
    // Create a new img element for the Robohash image and set the source and alt attributes
    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = `Robohash image for ${name}`;
    // Add the img element to the div element
    roboImage.appendChild(img);
    // Add the div element to the container element
    container.appendChild(roboImage);
    // Add a CSS class to the container element to trigger the image to appear
    container.classList.add("generate-image");
  }
});

// Add an input event listener to the name input field
document.querySelector("#name").addEventListener("input", () => {
  // Check if the name input field is empty
  if (document.querySelector("#name").value === "") {
    // Select the Robohash image div element
    const roboImage = document.querySelector(".robo-image");
    // Check if the Robohash image div element exists
    if (roboImage) {
      // Remove the Robohash image div element
      container.removeChild(roboImage);
      // Remove the CSS class from the container element to trigger the image to disappear
      container.classList.remove("generate-image");
    }
  }
});
