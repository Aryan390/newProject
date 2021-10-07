import classes from './ShowCase.module.css'

const ShowCase = () => {
  return (
    <div className={classes.showcase}>
      <h1>Joker</h1>
      <p>during the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in gotham city while becoming an infamous psychopathic crime figure.</p>
      <h3>By: todd phillips</h3>
      <span className={classes.box}>122 min</span>
      <span className={classes.genre}>thriller,action,adventure,drama</span>
    </div>
  )
}

export default ShowCase