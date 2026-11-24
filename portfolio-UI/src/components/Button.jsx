import '../static/css/components/Button.css'

function Button({type,value,link,target}){

    return (
        <a href={link} className={type} target={target}>{value}</a>
    )
}

export default Button