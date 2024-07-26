// Lista de preguntas con el país, la capital y la clase de la bandera
const questions = [
    { country: "Argentina", capital: "Buenos Aires", flagClass: "flag-icon-ar" },
    { country: "Brasil", capital: "Brasilia", flagClass: "flag-icon-br" },
    { country: "España", capital: "Madrid", flagClass: "flag-icon-es" },
    { country: "Francia", capital: "París", flagClass: "flag-icon-fr" },
    { country: "Alemania", capital: "Berlín", flagClass: "flag-icon-de" },
    { country: "Italia", capital: "Roma", flagClass: "flag-icon-it" },
    { country: "Reino Unido", capital: "Londres", flagClass: "flag-icon-gb" },
    { country: "Estados Unidos", capital: "Washington D.C.", flagClass: "flag-icon-us" },
    { country: "Canadá", capital: "Ottawa", flagClass: "flag-icon-ca" },
    { country: "México", capital: "Ciudad de México", flagClass: "flag-icon-mx" },
    { country: "Colombia", capital: "Bogotá", flagClass: "flag-icon-co" },
    { country: "Perú", capital: "Lima", flagClass: "flag-icon-pe" },
    { country: "Chile", capital: "Santiago", flagClass: "flag-icon-cl" },
    { country: "Venezuela", capital: "Caracas", flagClass: "flag-icon-ve" },
    { country: "Ecuador", capital: "Quito", flagClass: "flag-icon-ec" },
    { country: "Bolivia", capital: "Sucre", flagClass: "flag-icon-bo" },
    { country: "Uruguay", capital: "Montevideo", flagClass: "flag-icon-uy" },
    { country: "Paraguay", capital: "Asunción", flagClass: "flag-icon-py" },
    { country: "Guyana", capital: "Georgetown", flagClass: "flag-icon-gy" },
    { country: "Surinam", capital: "Paramaribo", flagClass: "flag-icon-sr" },
    { country: "Australia", capital: "Canberra", flagClass: "flag-icon-au" },
    { country: "Nueva Zelanda", capital: "Wellington", flagClass: "flag-icon-nz" },
    { country: "Japón", capital: "Tokio", flagClass: "flag-icon-jp" },
    { country: "China", capital: "Pekín", flagClass: "flag-icon-cn" },
    { country: "India", capital: "Nueva Delhi", flagClass: "flag-icon-in" },
    { country: "Pakistán", capital: "Islamabad", flagClass: "flag-icon-pk" },
    { country: "Bangladesh", capital: "Daca", flagClass: "flag-icon-bd" },
    { country: "Nepal", capital: "Katmandú", flagClass: "flag-icon-np" },
    { country: "Sri Lanka", capital: "Colombo", flagClass: "flag-icon-lk" },
    { country: "Malasia", capital: "Kuala Lumpur", flagClass: "flag-icon-my" },
    { country: "Singapur", capital: "Singapur", flagClass: "flag-icon-sg" },
    { country: "Tailandia", capital: "Bangkok", flagClass: "flag-icon-th" },
    { country: "Vietnam", capital: "Hanói", flagClass: "flag-icon-vn" },
    { country: "Filipinas", capital: "Manila", flagClass: "flag-icon-ph" },
    { country: "Corea del Sur", capital: "Seúl", flagClass: "flag-icon-kr" },
    { country: "Irán", capital: "Teherán", flagClass: "flag-icon-ir" },
    { country: "Irak", capital: "Bagdad", flagClass: "flag-icon-iq" },
    { country: "Arabia Saudita", capital: "Riad", flagClass: "flag-icon-sa" },
    { country: "Israel", capital: "Jerusalén", flagClass: "flag-icon-il" },
    { country: "Líbano", capital: "Beirut", flagClass: "flag-icon-lb" },
    { country: "Jordania", capital: "Amán", flagClass: "flag-icon-jo" },
    { country: "Egipto", capital: "El Cairo", flagClass: "flag-icon-eg" },
    { country: "Sudán", capital: "Jartum", flagClass: "flag-icon-sd" },
    { country: "Libia", capital: "Trípoli", flagClass: "flag-icon-ly" },
    { country: "Marruecos", capital: "Rabat", flagClass: "flag-icon-ma" },
    { country: "Túnez", capital: "Túnez", flagClass: "flag-icon-tn" },
    { country: "Argelia", capital: "Argel", flagClass: "flag-icon-dz" },
    { country: "Mauritania", capital: "Nuakchot", flagClass: "flag-icon-mr" },
    { country: "Senegal", capital: "Dakar", flagClass: "flag-icon-sn" },
    { country: "Nigeria", capital: "Abuja", flagClass: "flag-icon-ng" },
    { country: "Ghana", capital: "Acra", flagClass: "flag-icon-gh" },
    { country: "Costa de Marfil", capital: "Yamusukro", flagClass: "flag-icon-ci" },
    { country: "Camerún", capital: "Yaundé", flagClass: "flag-icon-cm" },
    { country: "Etiopía", capital: "Addis Abeba", flagClass: "flag-icon-et" },
    { country: "Kenia", capital: "Nairobi", flagClass: "flag-icon-ke" },
    { country: "Sudáfrica", capital: "Pretoria", flagClass: "flag-icon-za" },
    { country: "Zimbabue", capital: "Harare", flagClass: "flag-icon-zw" },
    { country: "Suecia", capital: "Estocolmo", flagClass: "flag-icon-se" },
    { country: "Noruega", capital: "Oslo", flagClass: "flag-icon-no" },
    { country: "Dinamarca", capital: "Copenhague", flagClass: "flag-icon-dk" },
    { country: "Finlandia", capital: "Helsinki", flagClass: "flag-icon-fi" },
    { country: "Suiza", capital: "Berna", flagClass: "flag-icon-ch" },
    { country: "Países Bajos", capital: "Ámsterdam", flagClass: "flag-icon-nl" },
    { country: "Bélgica", capital: "Bruselas", flagClass: "flag-icon-be" },
    { country: "Austria", capital: "Viena", flagClass: "flag-icon-at" },
    { country: "Hungría", capital: "Budapest", flagClass: "flag-icon-hu" },
    { country: "República Checa", capital: "Praga", flagClass: "flag-icon-cz" },
    { country: "Polonia", capital: "Varsovia", flagClass: "flag-icon-pl" },
    { country: "Rumanía", capital: "Bucarest", flagClass: "flag-icon-ro" },
    { country: "Bulgaria", capital: "Sofía", flagClass: "flag-icon-bg" },
    { country: "Serbia", capital: "Belgrado", flagClass: "flag-icon-rs" },
    { country: "Croacia", capital: "Zagreb", flagClass: "flag-icon-hr" },
    { country: "Eslovenia", capital: "Liubliana", flagClass: "flag-icon-si" },
    { country: "Lituania", capital: "Vilna", flagClass: "flag-icon-lt" },
    { country: "Letonia", capital: "Riga", flagClass: "flag-icon-lv" },
    { country: "Estonia", capital: "Tallin", flagClass: "flag-icon-ee" },
    { country: "Malta", capital: "Valleta", flagClass: "flag-icon-mt" },
    { country: "Luxemburgo", capital: "Luxemburgo", flagClass: "flag-icon-lu" },
    { country: "Chipre", capital: "Nicosia", flagClass: "flag-icon-cy" },
    { country: "Mónaco", capital: "Mónaco", flagClass: "flag-icon-mc" },
    { country: "Andorra", capital: "Andorra la Vieja", flagClass: "flag-icon-ad" },
    { country: "San Marino", capital: "San Marino", flagClass: "flag-icon-sm" },
    { country: "Liechtenstein", capital: "Vaduz", flagClass: "flag-icon-li" },
    { country: "Islandia", capital: "Reikiavik", flagClass: "flag-icon-is" },
    { country: "Malawi", capital: "Lilongüe", flagClass: "flag-icon-mw" },
    { country: "Mozambique", capital: "Maputo", flagClass: "flag-icon-mz" },
    { country: "Zambia", capital: "Lusaka", flagClass: "flag-icon-zm" },
    { country: "Botswana", capital: "Gaborone", flagClass: "flag-icon-bw" },
    { country: "Angola", capital: "Luanda", flagClass: "flag-icon-ao" },
    { country: "Lesoto", capital: "Maserú", flagClass: "flag-icon-LS" },
    { country: "Esuatini", capital: "Mbabane", flagClass: "flag-icon-SZ" },
    { country: "Namibia", capital: "Windhoek", flagClass: "flag-icon-na" },
    { country: "Seychelles", capital: "Victoria", flagClass: "flag-icon-sc" },
    { country: "Comoras", capital: "Moroni", flagClass: "flag-icon-km" },
    { country: "Mauricio", capital: "Port Louis", flagClass: "flag-icon-mu" },
    { country: "Reunión", capital: "Saint-Denis", flagClass: "flag-icon-re" },
    { country: "Brunéi", capital: "Bandar Seri Begawan", flagClass: "flag-icon-bn" },
    { country: "Timor Oriental", capital: "Dili", flagClass: "flag-icon-tl" },
    { country: "Papúa Nueva Guinea", capital: "Port Moresby", flagClass: "flag-icon-pg" },
    { country: "Samoa", capital: "Apia", flagClass: "flag-icon-sb" },
    { country: "Tonga", capital: "Nukualofa", flagClass: "flag-icon-to" },
    { country: "Tuvalu", capital: "Funafuti", flagClass: "flag-icon-tv" },
    { country: "Vanuatu", capital: "Port Vila", flagClass: "flag-icon-vu" },
    { country: "Samoa Americana", capital: "Pago Pago", flagClass: "flag-icon-as" },
    { country: "Nauru", capital: "Yaren", flagClass: "flag-icon-nr" },
    { country: "Kiribati", capital: "Tarawa", flagClass: "flag-icon-ki" },
    { country: "Islas Marshall", capital: "Majuro", flagClass: "flag-icon-mh" },
    { country: "Palau", capital: "Ngerulmud", flagClass: "flag-icon-pw" },
    { country: "Tuvalu", capital: "Funafuti", flagClass: "flag-icon-tv" },
    { country: "San Cristóbal y Nieves", capital: "Basseterre", flagClass: "flag-icon-kn" },
    { country: "Santa Lucía", capital: "Castries", flagClass: "flag-icon-lc" },
    { country: "Granada", capital: "Saint George's", flagClass: "flag-icon-gd" },
    { country: "San Vicente y las Granadinas", capital: "Kingstown", flagClass: "flag-icon-vc" },
    { country: "Barbados", capital: "Bridgetown", flagClass: "flag-icon-bb" },
    { country: "Trinidad y Tobago", capital: "Puerto España", flagClass: "flag-icon-tt" },
    { country: "Guyana", capital: "Georgetown", flagClass: "flag-icon-gy" },
    { country: "Surinam", capital: "Paramaribo", flagClass: "flag-icon-sr" },
    { country: "Belice", capital: "Belmopán", flagClass: "flag-icon-bz" },
    { country: "Honduras", capital: "Tegucigalpa", flagClass: "flag-icon-hn" },
    { country: "El Salvador", capital: "San Salvador", flagClass: "flag-icon-sv" },
    { country: "Guatemala", capital: "Ciudad de Guatemala", flagClass: "flag-icon-gt" },
    { country: "República Dominicana", capital: "Santo Domingo", flagClass: "flag-icon-do" }
];

let usedQuestions = [];

// Función para obtener una pregunta aleatoria que no se haya usado
function getRandomQuestion() {
    if (usedQuestions.length === questions.length) {
        return null; // Todas las preguntas han sido usadas
    }
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(randomIndex));
    usedQuestions.push(randomIndex);
    return questions[randomIndex];
}

// Función para iniciar una nueva pregunta
function nextQuestion() {
    const currentQuestion = getRandomQuestion();
    if (currentQuestion) {
        document.getElementById('flag').className = `flag-icon ${currentQuestion.flagClass}`;
        document.getElementById('country-name').innerText = currentQuestion.country;

        const optionsDiv = document.getElementById('options');
        optionsDiv.innerHTML = '';

        // Obtener 3 respuestas incorrectas aleatorias
        const incorrectOptions = [];
        while (incorrectOptions.length < 3) {
            const randomQuestion = getRandomQuestion();
            if (randomQuestion && randomQuestion.capital !== currentQuestion.capital) {
                if (!incorrectOptions.includes(randomQuestion.capital)) {
                    incorrectOptions.push(randomQuestion.capital);
                }
            }
        }

        // Incluir la respuesta correcta y mezclar
        const options = [currentQuestion.capital, ...incorrectOptions];
        options.sort(() => Math.random() - 0.5); // Mezclar opciones

        options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.onclick = () => checkAnswer(option, currentQuestion);
            optionsDiv.appendChild(button);
        });

        document.getElementById('feedback').innerText = '';
        document.getElementById('next-button').disabled = false;
    } else {
        document.getElementById('feedback').innerText = '¡Juego terminado!';
        document.getElementById('next-button').style.display = 'none';
    }
}

// Función para verificar la respuesta seleccionada
function checkAnswer(selectedCapital, question) {
    if (selectedCapital === question.capital) {
        document.getElementById('feedback').innerText = '¡Correcto!';
    } else {
        document.getElementById('feedback').innerText = `Incorrecto. La respuesta correcta es ${question.capital}.`;
    }
    document.getElementById('next-button').disabled = false;
}

// Iniciar el juego con la primera pregunta
nextQuestion();