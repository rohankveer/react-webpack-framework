import { useParams } from 'react-router-dom'
import mainLogo from '../../images/logo.png'

function PageLayout() {
  let { pageId } = useParams()
  return (
    <>
      <img src={mainLogo} height={50} width={50} alt="img" />
      <h2>{`Page Layout ${pageId}`}</h2>
    </>
  )
}

export { PageLayout }
