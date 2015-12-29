
# serverless-dashboard

React and Redux based Dashboard for Serverless

# Configure

To point Serverless Dashboard to the projects you wish for it to work with:

Create a `.serverless-dashboard` file in `~/` with full paths to your Serverless projects:

Example:
```
/Users/serverless/projects/serverless-blog-project
/Users/serverless/projects/serverless-contact-form-project
```

## Running the project

The generated project includes a development server on port `3000`, which will rebuild the app whenever you change application code. To start the server (with the dev-tools enabled), run:

```bash
$ npm start
```

To run the server with the devtools disabled, run:

```bash
$ DEBUG=false npm start
```

To build for production, this command will output optimized production code:

```bash
$ npm run build
```
