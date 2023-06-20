import SideBar from './SideBar'
import Perfil from './Perfil'

const Header = () => {
  return (
    <>
      <div style={styles.wrapper}>
        <SideBar />
        <Perfil/>
      </div>
    </>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    background: "#f1f1f1"
  }
}

export default Header