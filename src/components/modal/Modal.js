import './Modal.css'


const Modal = ({active, setActive}) => {
  return(
    <div className={active ? 'modal active': 'modal'}>
      <div className='modal__content'>
        <button className='btn modal__btn' onClick={()=>setActive(false)}>OK</button>
      </div>
    </div>
  )
}


export default Modal