import { Link } from 'react-router-dom';
import '../App.css';
import { MenuCard } from './home';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DataChart } from "../Data/Data";

const NavBar = (props) => {

    const macroeconomic = [
        { id: 1, name: 'GDP Growth Rate', chart: <DataChart country={props.country} /> },
        { id: 2, name: 'GDP Current USD' ,chart: 'ABCD'},
        { id: 3, name: 'Current Account Balance',chart: 'ABCD' },
        { id: 4, name: 'FDI net' ,chart: 'ABCD'},
        { id: 5, name: 'FDI net outflows - BoP' ,chart: 'ABCD'},
        { id: 6, name: 'FDI inflows',chart: 'ABCD' },
        { id: 7, name: 'FDI net outflows % GDP',chart: 'ABCD' },
    ]

    const agricultural = [
        { id: 1, name: 'Contribution',chart: 'ABCD' },
        { id: 2, name: 'Manufactoring',chart: 'ABCD' },
        { id: 3, name: 'Fertilizers' ,chart: 'ABCD'},
        { id: 4, name: 'Fertilizer Production',chart: 'ABCD' },
        { id: 5, name: 'Forestery and Fishin',chart: 'ABCD' },
    ]

    const debt = [
        { id: 1, name: 'Reservers - imports',chart: 'ABCD' },
        { id: 2, name: 'Reservers - gold',chart: 'ABCD' },
        { id: 3, name: '% GNI',chart: 'ABCD' },
        { id: 4, name: 'Total Debt',chart: 'ABCD' },
        { id: 5, name: 'Debt service',chart: 'ABCD' },
        { id: 6, name: 'GNI current',chart: 'ABCD' },
    ]

    return (
        <div>
            <div className="Macro">
                <div className='nav-main-elements'>
                    <Link to="/home"><h6>Macroeconomic(USD)</h6></Link>
                    <DndProvider backend={HTML5Backend}>
                        <div className='pets'>
                            {macroeconomic.map(mc => <MenuCard draggable id={mc.id} name={mc.name} chart={mc.chart} />)}
                        </div>
                    </DndProvider>
                </div>


                <div className='nav-main-elements'>
                    <Link to="/home"><h6>Agricultural</h6></Link>
                    <DndProvider backend={HTML5Backend}>
                        <div className='pets'>
                            {agricultural.map(ag => <MenuCard draggable id={ag.id} name={ag.name} chart={ag.chart} />)}
                        </div>
                    </DndProvider>
                </div>
                <div className='nav-main-elements'>
                    <Link to="/home"><h6>Debt</h6></Link>
                    <DndProvider backend={HTML5Backend}>
                        <div className='pets'>
                            {debt.map(db => <MenuCard draggable id={db.id} name={db.name} chart={db.chart} />)}
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