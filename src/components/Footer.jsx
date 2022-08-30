import { Link } from 'react-router-dom'

/*Add a footer to the application*/
const Footer = () => {
  return (
    /*It has a copyright and a link to the about page*/
      <footer>
        <p>Copyright &copy; 2021</p>
          <Link to='/about'>About</Link>
      </footer>
  )
}

export default Footer