function getPlant() {
  const plant = document.getElementById("plantName").value.trim().toLowerCase();

  if (!plant) {
    M.toast({html: 'Please enter a plant name!', classes: 'red'});
    return;
  }

  // Show loader, hide card
  document.getElementById("loader").style.display = "block";
  document.getElementById("resultCard").style.display = "none";

  fetch(`/api/plant?name=${plant}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("loader").style.display = "none";

      if (data.error) {
        M.toast({html: data.error, classes: 'red'});
        return;
      }

      document.getElementById("plantTitle").innerText = data.name;
      document.getElementById("plantDisease").innerText = data.disease;
      document.getElementById("plantCare").innerText = data.care;

      document.getElementById("resultCard").style.display = "block";
    })
    .catch(error => {
      document.getElementById("loader").style.display = "none";
      console.error(error);
      M.toast({html: 'Something went wrong!', classes: 'red'});
    });
}
