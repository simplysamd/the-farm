import React, {useState, useCallback} from 'react'
import PropTypes from 'prop-types'
import CharacterNameInput from './CharacterNameInput'
import {fetchSwapiLuke} from '../Data/dataCalls'
import axios from 'axios'

const CharacterSearchContainer = () => {
  const confirmUsername = useCallback(name => {
    console.log('username is', name)
    fetchSwapiLuke()
  }, [])

  return (
    <CharacterNameInput confirmUsername={confirmUsername} />
  )
}

export default CharacterSearchContainer
