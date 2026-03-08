import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CompoundComponentsDemo, { Tabs } from './index'

describe('CompoundComponents - Tabs', () => {
  const renderTabs = () =>
    render(
      <Tabs defaultIndex={0}>
        <Tabs.TabList>
          <Tabs.Tab index={0}>Tab A</Tabs.Tab>
          <Tabs.Tab index={1}>Tab B</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanels>
          <Tabs.TabPanel index={0}>Panel A Content</Tabs.TabPanel>
          <Tabs.TabPanel index={1}>Panel B Content</Tabs.TabPanel>
        </Tabs.TabPanels>
      </Tabs>
    )

  it('renders tab buttons', () => {
    renderTabs()
    expect(screen.getByText('Tab A')).toBeInTheDocument()
    expect(screen.getByText('Tab B')).toBeInTheDocument()
  })

  it('shows the default active panel', () => {
    renderTabs()
    expect(screen.getByText('Panel A Content')).toBeInTheDocument()
    expect(screen.queryByText('Panel B Content')).not.toBeInTheDocument()
  })

  it('switches panel when clicking a different tab', async () => {
    renderTabs()
    await userEvent.click(screen.getByText('Tab B'))
    expect(screen.getByText('Panel B Content')).toBeInTheDocument()
    expect(screen.queryByText('Panel A Content')).not.toBeInTheDocument()
  })

  it('uses correct ARIA roles', () => {
    renderTabs()
    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(screen.getAllByRole('tab')).toHaveLength(2)
    expect(screen.getByRole('tabpanel')).toBeInTheDocument()
  })

  it('renders demo component', () => {
    render(<CompoundComponentsDemo />)
    expect(screen.getByText('Compound Components - Tabs')).toBeInTheDocument()
    expect(screen.getByText('Content for Tab 1')).toBeInTheDocument()
  })
})
