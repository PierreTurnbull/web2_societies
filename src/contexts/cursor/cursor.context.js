import React from 'react';
import { CursorContext } from './cursor.provider';

export function withCursorContext(Component) {
    function WrapperComponent(props) {
        const { forwardedRef, ...rest } = props;
        return (
            <CursorContext.Consumer>
                {(state) => <Component ref={forwardedRef} {...rest}  {...props} cursor_context={state} />}
            </CursorContext.Consumer>
        );
    };

    return React.forwardRef((props, ref) => {
        return <WrapperComponent {...props} forwardedRef={ref} />;
    });
}