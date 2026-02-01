async function testAPI(url) {
  try {
    const res = await fetch(url);

    console.log(`\nTesting: ${url}`);
    console.log("Status:", res.status);

    const contentType = res.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const data = await res.json();
      console.log("Response:", data);
    } else {
      const text = await res.text();
      console.log("Non-JSON response:", text);
    }

  } catch (err) {
    console.error("Fetch error:", err.message);
  }
}

// Tests
testAPI("http://localhost:5000/api/student");
testAPI("http://localhost:5000/api/auth");
testAPI("http://localhost:5000/api/users");
testAPI("http://localhost:5000/api/recipes");
testAPI("http://localhost:5000/api/comments");
