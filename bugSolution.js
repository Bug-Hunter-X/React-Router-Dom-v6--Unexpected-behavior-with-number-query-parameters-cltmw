```javascript
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<User />} />
        {/* ... more routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function User() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('id');

  return (
    <div>User {userId}</div>
  );
}

export default App;
```