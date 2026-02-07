import { render, screen, fireEvent } from '@testing-library/react'
import CartItem from '../CartItem'

describe('CartItem Component', () => {
  const mockRemove = vi.fn()
  const item = {
    name: 'Test Item',
    quantity: 2,
    price: 49.99
  }

  test('renders item name and quantity', () => {
    render(<CartItem item={item} remove={mockRemove} />)
    expect(screen.getByText(item.name)).toBeInTheDocument()
    expect(screen.getByText(`Quantity: ${item.quantity}`)).toBeInTheDocument()
  })

  test('calls remove function when remove button is clicked', () => {
    render(<CartItem item={item} remove={mockRemove} />)
    fireEvent.click(screen.getByText(/remove/i))
    expect(mockRemove).toHaveBeenCalledTimes(1)
  })
})