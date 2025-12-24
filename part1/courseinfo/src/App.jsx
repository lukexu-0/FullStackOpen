const Header = (props) =>{
  return (
  <div>
    <h1>{props.title}</h1>
  </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.section} {props.number}</p>
    </div>
  )
}

const Content = (props) =>{
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return(
    <div>
      <Part section = {part1} number = {exercises1}/>
      <Part section = {part2} number = {exercises2}/>
      <Part section = {part3} number = {exercises3}/>
    </div>
  )
}

const Total = (props) =>{
  return(
    <div>
      <p>Number of excercises {props.number}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title = {course}/>
      <Content/>
      <Total number = {exercises1 + exercises2 + exercises3}/>
      </div>
  )
}

export default App