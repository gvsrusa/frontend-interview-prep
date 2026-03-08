import { createContext, useContext, useState } from 'react'

const TabsContext = createContext(null)

// TODO: Implement the Tabs compound component
// Tabs should manage the active tab index via context
function Tabs({ children, defaultIndex = 0 }) {
  return (
    <div>{children}</div>
  )
}

// TODO: Implement TabList - renders the tab buttons
function TabList({ children }) {
  return <div role="tablist">{children}</div>
}

// TODO: Implement Tab - a single tab button, active when its index matches
function Tab({ children, index }) {
  return <button role="tab">{children}</button>
}

// TODO: Implement TabPanels - renders the active panel
function TabPanels({ children }) {
  return <div>{children}</div>
}

// TODO: Implement TabPanel - renders only when its index matches active
function TabPanel({ children, index }) {
  return <div role="tabpanel">{children}</div>
}

Tabs.TabList = TabList
Tabs.Tab = Tab
Tabs.TabPanels = TabPanels
Tabs.TabPanel = TabPanel

export { Tabs }

export default function CompoundComponentsDemo() {
  return (
    <div>
      <h2>Compound Components - Tabs</h2>
      <Tabs defaultIndex={0}>
        <Tabs.TabList>
          <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
          <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
          <Tabs.Tab index={2}>Tab 3</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanels>
          <Tabs.TabPanel index={0}>Content for Tab 1</Tabs.TabPanel>
          <Tabs.TabPanel index={1}>Content for Tab 2</Tabs.TabPanel>
          <Tabs.TabPanel index={2}>Content for Tab 3</Tabs.TabPanel>
        </Tabs.TabPanels>
      </Tabs>
    </div>
  )
}
