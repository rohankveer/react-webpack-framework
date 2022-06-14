import PropTypes from 'prop-types'

interface PrintNameProps {
  /** The user's name */
  name: string
  /** User's priority */
  priority?: boolean
}

const PrintName: React.FC<PrintNameProps> = (props) => {
  return (
    <div>
      <p style={{ fontWeight: props.priority ? 'bold' : 'normal' }}>
        {props.name}
      </p>
    </div>
  )
}

PrintName.propTypes = {
  name: PropTypes.string.isRequired,
  priority: PropTypes.bool,
}

export default PrintName
