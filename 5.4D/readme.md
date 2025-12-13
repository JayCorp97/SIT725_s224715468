<h2>Books Catalog – MVC + DATABASE(SIT725 5.3C)</h2>

This project implements a minimal Books Catalog application using the MVC (Model–View–Controller) pattern, following the structure from the SIT725 Week 5 practical.

The system includes:

A read-only API built with Node.js + Express

MVC architecture (Model → Service, Controller, Routes)

A simple client in /public using Vanilla HTML, CSS, and JavaScript

An in-memory catalog of five predefined books supplied in the task

API endpoints to retrieve all books or a single book by ID

<strong>API Endpoints</strong>
<table>
  <tr>
    <th>Method</th>
    <th>Route</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET	/api/books</td>
    <td>Returns</td>
    <td>all books</td>
  <tr>
    <td>GET	/api/books/:id</td>	 
    <td>Returns</td>
    <td>a single book by ID</td>
  </tr>
</table>


<strong>Book Dataset (In-Memory)</strong>

I have use seed.js

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

Installation commands
---------------------

# Initialize project (if not already)
npm init -y

# Install express
npm install express 

# (Optional) Install mongodb
npm install mongoose

