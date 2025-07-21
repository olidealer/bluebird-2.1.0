# Rental Property Tax

This repository contains a minimal scaffold for the **Rental Property Tax** application. It is intended as a starting point for a production-ready web app that helps hosts in Costa Rica manage monthly taxes for their short-term rental properties.

## Architecture

The project is organized as a three-tier system orchestrated with Docker:

- **Frontend** – A single page application built with React, Vite, TypeScript and TailwindCSS.
- **Backend** – A RESTful API implemented with Node.js, Express, TypeScript and Prisma ORM.
- **Database** – PostgreSQL.

```
./frontend  - React SPA
./backend   - Express API
```

The `docker-compose.yml` file starts the database, backend and frontend services for local development.

## Setup

1. Ensure Docker and Docker Compose are installed.
2. Copy `.env.example` to `.env` and adjust the variables if necessary.
3. Run `docker-compose up --build` to start the stack.

The frontend will be available on `http://localhost:5173` and the backend API on `http://localhost:3000` by default.

## Features

The scaffold provides basic structure only. You will need to implement the following features:

- User authentication with JWT and bcrypt.
- Reservation management and automatic income tracking.
- XML invoice uploads and automatic VAT credit calculation.
- Monthly and annual reports in PDF/Excel formats compatible with the D‑104‑2 (VAT) and D‑125 (income tax) forms.
- Dashboard with tax calculations as described in the project specification.

## Disclaimer

This repository contains only a minimal skeleton. Many production features (such as validation, error handling, PDF generation and XML parsing) still need to be implemented. Use this scaffold as a reference to continue building the complete application.
