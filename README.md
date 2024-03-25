# Task Manager

This is a Task Manager project bootstrapped with `create-t3-app`.

You can see the deployed version [here]().

### Contents

[Prerequisites](#prerequisites)

[Installation](#installation)

[Decisions](#decisions)

[Ways to improve](#ways)



## Prerequisites

For this project to work, you need to set up authentication.
```bash
cp .env.example .env
```

Follow [this](https://next-auth.js.org/providers/discord) guide to set up Discord provider and set the following variables
```env
# Next Auth Discord Provider
DISCORD_CLIENT_ID=""
DISCORD_CLIENT_SECRET=""
```

You can also set up other providers if you wish.

## Installation
Install dependencies
```bash
npm install
```

Setup database (with Docker)
```bash
./start-database
```

Push Prisma schema to database
```bash
npm run db:push
```

You can now run the application for development
```bash
npm run dev
```

## Decisions

- Since I haven't worked with T3++ before, I spent a lot of time exploring and testing and chose to:

  - Prioritize functionality
  - Not make continuous commits to git as it would be a lot of back and forth

## Ways to improve

Code:
- Add toast manager to detect changes
- Create more reusable components
- Improve interfaces and types
- Improve performance with Suspense
- Cover more code with error handling
- Deploy with CI/CD
- And of course write tests

Functionaility:
- Assign permissions
- Separate by workspaces, boards and pages
- Privacy settings
- Add more fields like tags, assignee, dates