import NavBarPlusBox from "./NavBarPlus.style"
import PropTypes from "prop-types"
import { NavBar } from "antd-mobile"

function NavBarPlus(props) {
  let { title } = props
  const handleBack = () => {}

  return (
    <NavBarPlusBox>
      <NavBar onBack={handleBack}>{title}</NavBar>
    </NavBarPlusBox>
  )
}

NavBarPlus.defaultProps = {
  title: "知乎日报"
}

NavBarPlus.propTypes = {
  title: PropTypes.string
}

export default NavBarPlus
