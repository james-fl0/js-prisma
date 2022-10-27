## Javascript + Prisma

This is an example repo for testing the FL0 platform. It contains:

* Pure javascript source code
* Prisma ORM used to manage the database
* Typescript is used to generate the Prisma client, but not used for compiling source code


### Getting Started

In the FL0 portal, navigate to Environment Variables and create one called  `DATABASE_URL`. Use the credentials from your Postgres service formatted as follows:

```
postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public
```

### Known issues

1. Root URL requires trailing slash or it will return 404


