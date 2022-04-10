import { Link} from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    return (
        <div>
            <div className="Macro">
                <div className='nav-main-elements'>
                <Link to="/home"><h6>Macroeconomic(USD)</h6></Link>
                    <ul className='nav-elements'>
                        <li>GDP Growth Rate</li>
                        <li>GDP Current USD</li>
                        <li>Current Account Balance</li>
                        <li>FDI net</li>
                        <li>FDI net outflows - BoP</li>
                        <li>FDI net inflows</li>
                        <li>FDI net outflows % GDP</li>
                    </ul>
                </div>
                <div className='nav-main-elements'>
                <Link to="/home"><h6>Agricultural</h6></Link>
                    <ul className='nav-elements'>
                        <li>Contribution</li>
                        <li>Manufactoring</li>
                        <li>Fertilizers </li>
                        <li>Fertilizer Production</li>
                        <li>Forestery and Fishing</li>
                    </ul>
                </div>
                <div className='nav-main-elements'>
                <Link to="/home"><h6>Debt</h6></Link>
                    <ul className='nav-elements'>
                        <li>Reservers - imports</li>
                        <li>Reservers - gold</li>
                        <li>Total Debt </li>
                        <li>Debt service</li>
                        <li>% GNI</li>
                        <li>GNI current</li>
                    </ul>
                </div>
                <div className='nav-main-elements'>
                    <Link to="/imports">Imports</Link>
                </div>
                <div className='nav-main-elements'>
                    <Link to="/predict">Predict</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;