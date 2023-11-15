import styled from 'styled-components'

export const CardComponent = styled.div`
  .topCard {
    gap: 1rem;
    display: flex;
    align-items: center;
  }
`
export const Root = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const PlayAction = styled.button`
  color: #d5d9dc;
  font-size: 1.4rem;
  background-color: transparent;
`
export const Image = styled.img`
  width: 30px;
  border-radius: 0.2rem;
`
export const MusicInformation = styled.div`
  .artistName {
    color: #d5d9dc;
    font-weight: bold;
  }

  .musicName {
    color: #d5d9dc;
    font-size: 0.8rem;
  }
`
export const EditAction = styled.button`
  color: #d5d9dc;
  font-size: 1.8rem;
  background-color: transparent;
`
