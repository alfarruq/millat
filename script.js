document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const resultDiv = document.getElementById('result');
    
    if (name) {
        fetch(`https://api.nationalize.io?name=${name}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.country) {
                    resultDiv.innerHTML = `
                        <h2>Possible Nationalities:</h2>
                        <ul>
                            ${data.country.map(country => `<li>${country.country_id} - ${country.probability.toFixed(2) * 100}%</li>`).join('')}
                        </ul>
                    `;
                } else {
                    resultDiv.innerHTML = 'No data found.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching data.';
            });
    } else {
        resultDiv.innerHTML = 'Please enter a name.';
    }
});
