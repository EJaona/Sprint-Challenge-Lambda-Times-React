1. Proptypes are used to used to check the type of data being passed in props to a component. Components sometimes need a specific type of data to preform it's intended duty. So we use type checking to make sure it is receiving the correct type of data.

2)Life cycle events are methods which can be called during the lifecycle of a component

3)HOC takes in components as arguments and returns a new component. It can be used for conditional renders

4)You can style components in react by importing a css file, with styled components, or the styles attribute `style={{}}`

        *styled components gives you the ability to do conditional styling.
        skips having a css import/file.
        Everything is together.
        No style leaks.

        *css file keeps styles and logic separate.
        less code in your js file.

        *Style attribute is fast and easy.
        Styles are confined to the specific element
