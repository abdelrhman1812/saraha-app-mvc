## resolve () from path

- to get path

## join () from path

- to join (resolve ==> path with page ===> index.html)
- ex ==> join (resolve () , "index.html)

## app.use('/public', express.static("public"))

- to access files same js css ...

## when use MVC I use only 2 method GET , POST

## app.use(express.urlencoded({ extended: true }))

- when i send in req come from form_data

## template engine

- that make dynamic content ==> same JSX , that help me to write logic in html

## res.render('index.ejs')

- render ==> used to render file I use in it template engine

- render("index.ejs",{data that i need show it})

## ejs

<% Write any code js %>
<%= write variable %>
<%- write variable %>
<%- include() %> ===> use for import
<%# comment %>

## default ===> browser read views

- to change it ===> app.set(views , new name )

- app.set(view engine , ejs ) == > if don`t write ejs when render any file

## render vs redirect

- always ask your self , what is I need before choose ' render or redirect '

- redirect it use when i use method post
- render it use when i use method get

## express-session

- by use it i can save id in cookies from backend

## `${req.protocol}://${req.get('host')}${req.originalUrl}`

- to get url dynamic
