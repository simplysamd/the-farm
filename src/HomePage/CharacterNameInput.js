import React, {useState, useCallback, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'

const CharacterNameInput = ({confirmUsername}) => {
  const [characterName, setCharName] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.style.backgroundColor = 'white'
    inputRef.current.focus()
  }, [])

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
    <div className='character-name-input-container'>
      <input
        type='text'
        ref={inputRef}
        className='character-name-input'
        placeholder='character name'
        value={characterName}
        onChange={handleNameChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default CharacterNameInput

CharacterNameInput.propTypes = {
  confirmUsername: PropTypes.func
}
