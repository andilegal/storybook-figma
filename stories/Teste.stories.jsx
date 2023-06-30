import { withDesign } from 'storybook-addon-designs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'FigmaExample',
  component: 'MyComponent',
  decorators: [withDesign],
  
};

export default meta;

export const mystory = () => <button>anders</button>
export const mystory2 = ()=> <button>anders</button>
export const mystory3 = ()=> <button>anders</button>
export const mystory4 = ()=> <button>anders</button>
export const mystory5 = ()=> <button>anders</button>

mystory.parameters = {
  design: {
    type: 'figma',
    url: "https://www.figma.com/file/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?type=design&node-id=1108%3A74&mode=dev",
    accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE'
  },
}

mystory2.parameters = {
  design: {
    type: 'figma',
    url: "https://www.figma.com/proto/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?page-id=1108%3A74&type=design&node-id=1563-4824&viewport=695%2C271%2C0.08&scaling=scale-down&starting-point-node-id=1563%3A4824&show-proto-sidebar=1&mode=design",
    accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE'
  },
}

mystory3.parameters = {
  design: {
    type: 'figma',
    url: "https://www.figma.com/file/gfIZ9Z5DhYDyjxds2Rl77D/Specific-Componentes%3A-Votação-|-JARVICS?type=design&node-id=2%3A1506&mode=dev",
    accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE'
  },
}

mystory4.parameters = {
  design: {
    type: 'figma',
    url: "https://www.figma.com/file/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?type=design&node-id=1847-12867&mode=dev",
    accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE'
  },
}

mystory5.parameters = {
  design: {
    type: 'figma',
    url: "https://www.figma.com/file/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?type=design&node-id=1847-12867&mode=dev",
    accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE'
  },
}