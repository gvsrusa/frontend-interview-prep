import { createContext, useContext, useState } from 'react'

const TabsContext = createContext(null)

function Tabs({ children, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div>{children}</div>
    </TabsContext.Provider>
  )
}

function TabList({ children }) {
  return <div role="tablist">{children}</div>
}

function Tab({ children, index }) {
  const { activeIndex, setActiveIndex } = useContext(TabsContext)
  const isActive = activeIndex === index

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => setActiveIndex(index)}
      style={{
        fontWeight: isActive ? 'bold' : 'normal',
        borderBottom: isActive ? '2px solid blue' : '2px solid transparent',
        background: 'none',
        padding: '8px 16px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  )
}

function TabPanels({ children }) {
  return <div>{children}</div>
}

function TabPanel({ children, index }) {
  const { activeIndex } = useContext(TabsContext)
  if (activeIndex !== index) return null

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
