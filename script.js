document.getElementById("submitButton").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value;
  const resultDiv = document.getElementById("result");

  if (name) {
    fetch(`https://api.nationalize.io?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.country) {
        //   resultDiv.innerHTML = `
        //                 <h2>Possible Nationalities:</h2>
        //                 <ul>
        //                     ${data.country
        //                       .map(
        //                         (country) =>
        //                           `<li>${
        //                             country.country_id
        //                           } <img src="https://flagcdn.com/24x18/${"uz"}.png" /> - ${(
        //                             country.probability * 100
        //                           ).toFixed(2)}%</li>`
        //                       )
        //                       .join("")}
        //                 </ul>
        //             `;
        resultDiv.innerHTML =' <h2>Possible Nationalities:</h2>'
        
        data.country.map((country, index) => {
              console.log(country.country_id.toLowerCase());
            const wrapper = document.createElement("div");
            const img = document.createElement("img");
            const davlat = document.createElement("span");
            img.src = `https://flagcdn.com/24x18/${country.country_id.toLowerCase()}.png`;
            const foiz = document.createElement("span");
            davlat.innerHTML = country.country_id + ' ';
            foiz.innerHTML = '  '+ (country.probability * 100).toFixed(1) + "% ";
            wrapper.innerHTML = `<span>${index+1}</span>  `
            wrapper.classList.add("natija");
            wrapper.appendChild(img);
            wrapper.appendChild(davlat);
            wrapper.appendChild(foiz);

            resultDiv.appendChild(wrapper);
          });
        } else {
          resultDiv.innerHTML = "No data found.";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        resultDiv.innerHTML = "An error occurred while fetching data.";
      });
  } else {
    resultDiv.innerHTML = "Please enter a name.";
  }
});
