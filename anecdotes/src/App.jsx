import { useState } from 'react'
const Button = ({ handler, label }) => <button onClick={handler}>{label}</button>
const MostVotedAnecdote = ({ anecdote, votes }) => {
  return (<>
    <h2>Most voted anecdote</h2>
    <p>{anecdote}</p>
    <span>has {votes} votes</span>
  </>)
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
  const mostVotedAnecdoteIdx = points.indexOf(Math.max(...points));

  const getRandomIndexFromArray = (array) => {
    return Math.floor((Math.random() * array.length));
  }
  const nextAnecdote = () => {
    const randomIndex = getRandomIndexFromArray(anecdotes);
    setSelected(randomIndex)

  }
  const vote = () => {
    const newPoints = [...points]
    newPoints[selected] = newPoints[selected] + 1
    setPoints(newPoints)
  }
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <span>has {points[selected]} votes</span>
      <br />
      <Button handler={nextAnecdote} label='Next anecdote' />
      <Button handler={vote} label='Vote' />
      <MostVotedAnecdote anecdote={anecdotes[mostVotedAnecdoteIdx]} votes={points[mostVotedAnecdoteIdx]} />
    </div>
  )
}

export default App
