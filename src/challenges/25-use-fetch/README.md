# useFetch Hook

## Description

Create a custom `useFetch` hook that handles data fetching with loading states, error handling, request cancellation via AbortController, and optional caching.

## Requirements

- Accept a URL string parameter
- Return an object with `data`, `loading`, and `error` properties
- Start in a loading state and resolve to either data or error
- Cancel pending requests when the URL changes or component unmounts (AbortController)
- Handle non-OK HTTP responses as errors
- Optionally cache responses to avoid refetching the same URL

## Examples

```tsx
const { data, loading, error } = useFetch<User[]>('/api/users')

if (loading) return <Spinner />
if (error) return <p>Error: {error}</p>
return <UserList users={data!} />
```
