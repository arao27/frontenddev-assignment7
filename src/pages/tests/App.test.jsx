import { render, screen } from '@testing-library/react'
import App from '../App'

// Mock localStorage
beforeEach(() => {
  Storage.prototype.getItem = vi.fn(() => JSON.stringify([{ name: 'Mock Product', quantity: 1 }]))
  Storage.prototype.setItem = vi.fn()
})

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />)
  })

  test('loads cart data from localStorage', () => {
    render(<App />)
    expect(localStorage.getItem).toHaveBeenCalledWith('cart')
    expect(screen.getByText(/mock product/i)).toBeInTheDocument()
  })

  test('saves cart changes to localStorage', () => {
    render(<App />)
    // Any action that triggers setItem in your App will be caught by this mock
    expect(localStorage.setItem).toHaveBeenCalled()
  })
})
