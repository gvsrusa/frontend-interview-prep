import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ChallengeLayout from './components/ChallengeLayout'
import DsaLayout from './components/DsaLayout'
import ErrorBoundary from './components/ErrorBoundary'

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/challenge/:slug" element={<ChallengeLayout />} />
        <Route path="/dsa/:slug" element={<DsaLayout />} />
      </Routes>
    </ErrorBoundary>
  )
}
