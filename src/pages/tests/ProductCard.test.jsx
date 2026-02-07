import { render, screen, fireEvent } from '@testing-library/react'
import ProductCard from '../ProductCard'

describe('ProductCard Component', () => {
  const mockAddToCart = vi.fn()
  const product = {
    name: 'Test Product',
    price: 99.99
  }

  test('renders product name and price', () => {
    render(<ProductCard {...product} addToCart={mockAddToCart} />)

    expect(screen.getByText(product.name)).toBeInTheDocument()
    expect(screen.getByText(`$${product.price}`)).toBeInTheDocument()
  })

  test('renders Add to Cart button', () => {
    render(<ProductCard {...product} addToCart={mockAddToCart} />)
    expect(screen.getByText(/add to cart/i)).toBeInTheDocument()
  })

  test('calls addToCart when button is clicked', () => {
    render(<ProductCard {...product} addToCart={mockAddToCart} />)
    fireEvent.click(screen.getByText(/add to cart/i))
    expect(mockAddToCart).toHaveBeenCalledTimes(1)
  })
})