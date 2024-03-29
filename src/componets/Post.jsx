import {Comment} from '../componets/Comment'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import { useState } from 'react'



export function Post({author, publishedAt, content}){

    const [comments, setComments] = useState([
        1,
        2
    ])

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,

    })

    function handleCreateNewComment(){
        event.preventDefault()

        setComments([... comments, comments.length + 1]);

    }

    return (
        <article className={styles.Post}>
            <header>
            <div className={styles.author}>
                <Avatar src={author.avatarUrl} />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>Publicado há 1h</time>
                {publishedDateRelativeToNow}
            </header>

        <div className={styles.content}>
            {content.map(line => {
                if(line.type == 'paragraph') {
                    return <p>{line.content}</p>
                }else if (line.type == 'link'){
                    return <p><a href="">{line.content}</a></p>
                }
            })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea
                placeholder='Deixe um comentário'
            />

            <footer>

                <button type='submit'>Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comments.map(comment => {
                return <Comment />
            })}
        </div>

        </article>
    )
}