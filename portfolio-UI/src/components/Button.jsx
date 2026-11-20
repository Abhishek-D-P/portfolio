import '../static/css/components/Button.css'

function Button({type,value}){

    return (
        <button className={type}>{value}</button>
    )
}

export default Button