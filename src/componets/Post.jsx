import {Comment} from '../componets/Comment'
import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.Post}>
            <header>
            <div className={styles.author}>
                <img src="https://github.com/Rennanmax80.png" alt="Avatar" />
                <div className={styles.authorInfo}>
                    <strong>Rennan Maxwell</strong>
                    <span>Analista de Sistemas</span>
                </div>
            </div>

            <time title="11 de maio às 08:13h" dateTime="">Publicado há 1h</time>
            </header>

        <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉{' '}<a href='#'> jane.design/doctorcare</a></p>
            <p>
                <a href='#'>#novo projeto</a>{' '}
                <a href="#" >#nlw </a>{' '}
                <a href="#" >#rocketseat</a>{' '}
            </p>
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea
                placeholder='Deixe um comentário'
            />

            <footer>

                <button type='submit'>Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>

        </article>
    )
}