import React, {useState, useCallback, useRef, useEffect} from 'react'
import CharacterNameInput from './CharacterNameInput'
import {searchForPlayer, fetchPlayerById, fetchCharacterDataById} from '../Data/dataCalls'

const CharacterSearchContainer = ({selChar, setSelChar}) => {
  const [characterName, setCharName] = useState('')
  const [characterId, setCharId] = useState('')
  const [charactersInfo, setCharsInfo] = useState({})
  const [focusedPlayerIndex, setFocusedPlayerIndex] = useState(null)
  const inputRef = useRef({})

  useEffect(() => {
    if (
      focusedPlayerIndex !== null &&
      (
        charactersInfo[focusedPlayerIndex] &&
        !charactersInfo[focusedPlayerIndex]['characterDataFound']
      )
    ) {
      fetchCharacterData()
    }
  }, [focusedPlayerIndex])

  const fetchCharacterData = useCallback(() => {
    console.log('go')
    fetchCharacterDataById(charactersInfo[focusedPlayerIndex]['membershipId'])
      .then(res => {
        console.log(res)
      })
  }, [charactersInfo, focusedPlayerIndex])

  const handleNameChange = useCallback(e => {
    const currVal = e.target.value
    setCharName(currVal)
  }, [])

  const handleKeyDown = useCallback(e => {
    if (e.which === 13) {
      searchForPlayer(characterName)
        .then(res => {
          if (res === 'error') {
            console.log(res)
          } else if (res.length > 1) {
            console.log('big array', res)
            // res.forEach(each => {
            //   fetchUserById(each.membershipId)
            // })
          } else if (res.length === 1) {
            console.log('JUST ONE', res[0])
            setCharsInfo(res.map(each => {
              each.characterDataFound = false
              return each
            }))
            setFocusedPlayerIndex(0)
            // setSelChar(res[0])

            // fetchPlayerById('each.membershipId')
          } else if (res.length === 0) {
            console.log('none found', res)
          } else {
            console.log('fell through!!!!!!!!!!!!!!!!!!!')
          }
        })
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
