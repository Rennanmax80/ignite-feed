import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar(){
 return (
    <aside className={styles.Sidebar}>
        <img 
        className={styles.cover}
            src="https://images.unsplash.com/photo-1672644117607-93c9da02b6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" alt="" 
        />

    <div className={styles.profile}>
        <Avatar src="https://github.com/Rennanmax80.png" />

        <strong>Rennan Maxwell</strong>
        <span>Analista de Sistemas</span>
    </div>

    <footer>
        <a href="#">
            <PencilLine 
                size={20}
            />
            Editar seu perfil
        </a>
    </footer>

    </aside>
)
}