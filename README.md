# To-do-list-api
- You need Python 3.6 and pipenv
- You need Node 12.13.0

# Download in Github
```shell
git clone https://github.com/yvzkr/To-do-list-api todo-list-app
cd todo-list-app
```

# Install dependencies for server
```shell
pipenv shell
pipenv install
npm install
```
# Prepare Database
```shell
python todolist/manage.py migrate
```

# Run server django (on root path)
```shell
python todolist/manage.py runserver
```

# Run the  server with concurrently
```shell
npm run dev
```

# Server runs on http://localhost:8000/#/login 
