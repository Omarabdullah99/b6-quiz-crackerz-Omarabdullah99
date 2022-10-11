import React from 'react';

const Blog = () => {
    return (
        <div className='w-8/12 mx-auto'>  
            <div className='mt-10'>
            <h1 className='text-2xl font-bold'>what is the purpose of react router?</h1>
            <p>React Router is a standard library for routing in React. It enables the navigation among views of various <br /> components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. <br /> <br />
            By default, routes are inclusive which means more than one Route component can match the URL path and render at the same time. If we want to render a single component, we need to use routes.
            </p>
            
            </div>

            <div className='my-10'>
            <h1 className='text-2xl font-bold'>How dose Context API work?</h1>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br /> <br />
            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
            </p>
            </div>

            <div className='mb-10'> 
            <h1 className='text-2xl font-bold'>What is useRef hooks?</h1>
            <p>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
            The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.  <br /> <br />
            The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. 
            </p>
            </div>

        </div>
    );
};

export default Blog;