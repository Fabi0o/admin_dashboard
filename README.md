# Admin_dashboard

App done using Next.js with TypeScript using dummyjson api for mock data and Recharts for rendering chart to visualise that data. [Live Preview!](https://admin-dashboard-six-rho.vercel.app/)

### App functionality

- Show table with all carts fetched from dummyjson api
- User can pick any cart by clicking on it and all product's prices from choosen cart will be displayed on line charts from Recharts
- There are to lines on the chart: one for normal price and second one for discount price
- User also can add and delete carts (mostly done by dummyjson api, only deletion of carts added by user are handled outside of api for sustaining non-repeatability of cart ID)
