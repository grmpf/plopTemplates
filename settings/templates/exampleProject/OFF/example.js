module.exports = {
  description: 'New example project OFF',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the example?',
    },
    {
      type: 'input',
      name: 'desc',
      message: 'What will the example do/show?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../examples/{{kebabCase name}}/.babelrc',
      templateFile: 'templates/exampleProject/.babelrc.hbs',
    },
    {
      type: 'add',
      path: '../examples/{{kebabCase name}}/.env.local.example',
      templateFile: 'templates/exampleProject/.env.local.example.hbs',
    },
    {
      type: 'add',
      path: '../examples/{{kebabCase name}}/.gitignore',
      templateFile: 'templates/exampleProject/.gitignore.hbs',
    },
    {
      type: 'add',
      path: '../examples/{{kebabCase name}}/next.config.js',
      templateFile: 'templates/exampleProject/next.config.js.hbs',
    },
    {
      type: 'add',
      path: '../examples/{{kebabCase name}}/package.json',
      templateFile: 'templates/exampleProject/package.json.hbs',
    },
    {
      type: 'add',
      path: '../examples/{{kebabCase name}}/README.md',
      templateFile: 'templates/exampleProject/README.md.hbs',
    },
    {
      type: 'add',
      path: '../examples/{{kebabCase name}}/sandbox.config.json',
      templateFile: 'templates/exampleProject/sandbox.config.json.hbs',
    },
    {
      type: 'add',
      path: '../examples/{{kebabCase name}}/tsconfig.json',
      templateFile: 'templates/exampleProject/tsconfig.json.hbs',
    },

    {
      type: 'add',
      path: '../examples/{{kebabCase name}}/pages/_app.tsx',
      templateFile: 'templates/exampleProject/pages/_app.tsx.hbs',
    },
    {
      type: 'add',
      path: '../examples/{{kebabCase name}}/pages/index.tsx',
      templateFile: 'templates/exampleProject/pages/index.tsx.hbs',
    },

    {
      type: 'add',
      path: '../examples/{{kebabCase name}}/public/robots.txt',
      templateFile: 'templates/exampleProject/public/robots.txt.hbs',
    },

    {
      type: 'add',
      path: '../examples/{{kebabCase name}}/src/styles/global.scss',
      templateFile: 'templates/exampleProject/src/styles/global.scss.hbs',
    },
  ],
}
