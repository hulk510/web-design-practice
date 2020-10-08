import { Container } from '@material-ui/core'
import Header from './header'
import TopBubbleLayout from './topBubble/topBubbleLayout'

export default function Layout({ children }) {
  return (
    <Container>
      <TopBubbleLayout />
      <Header />
      <main style={{ marginTop: "3rem" }}>
        {children}
      </main>
    </Container>
  )
}
