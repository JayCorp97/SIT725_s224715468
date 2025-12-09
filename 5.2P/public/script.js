window.onload = function () {
  fetch("/api/books")
    .then((res) => res.json())
    .then((data) => {
      const list = document.getElementById("books-list");

      data.forEach((book) => {
        const li = document.createElement("li");
        li.textContent = `${book.title} — ${book.author}`;
        list.appendChild(li);
      });
    })
    .catch((err) => console.error("Error fetching books:", err));
};
