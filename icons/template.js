const template = (variables, { tpl }) => {
  const name = `${variables.componentName}Icon`.replace('Svg', '');

  return tpl`
    ${variables.imports};

    ${variables.interfaces};

    export const ${name} = (${variables.props}) => ${variables.jsx}
    `;
};

module.exports = template;
