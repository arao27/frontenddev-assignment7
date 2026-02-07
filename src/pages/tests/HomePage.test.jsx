import { render, screen } from '@testing-library/react'
import HomePage from '../HomePage'

describe('HomePage Component', () => {
  test('renders without crashing', () => {
    render(<HomePage />)
  })

  test('displays main heading', () => {
    render(<HomePage />)
    expect(screen.getByText(/componentcorner/i)).toBeInTheDocument()
  })
})