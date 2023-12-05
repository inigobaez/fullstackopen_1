const Header = ({ course }) => {
  return (<h1>{course}</h1>);
}
const Total = ({ parts }) => {
  const total = parts.reduce((acc, current) => acc + current.exercises, 0)

  return (<p>Number of exercises {total}</p>)
}
const Part = ({ name, exercises }) => {
  return (<p>
    {name} {exercises}
  </p>)
}
const Content = ({ parts }) => {
  return (
    <>
      {parts.map((p, idx) => <Part key={idx} name={p.name} exercises={p.exercises} />)}
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />

      <Total parts={course.parts} />
    </div>
  )
}

export default App
