import Header from "./header";
import NavBar from "./nav";
import '../App.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd';
import { useState } from "react";

export default function Home() {

    const [selectedCountry, setSelectedCountry] = useState("USA");
    const [basket, setBasket] = useState([])

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setBasket([]);
    }

    const years = [];
    for (let i = 1990; i < 2021; i++) {
        years.push(i)
    }

    const [annotations, setAnnotations] = useState([]);
    const [showNotes, setShowNotes] = useState(false);

    return (
        <div>
            <div className="row">
                <Header />
            </div>
            <div className='row'>
                <div className='col-md-2'><NavBar country={selectedCountry} /></div>
                <div className="col-md-1 vl"></div>
                <div className='col-md-8 main-container'>
                    <div className="row">
                        <div className="col-md-9">

                            <div className="row">
                                <div className="col-md-3">
                                    <span>From year</span>
                                    <select value="value-2">
                                        {years.map(item => {
                                            return (<option key={item} value={item}>{item}</option>);
                                        })}
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <span>To Year</span>
                                    <select value="value-2">
                                        {years.reverse().map(item => {
                                            return (<option key={item} value={item}>{item}</option>);
                                        })}
                                    </select>

                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <select onChange={(e) => { handleCountryChange(e.target.value) }}>
                                <option>USA</option>
                                <option>CHINA</option>
                                <option>INDIA</option>
                                <option>Egypt, Arab Rep</option>
                                <option>SAUDI ARABIA</option>
                                <option>Global View</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-10">
                            <div className=" row drag-drop-area">
                                <DragDropArea basket={basket} setBasket={setBasket} notes={setAnnotations}/>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="annotation">
                                <button onClick={() => setShowNotes((s) => !s)}>Annotations</button>
                                <div> 
                                    {annotations}
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

    )
}


export function DragDropArea({ isDragging, text, basket, setBasket, notes },) {
    return (
        <DndProvider backend={HTML5Backend}>
            {/* Here, render a component that uses DND inside it */}
            <Basket basket={basket} setBasket={setBasket} notes={notes}/>
        </DndProvider>
    )
}

export const MenuCard = ({ id, name, chart }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'menuItem',
        item: { id, name, chart },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <div className='pet-card' ref={dragRef}>
            {name}
            {isDragging}

        </div>
    )
}

export const Notes = (props) => {

    const [notes, setNotes] = useState("");

    const closeNote = () => {
        props.closeNote(notes)
    }
    return (
        <div>
            <div style={{backgroundColor:"rgba(90, 142, 184, 0.5", width:"200px"}}>
                <textarea onChange = {(e)=>setNotes(e.target.value)} type="text" placeholder="Add Notes.."></textarea> <br/>
                <button onClick={closeNote}>Add note</button>
            </div>
        </div>
    )
}

export const BasketChart = ({ id, name, chart, anNotes }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'menuItem',
        item: { id, name, chart },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    const [showNotes, setShowNotes] = useState(false);

    const addNotes = () => {
        setShowNotes(true);
    }

    const submitNotes = (notes) =>{

        anNotes(notes);
        setShowNotes(false);
    }

    return (
        <div>
            <div onClick={addNotes} className='pet-card' ref={dragRef}>
                {name}
                {isDragging}
                {chart}
            </div>
            {showNotes ? <Notes closeNote={submitNotes}/> : null }
        </div>
        
    )
}

export const Basket = ({ basket, setBasket, notes }) => {

    const [{ isOver }, dropRef] = useDrop({

        accept: 'menuItem',
        drop: (item) => setBasket((basket) =>
            !basket.includes(item) ? [...basket, item] : basket),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    return (
        <div>
            <div style={{ width: "800px", height: "600px", marginTop: "20px" }} className='basket' ref={dropRef}>
                {basket.map(menuItem => <BasketChart id={menuItem.id} name={menuItem.name} chart={menuItem.chart} anNotes={notes} />)}
                {isOver && <div>Drop Here!</div>}

            </div>
        </div>
    )
}