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

mystory.parameters = {
  design: {
    type: 'figspec',
    url: "https://www.figma.com/file/rugFzpoJjnRlKHeeA9uQGS/Auditoria?type=design&node-id=85-2807&t=F5PPWcfPqJeqx8f8-4",
    accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE'
  },
}

mystory2.parameters = {
  design: {
    type: 'figma',
    url: "https://www.figma.com/proto/rugFzpoJjnRlKHeeA9uQGS/Auditoria?page-id=101%3A3013&type=design&node-id=102-3179&scaling=min-zoom&starting-point-node-id=102%3A3179",
    accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE'
  },
}

mystory3.parameters = {
  design: {
    type: 'figma',
    url: "https://www.figma.com/file/rugFzpoJjnRlKHeeA9uQGS/Auditoria?type=design&node-id=17-2&t=truWvqsajkrVkUVW-0",
    accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE'
  },
}

mystory4.parameters = {
  design: {
    type: 'figma',
    url: "https://www.figma.com/file/rugFzpoJjnRlKHeeA9uQGS/Auditoria?type=design&node-id=35-1518&t=truWvqsajkrVkUVW-0",
    accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE'
  },
}