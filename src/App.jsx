import { Header } from './componets/Header'
import { Sidebar } from './componets/Sidebar'
import { Post } from './componets/Post'

import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Rennan" 
            content="Lorem Ipsum" 
          />
          <Post author="Maxwell" 
            content="Lorem Ipsum2" 
          />
        </main>
      </div>
    </div>

  )
}

