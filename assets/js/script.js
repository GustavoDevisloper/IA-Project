document.addEventListener('DOMContentLoaded', function() {
    const genCodeSection = document.getElementById('genCodeSection');
    const genPhotoSection = document.getElementById('genPhotoSection');
    const genVideoSection = document.getElementById('genVideoSection');
    const textTitle = document.getElementById('textTitle');
    const textInput = document.getElementById('textInput');
    const generatedTextSection = document.getElementById('generatedTextSection');
    const uploadInput = document.getElementById('uploadInput');
    const displayedImage = document.getElementById('displayedImage');
    const dragContainer = document.getElementById('dragContainer');


let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let offsetX = 0;
    let initialQuality = 0.2;
    const maxX = window.innerWidth - dragContainer.offsetWidth;

    function updateImageQuality(quality) {
        displayedImage.style.imageRendering = quality;
    }

    dragContainer.addEventListener('mousedown', (event) => {
        isDragging = true;
        startX = event.clientX;
        offsetX = dragContainer.getBoundingClientRect().left;
        dragContainer.style.cursor = 'grabbing';
        displayedImage.style.imageRendering = 'pixelated'; // Defina a propriedade de renderização da imagem
    });
    

    document.addEventListener('mousemove', (event) => {
        if (!isDragging) return;
    
        const diffX = event.clientX - startX;
        currentX = offsetX + diffX;
    
        if (currentX < 0) {
            currentX = 0;
            displayedImage.style.imageRendering = 'pixelated';
        } else if (currentX > maxX) {
            currentX = maxX;
            displayedImage.style.imageRendering = 'pixelated';
        } else {
            const qualityScale = 1 + (4 * ((maxX - currentX) / maxX)); // Ajuste o fator 4 conforme necessário
            displayedImage.style.imageRendering = `pixelated ${qualityScale}`;
        }
    
        dragContainer.style.transform = `translateX(${currentX}px)`;
    });
        
document.addEventListener('mouseup', () => {
    isDragging = false;
    dragContainer.style.cursor = 'grab';
});

    dragContainer.addEventListener('selectstart', (event) => {
        event.preventDefault();
    });

    uploadInput.addEventListener('change', (event) => {
        const file = event.target.files[0];

        if (file && isSupportedImageFile(file)) {
            dragContainer.style.display = 'block';
        }
    });

    function isSupportedImageFile(file) {
        const allowedFormats = ['image/png', 'image/jpeg', 'image/jpg'];
        return allowedFormats.includes(file.type);
    }

    if (genCodeSection) {
        genCodeSection.addEventListener('click', () => {
            if (genPhotoSection) {
                genPhotoSection.style.display = 'none';
            }
            if (genVideoSection) {
                genVideoSection.style.display = 'none';
            }
            if (genCodeSection) {
                genCodeSection.style.display = 'none';
            }
            if (textTitle) {
                textTitle.style.display = 'none';
            }
            if (textInput) {
                textInput.style.display = 'block';
                textInput.focus();
            }
        });
    }
    if (genVideoSection) {
        genVideoSection.addEventListener('click', () => {
            if (genCodeSection) {
                genCodeSection.style.display = 'none';
            }
            if (genPhotoSection) {
                genPhotoSection.style.display = 'none';
            }
            if (genVideoSection) {
                genVideoSection.style.display = 'none';
            }
        });
    }

    if (genPhotoSection) {
        genPhotoSection.addEventListener('click', () => {
            uploadInput.click(); // Acionar a seleção de arquivo ao clicar na seção
        });
    }

    if (uploadInput) {
        uploadInput.addEventListener('change', (event) => {
            const file = event.target.files[0];

            if (file && isSupportedImageFile(file)) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    displayedImage.src = e.target.result; // Exibindo a imagem carregada
                    displayedImage.style.display = 'block'; // Tornando a imagem visível
                };

                reader.readAsDataURL(file);
            }
        });
    }

    function isSupportedImageFile(file) {
        const allowedFormats = ['image/png', 'image/jpeg', 'image/jpg'];
        return allowedFormats.includes(file.type);
    }
   
function hideSections() {
        const sections = [genCodeSection, genPhotoSection, genVideoSection, textTitle, textInput, generatedTextSection];
        sections.forEach(section => {
            if (section) {
                section.style.display = 'none';
            }
        });
    }
    if (uploadInput) {
        uploadInput.addEventListener('change', (event) => {
            const file = event.target.files[0];

            if (file && isSupportedImageFile(file)) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    displayedImage.src = e.target.result; // Exibindo a imagem carregada
                    displayedImage.style.display = 'block'; // Tornando a imagem visível
                    hideSections();
                };

                reader.readAsDataURL(file);
            }
        });
    }
    

    if (textInput) {
        textInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                const inputText = textInput.value.trim();
                const generatedText = generateText(inputText);

                simulateTyping(generatedText);

                if (genCodeSection) {
                    genCodeSection.style.display = 'none';
                }
                if (genPhotoSection) {
                    genPhotoSection.style.display = 'none';
                }
                if (genVideoSection) {
                    genVideoSection.style.display = 'none';
                }
                textInput.value = '';
            }
        });

        textInput.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }

    function generateText(inputText) {
        if (inputText.includes('arte')) {
            return "A arte é uma forma de expressão que nos permite ver o mundo de maneiras únicas e criativas.";
        } else if (inputText.includes('tecnologia')) {
            return "A tecnologia está sempre avançando, trazendo inovações para o nosso dia a dia.";
        } else if (inputText.includes('gay')) {
            return "A pessoa mais gay que eu conheço é a Naiara.";
        } else if (inputText.includes('Ana Julia')) {
            return "Ela é uma pessoa muito gata e deveria marcar pra vocês ficarem novamente.";
        } else if (inputText.includes('joaquim')) {
            return "O Joaquim é um viado do krl, mas ele é legal e AS VEZES da uns conselhos bons.";
        } else if (inputText.includes('criador')) {
            return "Meu criador é o Gustavo, mais conhecido como Pica Torta.";
        } else if (inputText.includes('randola')) {
            return "O leo pinto pequeno é o cara mais randola que existe nesse mundo.";
        } else if (inputText.includes('mae')) {
            return "Eu acredito que sua mãe deveria deixar você ir para revoada, mas você teria que voltar no horario certo.";
        } else if (inputText.includes('natureza')) {
            return "A natureza nos presenteia com paisagens deslumbrantes e uma diversidade incrível de vida.";
        } else if (inputText.includes('geovana')) {
            return "A Geovana é uma ótima amiga, parece que você ama ela.";
        } else if (inputText.includes('mal')) {
            return "Recomendo que você fale para ela ir te ver quando estiver sozinho, assim vocês poderam conversar.";
        } else if (inputText.includes('vir')) {
            return "É bem possível que sua situação piorar e você entrar em uma bad profunda por falta disso.";
        } else if (inputText.includes('triste')) {
            return "Recomendo que você peça foto do peito para sua melhor amiga, 90% das pessoas ficam triste por falta de foto do peito.";
        } else {
            return "Desculpe, não tenho informações sobre esse tema.";
        }
    }

    function simulateTyping(text) {
        let index = 0;
        const typingEffectElement = document.getElementById('typingEffect');

        typingEffectElement.textContent = '';

        const typingInterval = setInterval(() => {
            typingEffectElement.textContent += text[index];
            index++;

            if (index >= text.length) {
                clearInterval(typingInterval);


                if (generatedTextSection) {
                    generatedTextSection.style.display = 'block';
                }
            }
        }, 50);
    }
});