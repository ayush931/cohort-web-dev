docker compose up -d
echo '-Waiting for the database to be ready'
./scripts/wait-for-it.sh "postgresql://ayush:secret123@localhost:5432/mydb" -- echo "Database is ready"
npx prisma migrate dev --name init
npm run test
docker compose down