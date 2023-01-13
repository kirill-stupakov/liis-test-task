import fs from 'fs';
import path from 'path';
import template from './component.template.js';

// grab component name from terminal argument
const [name, componentPath] = process.argv.slice(2);

if (!name) {
  throw new Error('You must include a component name.');
}

const dir = path.resolve('./src', componentPath ?? 'components', name);

// throw an error if the file already exists
if (fs.existsSync(dir)) {
  throw new Error('A component with that name already exists.');
}

// create the folder
fs.mkdirSync(dir);

const writeFileErrorHandler = (err) => {
  if (err) {
    throw err;
  }
};

template(name).forEach(({ fileName, content }) => {
  fs.writeFile(`${dir}/${fileName}`, content, writeFileErrorHandler);
});
