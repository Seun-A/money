import './keypad.style.scss'

const Keypad = ({ handleClick, handleBackspace, handleSend }) => (
  <div className='keypad d-flex flex-wrap'>
    {
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 'del', 0, 'send'].map((e, i) => {
        let isNum = e.toString().length === 1;
        let isDel = e === 'del';
        let isSend = e === 'send';

        return (
          <div
            key={i}
            className='btn-container d-flex align-items-center justify-content-center'
          >
            <button
              id = {isNum ? e : isDel ? 'clear' : isSend ? 'send' : null}
              onClick = {isNum ? handleClick : isDel? handleBackspace : isSend ? handleSend : null }
              className = {`
                ${isDel ? 'del' : isSend ? 'send' : null} 
                d-flex align-items-center justify-content-center
              `}
            >
              {
                isNum ? e 
                : <span className='material-symbols-outlined'>
                  { isDel ? 'backspace' : isSend ? 'arrow_right_alt' : null }
                </span>
              }
            </button>
          </div>
        )
      })
    }
  </div>
)

export default Keypad;
