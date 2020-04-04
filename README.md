### Installation

`yarn install`

### Running

This example requires docker posgressdb installation.  See `config/db.config.ts` for connection options, and make sure there are matching options for the dabase installation and the source code.

#### Docker

There is a `docker-compose.yml` file for starting Docker.

`docker-compose up`

After running the sample, you can stop the Docker container with

`docker-compose down`

### Run migrations

`yarn migration:up`

### Run the sample

Then, run Nest as usual:

`yarn start:debug`