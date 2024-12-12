import styles from './styles.module.css'
import Logo from './assets/image2.png'
import { useState } from 'react'

function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [roadQuery, setRoadQuery] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault()
    const query = await generateQuery();
    setRoadQuery(query);
    console.log('Resposta da API: ', roadQuery);
  }

  const generateQuery = async () => {
      const response = await fetch("http://localhost:3005/generate", {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ queryDescription: userPrompt }),
      });

      const data = await response.json();
      return data.response;
  };
  
  return (
    <main className={styles.main}>
      <img src={Logo} alt="" className={styles.icon} />
      <h3 className={styles.title}>Generate RoadMap with AI</h3>

      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name="query-description"
          placeholder="Enter your prompt here" 
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <input type='submit' value='Generate query' />
      </form>
      <pre>{roadQuery}</pre>
    </main>
  );
};

export default App