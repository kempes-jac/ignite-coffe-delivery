import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'
import { defaultTheme } from './styles/themes/default'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
