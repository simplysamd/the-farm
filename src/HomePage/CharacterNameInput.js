import React, {useState, useCallback} from 'react'
import PropTypes from 'prop-types'

const CharacterNameInput = ({confirmUsername}) => {
  const [characterName, setCharName] = useState('')

  const handleNameChange = useCallback(e => {
    const currVal = e.target.value
    setCharName(currVal)
  }, [])

  const handleKeyDown = useCallback(e => {
    if (e.which === 13) {
      confirmUsername(characterName)
    }
  }, [characterName])

  return (
    <input
      className='character-name-input'
      placeholder='character name'
      value={characterName}
      onChange={handleNameChange}
      onKeyDown={handleKeyDown}
    />
  )
}

export default CharacterNameInput

CharacterNameInput.propTypes = {
  confirmUsername: PropTypes.func
}
