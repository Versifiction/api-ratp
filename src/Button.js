import React from 'react'

const Button = (props) => {
    return (
            <div className="button">
                <button
                    onClick={props.button}
                    className={props.className}
                >{props.value}</button>
            </div>
    )
}

export default Button;