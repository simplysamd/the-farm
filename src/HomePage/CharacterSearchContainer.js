import React, {useState, useCallback, useRef} from 'react'
import CharacterNameInput from './CharacterNameInput'
import {fetchUserInfo} from '../Data/dataCalls'

const CharacterSearchContainer = () => {
  const [characterName, setCharName] = useState('')
  const [characterId, setCharId] = useState('')
  const inputRef = useRef({})

  const handleNameChange = useCallback(e => {
    const currVal = e.target.value
    setCharName(currVal)
  }, [])

  const handleKeyDown = useCallback(e => {
    if (e.which === 13) {
      fetchUserInfo(characterName)
        .then(res => console.log(res))
    }
  }, [characterName])

  return (
    <div>
      <CharacterNameInput
        characterName={characterName}
        handleNameChange={handleNameChange}
        handleKeyDown={handleKeyDown}
        inputRef={inputRef}
      />
    </div>
  )
}

export default CharacterSearchContainer
