import './CreateTodoButton.css'


export default function CreateTodoButton({setOpenModal}) {
  return (
    <button className='CreateTodoButton' onClick={() => {
        setOpenModal(state => !state);
      }}>
      +
    </button>
  )
}

export { CreateTodoButton };