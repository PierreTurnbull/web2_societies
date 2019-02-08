import React from 'react';
import { PopUpContext } from './popUp.provider';

export function withPopUpContext(Component) {
    function WrapperComponent(props) {
        const { forwardedRef, ...rest } = props;
        return (
            <PopUpContext.Consumer>
                {(state) => <Component ref={forwardedRef} {...rest}  {...props} popUp_context={state} />}
            </PopUpContext.Consumer>
        );
    };

    return React.forwardRef((props, ref) => {
        return <WrapperComponent {...props} forwardedRef={ref} />;
    });
}