import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './pages/routes'

export function App() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <RouterProvider router={router} />
      </div>
    </>
  )
}
