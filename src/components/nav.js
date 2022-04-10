import { Link } from 'react-router-dom';
import '../App.css';
import { MenuCard } from './home';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DataChart } from '../Data/Data';

const NavBar = () => {

    const macroeconomic = [
        { id: 1, name: 'GDP Growth Rate', chart: <DataChart /> },
        { id: 2, name: 'GDP Current USD' },
        { id: 3, name: 'Current Account Balance' },
        { id: 4, name: 'FDI net' },
        { id: 5, name: 'FDI net outflows - BoP' },
        { id: 6, name: 'FDI inflows' },
        { id: 7, name: 'FDI net outflows % GDP' },
    ]

    const agricultural = [
        { id: 1, name: 'Contribution' },
        { id: 2, name: 'Manufactoring' },
        { id: 3, name: 'Fertilizers' },
        { id: 4, name: 'Fertilizer Production' },
        { id: 5, name: 'Forestery and Fishin' },
    ]

    const debt = [
        { id: 1, name: 'Reservers - imports' },
        { id: 2, name: 'Reservers - gold' },
        { id: 3, name: '% GNI' },
        { id: 4, name: 'Total Debt' },
        { id: 5, name: 'Debt service' },
        { id: 6, name: 'GNI current' },
    ]

    return (
        <div>
            <div className="Macro">
                <div className='nav-main-elements'>
                    <Link to="/home"><h6>Macroeconomic(USD)</h6></Link>
                    <DndProvider backend={HTML5Backend}>
                        <div className='pets'>
                            {macroeconomic.map(mc => <MenuCard draggable id={mc.id} name={mc.name} />)}
                        </div>
                    </DndProvider>
                </div>


                <div className='nav-main-elements'>
                    <Link to="/home"><h6>Agricultural</h6></Link>
                    <DndProvider backend={HTML5Backend}>
                        <div className='pets'>
                            {agricultural.map(ag => <MenuCard draggable id={ag.id} name={ag.name} />)}
                        </div>
                    </DndProvider>
                </div>
                <div className='nav-main-elements'>
                    <Link to="/home"><h6>Debt</h6></Link>
                    <DndProvider backend={HTML5Backend}>
                        <div className='pets'>
                            {debt.map(db => <MenuCard draggable id={db.id} name={db.name} />)}
                        </div>
                    </DndProvider>
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