import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';


function CutomOverlay(props: any) {
    return (
        <Overlay target={props.target.current} show={props.show} placement="bottom">
            {({
                placement: _placement,
                arrowProps: _arrowProps,
                show: _show,
                popper: _popper,
                hasDoneInitialMeasure: _hasDoneInitialMeasure,
                ...overlayProps
            }) => (
                <div
                    {...overlayProps}
                    className="tooltip"
                    style={{
                        position: 'absolute',
                        backgroundColor: 'white',
                        padding: '20px',
                        color: 'black',
                        borderRadius: 3,
                        boxShadow: '0px 1px 1px 1px gray',
                        ...overlayProps.style,
                    }}
                >
                    {props.children} {/* ✅ This will now render */}
                </div>
            )}
        </Overlay>
    );
}

export default CutomOverlay;