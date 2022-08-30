import { Link } from 'react-router-dom'

/*Generates a simple about page that has a simple button to go back to the main page*/
const About = () => {
return (
<div>
<h4>Version 1.0.0</h4>
  <Link to='/'>
    <button type="button" className={"btn btn-secondary"}>
    Go Back
    </button>
  </Link>
</div>
)
}

export default About