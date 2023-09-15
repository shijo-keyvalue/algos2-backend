# algos2-backend
Backend service for Algos 2.0 in KeyCode 2023

# Steps to start server

sh setenv.sh

sudo docker-compose up

npm i

# Create a database (algos2_db) in dbeaver/pgadmin

npm run migrate

npm run dev

# Example endpoint

GET :: http://localhost:3000/api/users
