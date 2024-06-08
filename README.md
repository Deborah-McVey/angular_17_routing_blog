This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

Opened Command Prompt on my computer

cd to folder I want to create new application

ng new angular_17_routing_blog

Selected CSS, Enter

SSR and SSG? N, Enter

Wait for files to be generated:

code angular_17_routing_blog

Will open in VS code

Package.json will tell what version it is

Open terminal in VS Code with Ctrl+`

ng s -o

will open in browser at http://localhost:4200

Browser will display what is in src/app/app.component.html

"Congratulations! Your app is running."

I’m going to delete everything in app.component.html (Ctrl+a, Delete), and add an h1. the browser will update.

Ctrl+c in terminal to stop serving, so you can generate components

generate 2 components

ng g c first

ng g c second

app.component.html

set up nav bar with links to components 
add router outlet at bottom

app.component.ts

add RouterLink and RouterLinkActive

app.routes.ts

add paths without lazy loading yet

it will look like

{ path: 'first-component', component: FirstComponent },
{ path: 'second-component', component: SecondComponent }

ng s to check browser

make sure it works

you can style app.component.css if you want

this is how you change it to lazy loading

 {
    path: 'first-component',
    loadComponent: () => import('./first/first.component').then((c) => c.FirstComponent)
  },
  {
    path: 'second-component',
    loadComponent: () => import('./second/second.component').then((c) => c.SecondComponent)
  },

now we can add children to first component

stop serving, Ctrl+c

generate 2 more components

ng g c child-a

ng g c child-b

go to first.component.html

add h2, links to children, and router outlet

app.routes.ts

add child routes under first component

first.component.ts

you must import RouterOutlet, RouterLink, RouterLinkActive 

ng s

references

https://angular.dev/

https://dev.to/bytebantz/mastering-angular-17-routing-2mf2

VS Code extensions I recommend

Prettier

Path Intellisense
