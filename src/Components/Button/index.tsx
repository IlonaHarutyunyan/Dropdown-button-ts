import './style.css'

interface ButtonType {
    onClick? : () => void 
}
export const Button: React.FC<ButtonType> = ({onClick}) => {
   
    return(
        <>
            <button onClick = {onClick} className = 'dropdown-wrapper'>
                Categories
            </button>
        </>
        
    )
}