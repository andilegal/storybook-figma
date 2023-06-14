import { withDesign } from 'storybook-addon-designs';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'FigmaExample',
  component: 'MyComponent',
  decorators: [withDesign],
  
};

export default meta;

export const mystory = ()=> <button>anders</button>


mystory.parameters = {
  design: {
    type: 'figspec',
    url: "https://www.figma.com/file/rugFzpoJjnRlKHeeA9uQGS/Auditoria?type=design&node-id=85-2807&t=F5PPWcfPqJeqx8f8-4",
    accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE'
  },
}
