This is a quick PoC made with a starter template for [Learn Next.js](https://nextjs.org/learn).

It will demonstrate the basic user auth workflow using [Logto IdP solution](https://nextjs.org/learn).

## Steps to deploy the app
1. make sure your local docker machine is running
2. curl -fsSL https://raw.githubusercontent.com/logto-io/logto/HEAD/docker-compose.yml | TAG=prerelease docker compose -p logto -f - up
3. npm install
4. npm run dev

## Things you could try out
* Login page: http://localhost:3000/
* Demo app: http://localhost:3001/demo-app
* Admin coneols: http://localhost:3002/console/get-started
