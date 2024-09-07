# Muzer
## A Song/Stream Voting and streaming Application

## Overview

This project is a web application built with Next.js, Prisma, Tailwind CSS, and shadCN. It allows creators to organize a list of songs or streams to be played based on votes from users. The application provides an interactive interface for users to vote on their preferred songs or streams, and the system updates the playlist accordingly.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Prisma**: ORM for managing database interactions and schema migrations.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **shadCN**: Component library for building user interfaces.

## Features

- **Voting System**: Users can vote for their favorite songs or streams.
- **Playlist Management**: Creators can organize and manage the playlist based on votes.
- **Responsive Design**: Styled with Tailwind CSS for a modern and responsive layout.

## Getting Started

### Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)


### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MohdSaquib114/MUZER.git
   cd your-repository
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the database:**

   - Create a `.env` file in the root directory and add your database connection string:

     ```env
     DATABASE_URL="your-database-connection-string"
     GOOGLE_CLIENT_ID = "your-GOOGLE_CLIENT_ID"
     GOOGLE_CLIENT_SECRET = "your-google-client-secret"
     NEXTAUTH_SECRET = "your-nextauth-secret"
     ```

   - Run Prisma migrations to set up the database schema:

     ```bash
     npx prisma migrate dev
     ```

### Running the Application Locally

1. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

2. **Build the application for production:**

   ```bash
   npm run build
   ```

3. **Start the production server:**

   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact [your-email@example.com](mailto:your-email@example.com).

---

Feel free to adjust the sections according to your needs and replace placeholder values with actual information.