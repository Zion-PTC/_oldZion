export default function MenuBtn({ onClick }) {
  return (
    <button id='menu-btn'
      onClick={onClick}
      style={{
        height: '100%',
        width: '100%',
        placeSelf: 'center',
        gridArea: 'menu-btn'
      }}>

    </button>
  )
}
