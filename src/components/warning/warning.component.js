import './warning.style.scss'

const Warning = ({ visibility, handleWarning }) => (
  <div className={`warning-bg ${ visibility ? 'visible' : '' } d-flex justify-content-center align-items-center`}>
    <div className='warning-container d-flex flex-column justify-content-center align-items-center'>
    <span onClick={handleWarning} className='cancel material-symbols-outlined'>close</span>

      <span className='warning material-symbols-outlined pb-2'>warning</span>
      <span className='pt-2 fw- fs-5'>
        <span className='text-secondary'>Transfer Limit</span>
        <span className='text-primary ps-2 fw-bold'>₦ 99,999</span>
      </span>
    </div>
  </div>
)

export default Warning;
