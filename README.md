# Adonis REST API

API server in AdonisJs, to Manage projects and tasks.

It comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds


## Setup

Clone the repo and then run the following commands:

```bash
npm install
cp .env.example .env
adonis key:generate
adonis migration:run
adonis serve --dev
```


## List Routes

```bash
$ adonis route:list
┌────────────────────────────────────┬──────────┬───────────────────────────┬────────────┬─────────────────────────────┬────────┐
│ Route                              │ Verb(s)  │ Handler                   │ Middleware │ Name                        │ Domain │
├────────────────────────────────────┼──────────┼───────────────────────────┼────────────┼─────────────────────────────┼────────┤
│ /                                  │ HEAD,GET │ Closure                   │            │ /                           │        │
├────────────────────────────────────┼──────────┼───────────────────────────┼────────────┼─────────────────────────────┼────────┤
│ /api/v1/users/register             │ POST     │ UserController.store      │            │ /users/register             │        │
├────────────────────────────────────┼──────────┼───────────────────────────┼────────────┼─────────────────────────────┼────────┤
│ /api/v1/users/login                │ POST     │ UserController.login      │            │ /users/login                │        │
├────────────────────────────────────┼──────────┼───────────────────────────┼────────────┼─────────────────────────────┼────────┤
│ /api/v1/projects                   │ HEAD,GET │ ProjectController.index   │ auth       │ /projects                   │        │
├────────────────────────────────────┼──────────┼───────────────────────────┼────────────┼─────────────────────────────┼────────┤
│ /api/v1/projects                   │ POST     │ ProjectController.create  │ auth       │ /projects                   │        │
├────────────────────────────────────┼──────────┼───────────────────────────┼────────────┼─────────────────────────────┼────────┤
│ /api/v1/projects/:id               │ DELETE   │ ProjectController.destroy │ auth       │ /projects/:id               │        │
├────────────────────────────────────┼──────────┼───────────────────────────┼────────────┼─────────────────────────────┼────────┤
│ /api/v1/projects/:id               │ PATCH    │ ProjectController.update  │ auth       │ /projects/:id               │        │
├────────────────────────────────────┼──────────┼───────────────────────────┼────────────┼─────────────────────────────┼────────┤
│ /api/v1/projects/:id/tasks         │ HEAD,GET │ TaskController.index      │ auth       │ /projects/:id/tasks         │        │
├────────────────────────────────────┼──────────┼───────────────────────────┼────────────┼─────────────────────────────┼────────┤
│ /api/v1/projects/:id/tasks         │ POST     │ TaskController.create     │ auth       │ /projects/:id/tasks         │        │
├────────────────────────────────────┼──────────┼───────────────────────────┼────────────┼─────────────────────────────┼────────┤
│ /api/v1/projects/:id/tasks/:taskId │ PATCH    │ TaskController.update     │ auth       │ /projects/:id/tasks/:taskId │        │
├────────────────────────────────────┼──────────┼───────────────────────────┼────────────┼─────────────────────────────┼────────┤
│ /api/v1/projects/:id/tasks/:taskId │ DELETE   │ TaskController.destroy    │ auth       │ /projects/:id/tasks/:taskId │        │
└────────────────────────────────────┴──────────┴───────────────────────────┴────────────┴─────────────────────────────┴────────┘
```


## Start dev server

```bash
adonis serve --dev

 SERVER STARTED
> Watching files for changes...

info: serving app on http://127.0.0.1:3333

```


## Enjoy

Based on this good course: https://www.udemy.com/share/101JMc/
