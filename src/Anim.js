import React, { Component } from 'react';

class Anim extends Component {
    constructor() {
        super();
        this.state = {
            show : true
        }
    }

    hiddenOrShow(){
      this.setState({
          show: !this.state.show
      });
    };


//{setTimeout(this.hiddenOrShow.bind(this), Math.floor(Math.random() * (100 - 500 + 1)) + 100)}
    render(){

        return(
            <div>
                {setTimeout(this.hiddenOrShow.bind(this), Math.floor(Math.random() * (100 - 500 + 1)) + 100)}
                <svg width="640.0000000000001" height="480">
                    <g>
                        <rect fill="#FF0000" stroke="#000000" strokeWidth="5" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" x="227.66667" y="226.66667" width="135" height="235" id="svg_3"/>
                        <ellipse fill="#FF0000" strokeWidth="5" cx="295" cy="182.16667" id="svg_1" rx="96" ry="90.5" stroke="#000000"/>
                        <rect fill="#FF0000" stroke="#000000" strokeWidth="5" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" x="104" y="247" width="1" height="0" id="svg_2"/>
                        <ellipse fill="#FF0000" strokeWidth="5" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="255" cy="176.83333" id="svg_4" rx="15" ry="16" stroke="#000000"/>
                        <ellipse fill="#FF0000" strokeWidth="5" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="331.83333" cy="170" id="svg_5" rx="18" ry="18" stroke="#000000"/>
                        <ellipse stroke="#000000" fill="#FF0000" strokeWidth="5" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="296" cy="245.33334" id="svg_6" rx="20" ry="5"/>
                        <ellipse fill="#FF0000" stroke="#a81515" strokeWidth="5" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="623" cy="112" id="svg_9" rx="1"/>

                        {
                            this.state.show ?
                                <ellipse  stroke="#000000" id="svg_7" fill="#FF0000" strokeWidth="5" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="296" cy="245.33333" rx="20" ry="2.33334"/> :
                         null
                        }

                    </g>
                </svg>
            </div>
        );
    }
}
export default Anim
