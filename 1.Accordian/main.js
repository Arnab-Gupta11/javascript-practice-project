const Data = [
  {
    question: "What makes Santorini, Greece one of the most beautiful places in the world?",
    answer:
      "Santorini is renowned for its stunning whitewashed buildings with blue-domed roofs, dramatic sunsets, and crystal-clear Aegean waters. Perched atop cliffs, it offers breathtaking views of the caldera, a volcanic crater that adds a sense of wonder to the island's charm.",
  },
  {
    question: "Why is the Great Barrier Reef in Australia considered a natural wonder?",
    answer:
      "The Great Barrier Reef is the world's largest coral reef system, boasting vibrant marine life, coral gardens, and crystal-clear waters. It's a haven for divers and snorkelers who wish to explore the colorful underwater world and experience the biodiversity of this UNESCO World Heritage site.",
  },
  {
    question: "What makes Machu Picchu in Peru so special?",
    answer:
      "Machu Picchu, an ancient Incan city nestled in the Andes Mountains, is both a historical and natural wonder. Its remarkable stone architecture and stunning location, surrounded by lush greenery and mist-covered peaks, make it one of the most picturesque destinations on Earth.",
  },
  {
    question: "How does Bora Bora, French Polynesia, captivate visitors?",
    answer:
      "Bora Bora is famous for its turquoise lagoon, overwater bungalows, and the majestic Mount Otemanu. Visitors are enchanted by the island’s serene atmosphere, crystal-clear waters teeming with marine life, and luxurious resorts that provide a perfect tropical escape.",
  },
  {
    question: "What gives Norway’s fjords their breathtaking beauty?",
    answer:
      "Norway’s fjords, like Geirangerfjord and Nærøyfjord, are known for their deep blue waters surrounded by towering cliffs and waterfalls. These glacially carved landscapes offer a dramatic and serene setting, often accompanied by picturesque villages and scenic hiking trails.",
  },
];
const accordionWrapper = document.querySelector(".accordion");

function createAccordionData() {
  accordionWrapper.innerHTML = Data.map((item, index) => {
    return `
      <div class="accordion-item">
      <div class="accordion-title">
      <h3>${item.question}</h3>
       <i class="fa-solid fa-arrow-down"></i>
      </div>
      <div class="accordion-content">
      <p>${item.answer}</p>
      </div>
      </div>
    `;
  }).join(" ");
}
createAccordionData();

const accordianTitles = document.querySelectorAll(".accordion-title");
accordianTitles.forEach((currentTitles) => {
  currentTitles.addEventListener("click", (e) => {
    if (currentTitles.classList.contains("active")) {
      currentTitles.classList.remove("active");
    } else {
      const getAllActiveClasses = document.querySelectorAll(".active");
      getAllActiveClasses.forEach((currentItem) => {
        currentItem.classList.remove("active");
      });
      currentTitles.classList.add("active");
    }
  });
});
