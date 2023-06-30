import { useThemeContext } from "./App"


const Fonts = () => {

    const value = useThemeContext();
    return (
    <div>
        <button type="button" onClick={() => value.setFont('arial')}>Arial</button>
        <button type="button" onClick={() => value.setFont('verdana')}>Verdana</button>
        <button type="button" onClick={() => value.setFont('tahoma')}>Tahoma</button>
    </div>
    )
}

export default Fonts;