import styles from './styles.module.css'
import Logo from './assets/image2.png'
import { useState } from 'react'

function App() {
  const [question, setQuestion] = useState('') 

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted: ", question)
  }

  return (
    <main className={styles.main}>
      <img src={Logo} alt="" className={styles.icon} />
      <h3 className={styles.title}>Generate RoadMap with AI</h3>

      <form onSubmit={onSubmit} className={styles.form}>
        <input 
          type="text" 
          name='question'
          placeholder="Enter your question here" 
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input type='submit' value='Generate' />
      </form>

    </main>
  )
}

export default App
