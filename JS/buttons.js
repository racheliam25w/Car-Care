function showPopup(number) {
    // Create a div element for the message box
    var messageBox = document.createElement("div");

    // Create a paragraph element for the message text
    var messageText = document.createElement("p");
    messageText.textContent = getMaintenanceMessage(number).message; // Retrieve only the message text

    // Append the message text to the message box
    messageBox.appendChild(messageText);

    // Insert a line break for spacing
    messageBox.appendChild(document.createElement("br"));

    // Create a div to contain the image and link, and center it
    var contentContainer = document.createElement("div");
    contentContainer.style.textAlign = "center";

    // Create an img element for the image
    var image = document.createElement("img");
    image.src = getMaintenanceMessage(number).imageUrl; // Retrieve only the image URL
    image.alt = "Maintenance Image"; // Set alt attribute for accessibility

    // Set fixed width and height for the image
    image.style.width = "50%"; // Adjust width as needed
    image.style.height = "50%"; // Adjust height as needed

    // Append the image to the content container
    contentContainer.appendChild(image);

    // Create an anchor element for the link
    var link = document.createElement("a");
    link.textContent = "More Info";
    link.href = "../../includes/html/Tutorial.html#" + number;
    link.style.color = "yellow";
    link.style.marginLeft = "10px"; // Adjust as needed

    // Append the link to the content container
    contentContainer.appendChild(link);

    // Append the content container to the message box
    messageBox.appendChild(contentContainer);

    // Apply some styles to the message box
    messageBox.style.position = "fixed";
    messageBox.style.top = "50%";
    messageBox.style.left = "50%";
    messageBox.style.transform = "translate(-50%, -50%)";
    messageBox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    messageBox.style.color = "white";
    messageBox.style.padding = "10px";
    messageBox.style.borderRadius = "5px";
    messageBox.style.zIndex = "9999"; // Ensure it's on top
    messageBox.style.fontSize = "20px";

    // Append the message box to the body
    document.body.appendChild(messageBox);

    // Remove the message box after 5 seconds
    setTimeout(function () {
        messageBox.remove();
    }, 5000);
}


function getMaintenanceMessage(number) {
    var message;
    var imageUrl; // Variable to store image URL
    switch (number) {
        case 1:
            message = "Air cabin filter: Filters the air entering the cabin, trapping dust, pollen, and other particles to ensure clean air for passengers.";
            imageUrl = '../../Img/message/1.jpeg';
            break;
        case 2:
            message = "Fluids: Essential liquids such as engine oil, coolant, transmission fluid, brake fluid, and power steering fluid that help lubricate, cool, and operate various parts of the car.";
            imageUrl = '../../Img/message/2.jpg';
            break;
        case 3:
            message = "Engine air filter: Cleans the air entering the engine, preventing dirt and debris from damaging engine components and ensuring efficient combustion.";
            imageUrl = '../../Img/message/3.jpeg';
            break;
        case 4:
            message = "Wash and wax: Regular cleaning and waxing protect the car's paint from dirt, grime, and UV rays, preserving its appearance and resale value.";
            imageUrl = '../../Img/message/4.jpeg';
            break;
        case 5:
            message = "AC: Controls the temperature and humidity inside the car, keeping occupants comfortable by circulating cool air in warm weather.";
            imageUrl = '../../Img/message/5.jpeg';
            break;
        case 6:
            message = "Brakes: Responsible for slowing or stopping the car by applying friction to the wheels, converting kinetic energy into heat energy.";
            imageUrl = '../../Img/message/6.jpeg';
            break;
        case 7:
            message = "Tire tread: The pattern of grooves on the tire's surface that provides traction and grip on the road, essential for safe driving in various conditions.";
            imageUrl = '../../Img/message/7.jpeg';
            break;
        case 8:
            message = "Headlights, taillights, and signals: Illuminate the road ahead, indicate the car's position and direction of travel, and communicate with other drivers to ensure safe driving.";
            imageUrl = '../../Img/message/8.jpeg';
            break;
        case 9:
            message = "Tire pressure: The amount of air inside the tires, crucial for optimal performance, fuel efficiency, and safety. Proper tire pressure ensures even wear and proper handling.";
            imageUrl = '../../Img/message/9.jpeg';
            break;
        case 10:
            message = "Wiper blades: Clear rain, snow, and debris from the windshield, improving visibility and safety during inclement weather.";
            imageUrl = '../../Img/message/10.jpeg';
            break;
        case 11:
            message = "Oil changes: Regularly replacing the engine oil and oil filter helps lubricate engine components, reduce friction, and remove contaminants, prolonging the engine's life and maintaining performance.";
            imageUrl = '../../Img/message/11.jpeg';
            break;
    }
    // Concatenate the message and link
    return { message: message, imageUrl: imageUrl };
}


