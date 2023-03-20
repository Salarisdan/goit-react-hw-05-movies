import { Dna } from 'react-loader-spinner';
import css from './LoaderSx.module.css';

// Define a functional component called Loader
export const Loader = () => (
  // Render a div with a CSS class of "loader"
  <div className={css.loader}>
    {/* Render the Dna component with the following props:
        - visible: true
        - height: "80"
        - width: "80"
        - ariaLabel: "dna-loading"
        - wrapperStyle: an empty object
        - wrapperClass: "dna-wrapper" */}
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>
);
