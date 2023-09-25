import Star from '../../assets/star.svg'
import Pencil from '../../assets/pencil.svg'
import Paint from '../../assets/paint.svg'
import Delete from '../../assets/exit.svg'
import {
  Color,
  ColorsContainer,
  LeftFooterContainer,
  NoteContainer,
  NoteHeader,
  PaintIconContainer,
} from './styles'
import { useState } from 'react'

export default function Note() {
  const [showColors, setShowColors] = useState(false)

  function toggleShowColors() {
    setShowColors((color) => !color)
  }

  return (
    <NoteContainer>
      <NoteHeader>
        <input placeholder="Título" />
        <img src={Star} alt="Star outline" />
      </NoteHeader>
      <textarea placeholder="Clique ou arraste o arquivo para esta área para fazer upload" />
      <footer>
        <LeftFooterContainer>
          <img src={Pencil} alt="Pencil" />
          <PaintIconContainer colorsBeingDisplayed={showColors}>
            <img src={Paint} alt="Paint" onClick={toggleShowColors} />
          </PaintIconContainer>
        </LeftFooterContainer>
        {showColors && (
          <ColorsContainer>
            <Color color={'lightBlue'} />
            <Color color={'mediumBlue'} />
            <Color color={'darkBlue'} />
            <Color color={'orange'} />
            <Color color={'lightRed'} />
            <Color color={'mediumRed'} />
            <Color color={'darkRed'} />
            <Color color={'purple'} />
            <Color color={'lime'} />
            <Color color={'colorPalleteGray'} />
            <Color color={'colorPalleteDarkGray'} />
            <Color color={'brown'} />
          </ColorsContainer>
        )}
        <img src={Delete} alt="Exit symbol" />
      </footer>
    </NoteContainer>
  )
}
