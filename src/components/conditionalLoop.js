import store from '../store';
import actions from '../actions';

function Looop(props) {
    let clicked = function(e) {
        const color = e.target.dataset.color;
        store.dispatch(actions.setColor(color));
    }
    if(props.type === "cars") {
        return (
            <div>
                <h1>Your color palette</h1>
                <ul>
                    {props.colors.map((color) => <li><div data-color={color} onClick={clicked} style={{backgroundColor:color,height:30}}></div></li>)}
                </ul>
            </div>
        )
    } else {
        return (
            <h1>These are not colors</h1>
        )
    }
}
export default Looop;