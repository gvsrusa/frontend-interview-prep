# Compound Components

## Description

Build a Tabs component using the compound component pattern. The parent `Tabs` component manages state, and child components (`Tab`, `TabPanel`) implicitly share state via React Context.

## Requirements

- `Tabs` parent component manages the active tab index
- `Tabs.TabList` renders the row of tab buttons
- `Tabs.Tab` renders a single tab button; clicking switches the active panel
- `Tabs.TabPanels` wraps the panel content
- `Tabs.TabPanel` renders its content only when its index matches the active tab
- Use React Context to share state between parent and children
- Support a `defaultIndex` prop on `Tabs`
- Use proper ARIA roles: `tablist`, `tab`, `tabpanel`

## Examples

```jsx
<Tabs defaultIndex={0}>
  <Tabs.TabList>
    <Tabs.Tab index={0}>Profile</Tabs.Tab>
    <Tabs.Tab index={1}>Settings</Tabs.Tab>
  </Tabs.TabList>
  <Tabs.TabPanels>
    <Tabs.TabPanel index={0}>Profile content here</Tabs.TabPanel>
    <Tabs.TabPanel index={1}>Settings content here</Tabs.TabPanel>
  </Tabs.TabPanels>
</Tabs>
```
