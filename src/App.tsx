import { Header } from './components/Header/Header'

import styles from './App.module.css';

import './global.css'
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/bruno-ferr.png',
      name: 'Bruno Ferreira',
      role: 'Estudante'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content:'👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Lucas andré',
      role: 'Desenvolvedor de software'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content:'👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-10 20:00:00'),
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

