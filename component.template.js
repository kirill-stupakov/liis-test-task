const componentTemplate = (name) => `import { FC } from 'react';
import styles from './${name}.module.scss'; 
 
interface Props {

}

const ${name}: FC<Props> = () => {
  return (
    <div>${name}</div>
  );
};

export default ${name};
`;

const stylesTemplate = (name) => `@import 'styles/common';
`;

const indexTemplate = (name) => `export { default } from './${name}';
`;

export default (name) => [
  {
    fileName: `${name}.tsx`,
    content: componentTemplate(name),
  },
  {
    fileName: `${name}.module.scss`,
    content: stylesTemplate(name),
  },
  {
    fileName: 'index.ts',
    content: indexTemplate(name),
  },
];
