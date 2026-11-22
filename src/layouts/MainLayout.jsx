import { Outlet } from 'react-router-dom'
import { BrandHeader } from '../components/BrandHeader'

export function MainLayout() {
  return (
    <div className="app-shell">
      <BrandHeader />
      <Outlet />
    </div>
  )
}
