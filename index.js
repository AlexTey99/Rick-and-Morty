
const createNumberRamdon = () => {
    let numeroAleatorio = Math.floor(Math.random() * 800) + 1;
    document.getElementById('container-flexible').style.display =  'flex';
    cliInfo(numeroAleatorio)
}

const cliInfo = (numeroAleatorio) => {
    
    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`)
        .then(response => response.json())
        .then(({ id, name, status, species, gender, image }) => {
            $('#id').html("Id: " + id);
            $('#name').html("Name: " + name);
            $('#status').html("Status: " + status);
            $('#species').html("Species: " + species);
            $('#gender').html("Gender: " + gender);

            // Para cojer el url del api image
            const img = document.getElementById('img');
            img.src = image;
            img.alt = name;
            
        })
        .catch(error => {
            // Manejar errores
            console.log("Error: " + error);
        });
}





