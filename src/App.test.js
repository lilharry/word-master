import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the ANNIVERSDLE title', () => {
  render(<App />)
  const title = screen.getByText(/ANNIVERSDLE/i)
  expect(title).toBeInTheDocument()
})
