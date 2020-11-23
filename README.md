# Burger App

Burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

---

## Table of contents

- [About the App](#About-the-App)
- [Technologies](#Technologies)
- [Setup](#Setup)
- [Improvement](#Improvement)

---

## About the App

- Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

- Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

- Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

- The app will store every burger in a database, whether devoured or not.

---

<br>

### Technologies

```

Javascript
Node
Handlebars
MySQL

```

<br>

---

### Setup

The application will be deployed in **Heroku**:

[Link to APP](https://julias-burger-app.herokuapp.com)

<br>

---

### Improvement

<br>

**The Application is not running yet.**

<br>
Debugging required for:
<br>

```
at=error code=H13 desc="Connection closed without response" method=GET path="/" host=julias-burger-app.herokuapp.com request_id=96b5652e-d5d9-4206-8f3a-c54379a1e683 fwd="120.159.231.167" dyno=web.1 connect=0ms service=15ms status=503 bytes=0 protocol=https
```

&
<br>

```
 at=error code=H14 desc="No web processes running" method=GET path="/" host=julias-burger-app.herokuapp.com request_id=bd898cff-2ed4-4e63-8816-88138c676e85 fwd="120.159.231.167" dyno= connect= service= status=503 bytes= protocol=https
```
