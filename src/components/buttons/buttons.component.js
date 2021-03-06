import './buttons.style.scss'


const Button = ({ type, label }) => {
    // Remove any special characters in type
    const retype = type.toLowerCase().replace(/[^a-zA-Z ]/g, "") 

    const classType = ( retype === 'signin' ) ? ['Sign In', 'sign-in'] :
    ( retype === 'signup' ) ? ['Sign Up', 'sign-up'] : 
    console.log(new Error('ERROR - INVALID BUTTON TYPE')); 

    return (
        <div className={`btn ${classType[1]}`}>
            <div className='main'>
                { label ? <span className=''>{label}</span> : <span>{classType[0]}</span> }
                { label ? null : <span className="material-symbols-outlined">arrow_right_alt</span> }
            </div>
            <span className='circle'></span>
        </div>
    )
}


export default Button