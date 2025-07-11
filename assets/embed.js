// // embed.js

// // Array of card items to embed dynamically
// const embeddedContentData = [
//   {
//     title: "Osho Tapoban Meditation Tradition",
//     description: "Osho, known as a revolutionary spiritual leader, \"is a visionary who has inspired millions\"."
//   },
//   {
//     title: "Striking Natural Location",
//     description: "Nestled within the serene Nagarjun Hills, Zorba offers picturesque views and peaceful ambiance."
//   },
//   {
//     title: "Appetizing Vegetarian Food",
//     description: "The food Zorba serves is savory vegetarian dishes which will make your mouth watery. This vegetarian restaurant has high-quality meals."
//   }
// ];

// // Get the container where content will be injected
// const container = document.getElementById('embedded-content');

// if (container) {
//   embeddedContentData.forEach(item => {
//     // Create card wrapper
//     const card = document.createElement('div');
//     card.className = 'rounded-lg shadow-lg p-6 bg-white text-gray-800 flex flex-col justify-center items-center text-center cursor-default select-none';

//     // Create title element
//     const title = document.createElement('h3');
//     title.className = 'text-xl font-semibold mb-4 hover:text-[var(--logo-color)] transition-colors';
//     title.textContent = item.title;

//     // Create description paragraph
//     const desc = document.createElement('p');
//     desc.className = 'text-sm max-w-xs';
//     desc.textContent = item.description;

//     // Append title and description to card
//     card.appendChild(title);
//     card.appendChild(desc);

//     // Append card to container
//     container.appendChild(card);
//   });
// }