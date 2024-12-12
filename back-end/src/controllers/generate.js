import openai from "../config/api.js"; // Importa o cliente da API OpenAI

const generate = async (queryDescription) => { // Define a função de geração de texto
    //const model = async (queryDescription) => {
    //    const response = await openai.chat.completions.create({ // Chama o método de completar texto
    //        model: 'gpt-3.5-turbo', // Define o modelo
    //        prompt: `Generate a roadmap para aprender linguagens e desenvolver habilidades na área de ${query}.`, // Define o texto de entrada
    //        max_tokens: 100, // Define o número máximo de tokens
    //        //temperature: 10, // Define a temperatura, que é um hiperparâmetro que controla a aleatoriedade ou criatividade da amostra
    //    }); // Aguarda a resposta
    //    return response.data.choices[0].text; // Retorna o texto gerado
    //};
    
    const chatGPT = async (queryDescription) => {
        const message = [  // Treinamento de diálogo para o assistente virtual saber como responder
            // Exemplo de diálogo
            {role: 'system', content: 'Você é um assistente que ajuda a criar roadmaps de aprendizado.'},
            {role: 'user', content: queryDescription},
            //{role: 'assistant', content: 'Claro, vou te ajudar a gerar um roadmap para aprender linguagens e desenvolver habilidades na área de front-end: .'},
        ];
        try {
            const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                //prompt: `Generate a roadmap para aprender linguagens e desenvolver habilidades na área de ${query}.`, // Define o texto de entrada
                messages: message,
            });
            return response.data.choices[0].message.content;
            //return response.data.choices[0].text;
        } catch (error) {
            console.error('Erro na API OpenAI:', error.response?.data || error.message);
            throw new Error('Erro ao gerar o roadmap.');
        }
    };
    
    const roadQuery = await chatGPT(queryDescription);
    return roadQuery;
};  

export default generate; // Exporta a função de geração de texto