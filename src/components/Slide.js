import classes from './Slide.module.css'

const Slide = (props) => {
  return (
    <li className={classes.slide}>
      <img src={props.img} alt="some img" />
      <h2>{props.title}</h2>
    </li>
  )
}

export default Slide