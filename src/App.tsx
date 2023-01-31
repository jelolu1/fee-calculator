import styles from './App.module.css'
import { CalcField } from './components/calc/CalcField'

// https://github.com/woltapp/engineering-summer-intern-2023

function App() {

  return (

    <main className={styles['calc-container']}>
      <header className={styles['calc-header']}>
      </header>
      <form className={styles['calc-form']}>
        <CalcField title='Cart Value' inputType='number' unit='€' />
        <CalcField title='Delivery Distance' inputType='number' unit='Meters' />
        <CalcField title='Amount of Items' inputType='number' unit='Items' />
        <CalcField title='Time' inputType='date' unit={null} />

        
  
      </form>
      <footer  className={styles['calc-footer']}>
        
      </footer>
      
    </main>
    
  )
}

export default App
