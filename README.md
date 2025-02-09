# React Router Dom v6 Bug: Number Query Parameters

This repository demonstrates a bug in React Router Dom v6 where routes with number query parameters behave unexpectedly.  The issue occurs when a route attempts to access a query parameter that is a number. The route may not render correctly, and the query parameter may not be properly handled within the component.

## Bug Description
The provided code defines routes using `react-router-dom` v6.  When navigating to a route with a numerical query parameter, for example `/users?id=123`, the route either does not render correctly, or the query parameter is inaccessible within the component. This unexpected behavior makes it difficult to work with numerical identifiers passed through query parameters.

## Solution
The solution involves using a parameterized route and accessing the query parameter using the `useSearchParams` hook.  This approach correctly handles numerical query parameters, ensuring that they are properly accessed and used within the route component.  This makes working with numerical identifiers in query parameters reliable and consistent.