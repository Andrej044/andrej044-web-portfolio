import './Modal.css'


const Modal = ({active, setActive, message}) => {
  return(
    <div className={active ? 'modal active': 'modal'}>
      <div className='modal__content'>
        <p>{message}</p>
        <button className='btn modal__btn' onClick={()=>setActive(false)}>OK</button>
      </div>
    </div>
  )
}


export default Modal