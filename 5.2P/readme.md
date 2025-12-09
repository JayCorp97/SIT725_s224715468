<h2>Books Catalog – MVC (SIT725 5.2P)</h2>

This project implements a minimal Books Catalog application using the MVC (Model–View–Controller) pattern, following the structure from the SIT725 Week 5 practical.

The system includes:

A read-only API built with Node.js + Express

MVC architecture (Model → Service, Controller, Routes)

A simple client in /public using Vanilla HTML, CSS, and JavaScript

An in-memory catalog of five predefined books supplied in the task

API endpoints to retrieve all books or a single book by ID

<strong>API Endpoints</strong>
Method	Route	Description
GET	/api/books	Returns all books
GET	/api/books/:id	Returns a single book by ID



<strong>Book Dataset (In-Memory)</strong>

The following books (exactly as provided in the task) are stored in services/books.service.js:

The Three-Body Problem — Liu Cixin (2008)
Science Fiction

Jane Eyre — Charlotte Brontë (1847)
Classic

Pride and Prejudice — Jane Austen (1813)
Classic

The English Patient — Michael Ondaatje (1992)
Historical Fiction

Small Gods — Terry Pratchett (1992)
Fantasy
