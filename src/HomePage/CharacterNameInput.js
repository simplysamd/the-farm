import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

const CharacterNameInput = ({
  characterName,
  handleNameChange,
  handleKeyDown,
  handleClick,
  inputRef
}) => {
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className='character-name-input-container'>
      <input
        type='text'
        ref={inputRef}
        className='character-name-input'
        placeholder='CHARACTER NAME'
        value={characterName}
        onChange={handleNameChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default CharacterNameInput

CharacterNameInput.propTypes = {
  characterName: PropTypes.string,
  handleNameChange: PropTypes.func,
  handleKeyDown: PropTypes.func,
  handleClick: PropTypes.func,
  inputRef: PropTypes.object
}
