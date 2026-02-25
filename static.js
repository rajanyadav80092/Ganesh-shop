// const products = [
//     { id: 1, name: "Shoes", price: 1200 },
//     { id: 2, name: "Watch", price: 2500 },
//     { id: 3, name: "Bag", price: 1500 }
// ];

// const productList = document.getElementById("product-list");

// products.forEach(product => {
//     const div = document.createElement("div");
//     div.className = "product";

//     div.innerHTML = `
//         <h3>${product.name}</h3>
//         <p>Price: ₹${product.price}</p>
//         <input type="text" placeholder="Write feedback" id="feedback-${product.id}">
//         <button onclick="submitFeedback(${product.id})">Submit</button>
//         <p id="show-${product.id}"></p>
//     `;

//     productList.appendChild(div);
// });

// function submitFeedback(id) {
//     const input = document.getElementById(`feedback-${id}`);
//     const feedbackText = input.value;

//     if (feedbackText.trim() === "") {
//         alert("Please enter feedback");
//         return;
//     }

//     document.getElementById(`show-${id}`).innerText =
//         "Feedback: " + feedbackText;

//     input.value = "";
// }