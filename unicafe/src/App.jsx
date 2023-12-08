import { useState } from 'react'

const Button = ({ handleClick, label }) => {
  return (
    <button onClick={handleClick}>{label}</button>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100
  if (total === 0) {
    return (<p>No feedback given</p>)
  }
  return (
    <table>
      <thead>

        <tr><th>Statistics</th></tr>
      </thead>
      <tbody>

        <StatisticLine label='Good' value={good} />
        <StatisticLine label='Neutral' value={neutral} />
        <StatisticLine label='Bad' value={bad} />
        <StatisticLine label='All' value={total} />
        <StatisticLine label='Average' value={average} />
        <StatisticLine label='Positive' value={positive} />
      </tbody>
    </table>
  )
}
const StatisticLine = ({ label, value }) => <tr><td>{label}</td><td>{value}</td></tr>
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood((prev) => prev + 1)} label='good' />
      <Button handleClick={() => setNeutral((prev) => prev + 1)} label='neutral' />
      <Button handleClick={() => setBad((prev) => prev + 1)} label='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>

  )
}

export default App