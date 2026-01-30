
document.getElementById("get-books-btn").addEventListener("click", loadBooks);

function loadBooks() {
  fetch("/api/books")
    .then((res) => res.json())
    .then((books) => {
      const list = document.getElementById("books-list");
      list.innerHTML = ""; // reset

      books.forEach((book) => {
        const card = document.createElement("div");
        card.className = "book-card";

        const price = parseFloat(book.price.$numberDecimal).toFixed(2);

        card.innerHTML = `
          <div><strong>${book.title}</strong></div>
          <div>by ${book.author}</div>
          <div>AUD $${price}</div>
        `;

        // clicking book fetches full details
        card.addEventListener("click", () => loadBookDetails(book._id));

        list.appendChild(card);
      });
    });
}

function loadBookDetails(id) {
  fetch(`/api/books/${id}`)
    .then((res) => res.json())
    .then((book) => {
      const price = parseFloat(book.price.$numberDecimal).toFixed(2);

      const box = document.getElementById("book-details");
      box.style.display = "block";

      box.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Year:</strong> ${book.year}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p><strong>Summary:</strong> ${book.summary}</p>
        <p><strong>Price:</strong> AUD $${price}</p>
      `;
    });
}
