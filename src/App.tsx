import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query MyQuery {
  lessons {
    id
    slug
    title
    teacher {
      name
      bio
      avatarURL
    }
  }
}
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  return (
    <ul>
      {data?.lessons.map(lesson => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  )
}

export default App
