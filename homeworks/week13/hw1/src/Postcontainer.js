import { connect } from 'react-redux'
import { changeTitle } from './ations'
import Post from './Post'

const mapDispatchProps = dispatch => ({
    changeTitle: title => dispatch(changeTitle(title))
})

export default connect(null, mapDispatchProps)(Post)