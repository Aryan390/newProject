import classes from './Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <div className={classes.nav}>
      <div>
        <h1>Cinema</h1>
        <span> +</span>
      </div>

      <ul className={classes.list}>
        <li>Home</li>
        <li>Now Showing</li>
        <li>Coming Soon</li>
        <li>Cinemas</li>
      </ul>

      <div className={classes.icon}>
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  )
}

export default Nav