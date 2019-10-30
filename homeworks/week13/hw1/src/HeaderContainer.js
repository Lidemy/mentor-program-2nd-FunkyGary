import { connect } from 'react-redux'
import Header from './Header'

const mapStateToProps = state => ({
    title: state.app.title
})

export default connect(mapStateToProps, null)(Header)