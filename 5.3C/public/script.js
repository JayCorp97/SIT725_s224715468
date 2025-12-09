window.onload = () => {
  fetch("/api/books")
    .then((res) => res.json())
    .then((books) => {
      const list = document.getElementById("books-list");

      books.forEach((book) => {
        const card = document.createElement("div");
        card.className = "book-card";

        const price = parseFloat(book.price.$numberDecimal).toFixed(2);

        card.innerHTML = `
          <div class="title">${book.title}</div>
          <div class="author">by ${book.author}</div>
          <div class="price">AUD $${price}</div>
        `;

        list.appendChild(card);
      });
    });
};
