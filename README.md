# YFBI - Your Fantastic Business Ideas

## Overview
YFBI (Your Fantastic Business Ideas) is a platform for creative thinkers to publicly share and explore any unique business ideas that come into mind. The project was built using Next.js 15, Auth.js and Sanity CMS. It was built alongside <a href="https://www.youtube.com/watch?v=Zq5fmkH0T78&t=19180s&ab_channel=JavaScriptMastery">JavaScript Mastery's Next.js 15 Crash Course</a>, with my own spin of custom design and functionality enhancements.

## Tech Stack
- <b>Framework:</b> Next.js 15
- <b>Backend & CMS:</b> Sanity.io
- <b>Styling:</b> Tailwind CSS
- <b>Deployment:</b> Vercel

## Installation & Setup
To run this project locally, follow these steps:

### Step 1: Obtain OAuth API Keys from GitHub Developer Settings
1. Log in to your GitHub account. 
2. Navigate to GitHub Developer Settings by visiting: Settings → Developer settings → OAuth Apps.
3. Click New OAuth App to create a new application.
4. Fill in the required details, including the Application name, Homepage URL, and Authorization callback URL.
5. Click Register application to proceed.
6. Once registered, navigate to the application's settings to find your Client ID and Client Secret.

### Step 2: Create a Sanity account & project
Sign up and create a new project on [Sanity.io](https://www.sanity.io/).  

### Step 3: Clone the repository

```sh
git clone https://github.com/ssim3/yfbi.git
cd yfbi
```

### Step 4: Install dependencies

`
npm install
`

### Step 5: Set up Auth.js Environment

You can follow <a href="https://authjs.dev/getting-started/installation">this link</a> to setup Auth.js for your local development server.

### Step 6: Set up environment variables

Create a .env.local file and add the following environment variables obtained from Sanity, Auth.js and Github OAuth:

```env
AUTH_SECRET=XXXXXXXXXXXXXXXXXXXXXX
AUTH_GITHUB_ID=XXXXXXXXXXXXXXXXXXXXXX
AUTH_GITHUB_SECRET=XXXXXXXXXXXXXXXXXXXXXX

NEXT_PUBLIC_SANITY_DATASET=XXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_SANITY_PROJECT_ID=XXXXXXXXXXXXXXXXXXXXXX
SANITY_API_WRITE_TOKEN=XXXXXXXXXXXXXXXXXXXXXX
```

### Step 6: Run the development server

`
npm run dev
`

The project should now be available at http://localhost:3000/.

## Deployment
The project is deployed on Vercel (yes I heard about the critical exploit, still free though). 

To deploy your own version, connect your GitHub repository to Vercel and follow their deployment steps.

## Contributing
If you'd like to contribute to the project, feel free to fork the repo, make your changes, and submit a pull request! There's definitely a lot of hidden bugs that I missed throughout the project...
