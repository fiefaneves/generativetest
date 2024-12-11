import { OpenAI } from 'openai'; // Importa o objeto principal
import dotenv from 'dotenv'; // Importa dotenv para lidar com variáveis de ambiente
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

// Inicializa o cliente da API OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Define a chave da API
});

if (!openai.apiKey) { // Se a chave da API não foi definida
    console.error('API key is missing'); // Exibe uma mensagem de erro
    process.exit(1); // Encerra a execução do programa
};

export default openai; // Exporta o cliente da API OpenAI