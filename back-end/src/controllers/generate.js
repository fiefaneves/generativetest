import openaiClient from '../config/api.js'; // Importa o cliente da API OpenAI

const generate = async (setQuestion) => { // Define a função de geração de texto
    const response = await openaiClient.chat.completions.create({ // Chama o método de completar texto
        model: 'gpt-3.5-turbo', // Define o modelo
        prompt: `Generate a roadmap para aprender linguagens e desenvolver habilidades na área de ${setQuestion}.`, // Define o texto de entrada
        max_tokens: 100, // Define o número máximo de tokens
        //temperature: 10, // Define a temperatura, que é um hiperparâmetro que controla a aleatoriedade ou criatividade da amostra
    }); // Aguarda a resposta

    return response.data.choices[0].text; // Retorna o texto gerado
};  

export default generate; // Exporta a função de geração de texto