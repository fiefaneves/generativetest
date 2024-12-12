import openai from "../config/api.js"; // Importa o cliente da API OpenAI

async function generate(queryDescription) { // Define a função de geração de texto
    //const userQuery = `Quero aprender a programar em ${queryDescription}.`; // Interpolação da variável fora da estrutura

    //const messages = [
    //    {role: 'system', content: 'Você é um assistente que ajuda a criar roadmaps de aprendizado.'},
    //    {role: 'user', content: 'Quero aprender a programar em Python.'},
    //    {role: 'assistant', content: 'Aqui está um roadmap para aprender Python, cobrindo diferentes níveis de aprendizado e áreas de aplicação:\n\n### 1. **Fundamentos de Python**\n- **Objetivo**: Entender a sintaxe básica e como o Python funciona.\n- **Tópicos**:\n- Tipos de dados (strings, inteiros, listas, tuplas, dicionários)\n- Estruturas de controle (if, else, for, while)\n- Funções (definição e chamada de funções)\n- Manipulação de arquivos (abertura, leitura e escrita)\n- Introdução à programação orientada a objetos (POO)\n- **Recursos**:\n- **Livros**: "Automate the Boring Stuff with Python" de Al Sweigart\n- **Cursos**: [Python for Everybody - Coursera](https://www.coursera.org/specializations/python)\n- **Documentação Oficial**: [Python.org Documentation](https://docs.python.org/3/tutorial/)\n\n### 2. **Desenvolvimento Web com Python**\n- **Objetivo**: Aprender a criar aplicações web usando Python.\n- **Tópicos**:\n- Frameworks web (Django, Flask)\n- Banco de dados (SQLite, PostgreSQL)\n- Templates e renderização de páginas\n- Autenticação e autorização\n- **Recursos**:\n- **Livros**: "Django for Beginners" de William S. Vincent\n- **Cursos**: [Django for Beginners - Udemy](https://www.udemy.com/course/django-for-beginners/)\n- **Documentação Oficial**: [Django Documentation](https://docs.djangoproject.com/en/3.2/)\n\n### 3. **Ciência de Dados com Python**\n- **Objetivo**: Aplicar Python em análise de dados e machine learning.\n- **Tópicos**:\n- Bibliotecas de análise de dados (NumPy, Pandas)\n- Visualização de dados (Matplotlib, Seaborn)\n- Machine learning (scikit-learn, TensorFlow)\n- Projetos práticos (análise exploratória, previsão de vendas)\n- **Recursos**:\n- **Livros**: "Python for Data Analysis" de Wes McKinney\n- **Cursos**: [Data Science and Machine Learning Bootcamp with R and Python - Udemy](https://www.udemy.com/course/data-science-and-machine-learning-bootcamp-with-r/)\n- **Documentação Oficial**: [Pandas Documentation](https://pandas.pydata.org/docs/)\n\n### 4. **Projetos Práticos**\n- **Objetivo**: Aplicar os conhecimentos adquiridos em projetos reais.\n- **Tópicos**:\n- Desenvolvimento de um site pessoal\n- Análise de dados de um dataset real\n- Criação de um modelo de machine learning\n- **Recursos**:\n- **Plataformas**: [GitHub]'},
    //    {role: 'user', content: userQuery},
    //];
    
    const messages = []; // Cria um array de mensagens
    messages.push({role: 'user', content: queryDescription}); // Adiciona a mensagem do usuário ao array
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: messages,
        }); // Cria uma conversa
        
        const completionText = response.choices[0].message.content; // Obtém o texto gerado
        messages.push({role: 'assistant', content: completionText}); // Adiciona a mensagem do assistente ao array
        return completionText; // Retorna o texto gerado
        
    } catch (error) {
        console.error('Erro na API OpenAI:', error.response?.data || error.message);
        throw new Error('Erro ao gerar o roadmap.');
        
    }
}

export default generate; // Exporta a função de geração de texto