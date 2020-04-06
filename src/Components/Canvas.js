import React from 'react';
import {SketchField, Tools} from 'react-sketch';

class Canvas extends React.Component {
     render() {
        return (
            <SketchField width='1024px'
                         height='768px'
                         tool={Tools.Pencil}
                         lineColor='black'
                         lineWidth={3}/>
        )
     }
}

export default Canvas
