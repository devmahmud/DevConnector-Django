## DevConnector

DevConnector is a Social Network For Developers. In this Project I have used Django and Django-Rest-Framework for Backend and React For Frontend.

### Demo of this site available here [DevConnector Demo](https://devconn.netlify.com)

## Frontend( React )

#### To install dependency

```
npm install
```

#### To start the server

```
npm start
```

#### For Production Build

```
npm run build
```

- I have used proxy `http://127.0.0.1` for axios in package.json
- You can set axios.defaults.baseURL = `https://api.example.com` Globally

## Backend( Django )

#### Installing

open terminal and type

```
git clone https://github.com/devmahmud/DevConnector-Django.git
```

or you can download using the url below

```
https://github.com/devmahmud/DevConnector-Django.git
```

#### Requirements

To install requirements type

```
pip install -r requirements.txt
```

`To use Github api put your credentials in settings.py`

```
GIT_CLIENT_ID = 'your github client id'
GIT_CLIENT_SECRET = 'your github client secret'
```

To migrate the database open terminal in project directory and type

```
python manage.py makemigrations
python manage.py migrate
```

To run the program in local server use the following command

```
python manage.py runserver
```

Server will be available at `http://127.0.0.1:8000` in your browser

Don't Forget to whitelist your host origin using `django-cors-header` when using in production<br>
[See Documentation](https://pypi.org/project/django-cors-headers/)

#### Author

<blockquote>
Mahmudul alam<br>
Email: expelmahmud@gmail.com
</blockquote>

========Thank You !!!=========
