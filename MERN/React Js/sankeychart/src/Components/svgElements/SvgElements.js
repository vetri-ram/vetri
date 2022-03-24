import React from 'react';

const Svgelements = () => {
    return (
        <div>
            <svg id="sankey_svg" height="600" width="600" xmlns="http://www.w3.org/2000/svg" version="1.1">
<title>Your Diagram Title</title>

<rect height="600" width="600" fill="#ffffff"></rect>
<g transform="translate(12,18)">
<g id="sankey_flows">
<path class="link" d="M8 235.05317C146 235.05317 146 236.61288 284 236.61288" style={{stroke: "#AF601A" , opacity: 0.4 ,fill:"none", strokeWidth: 406.286}}>
    <title>Wages 
        Budget:1,500
        </title></path>
<path class="link" d="M292 94.41288C430 94.41288 430 60.94286 568 60.94286" style={{stroke: "rgb(153, 0, 204)", opacity: 0.4, fill: "none", strokeWidth: 121.886}}><title>Budget &#8594; Taxes:
450</title></path>
<path class="link" d="M292 212.23573C430 212.23573 430 196.76571 568 196.76571" style={{stroke: "rgb(198, 219, 239)", opacity: 0.4, fill: "none", strokeWidth: 113.76}}><title>Budget &#8594; Housing:
420</title></path>
<path class="link" d="M292 323.28716C430 323.28716 430 325.81714 568 325.81714" style={{stroke:" rgb(230, 85, 13)", opacity: 0.4, fill: "none", strokeWidth: 108.343}}><title>Budget &#8594; Food:
400</title></path>
<path class="link" d="M292 417.41002C430 417.41002 430 437.94 568 437.94" style={{stroke: "rgb(253, 141, 60)", opacity: 0.4, fill: "none", strokeWidth: 79.9029}}><title>Budget &#8594; Transportation:
295</title></path>
<path class="link" d="M8 490.05317C146 490.05317 146 473.61288 284 473.61288" style={{stroke: "rgb(107, 174, 214)", opacity: 0.4, fill: "none", strokeWidth: 67.7143}}><title>Other &#8594; Budget:
250</title></path>
<path class="link" d="M292 485.80145C430 485.80145 430 542.33143 568 542.33143" style={{stroke: "rgb(0, 255, 0)", opacity: 0.4, fill: "none", strokeWidth: 43.3371}}><title>Budget &#8594; Other Necessities:
160</title></path>
<path class="link" d="M292 460.74716C430 460.74716 430 499.27714 568 499.27714" style={{stroke: "rgb(253, 174, 107)", opacity: 0.4, fill: "none", strokeWidth: 6.77143}}><title>Budget &#8594; Savings:
25</title></path>
</g>
<g id="sankey_nodes" shape-rendering="crispEdges" style={{strokeWidth: 0}}>
<g class="node"><rect x="568" y="0" height="121.88571" width="8" id="r0" class="for_r0" style={{fill: "rgb(153, 0, 204)", fillOpacity: 1, stroke: "rgb(74, 0, 99)"}}><title>Taxes:
450</title></rect>
</g>
<g class="node"><rect x="0" y="31.91031" height="406.28571" width="8" id="r1" class="for_r1" style={{fill:" rgb(49, 130, 189)", fillOpacity: 1, stroke: "rgb(24, 63, 92)"}}><title>Wages:
1,500</title></rect>
</g>
<g class="node"><rect x="284" y="33.47002" height="474" width="8" id="r2" class="for_r2" style={{fill: "rgb(107, 174, 214)", fillOpacity: 1, stroke: "rgb(52, 85, 104)"}}><title>Budget:
1,750</title></rect>
</g>
<g class="node"><rect x="0" y="456.19602" height="67.71429" width="8" id="r3" class="for_r3" style={{fill: "rgb(158, 202, 225)", fillOpacity: 1, stroke: "rgb(77, 98, 110)"}}><title>Other:
250</title></rect>
</g>
<g class="node"><rect x="568" y="139.88571" height="113.76" width="8" id="r4" class="for_r4" style={{fill:" rgb(198, 219, 239)", fillOpacity: 1, stroke: "rgb(97, 107, 117)"}}><title>Housing:
420</title></rect>
</g>
<g class="node"><rect x="568" y="271.64571" height="108.34286" width="8" id="r5" class="for_r5" style={{fill:" rgb(230, 85, 13)", fillOpacity: 1, stroke: "rgb(112, 41, 6)"}}><title>Food:
400</title></rect>
</g>
<g class="node"><rect x="568" y="397.98857" height="79.90286" width="8" id="r6" class="for_r6" style={{fill: "rgb(253, 141, 60)", fillOpacity: 1, stroke: "rgb(123, 69, 29)"}}><title>Transportation:
295</title></rect>
</g>
<g class="node"><rect x="568" y="495.89143" height="6.77143" width="8" id="r7" class="for_r7" style={{fill: "rgb(253, 174, 107)", fillOpacity: 1, stroke: "rgb(123, 85, 52)"}}><title>Savings:
25</title></rect>
</g>
<g class="node"><rect x="568" y="520.66286" height="43.33714" width="8" id="r8" class="for_r8" style={{fill: "rgb(158, 202, 225)", fillOpacity: 1, stroke: "rgb(77, 98, 110)"}}><title>Other Necessities:
160</title></rect>
</g>
</g>
<g id="sankey_labels" style={{fontFamily:"sans-serif", fontSize: 15, fontWeight: 400, fill: "rgb(0, 0, 0)"}}>
<text text-anchor="middle" x="288" y="577" style={{fontSize: 11, fontWeight: 400, fill: "rgb(127, 127, 127)"}}>Made with SankeyMATIC</text>
<text text-anchor="end" x="562" y="60.94286" dy=".35em" class="for_r0">Taxes: 450</text>
<text text-anchor="start" x="14" y="235.05317" dy=".35em" class="for_r1">Wages: 1,500</text>
<text text-anchor="end" x="278" y="270.47002" dy=".35em" class="for_r2">Budget: 1,750</text>
<text text-anchor="start" x="14" y="490.05317" dy=".35em" class="for_r3">Other: 250</text>
<text text-anchor="end" x="562" y="196.76571" dy=".35em" class="for_r4">Housing: 420</text>
<text text-anchor="end" x="562" y="325.81714" dy=".35em" class="for_r5">Food: 400</text>
<text text-anchor="end" x="562" y="437.94" dy=".35em" class="for_r6">Transportation: 295</text>
<text text-anchor="end" x="562" y="499.27714" dy=".35em" class="for_r7">Savings: 25</text>
<text text-anchor="end" x="562" y="542.33143" dy=".35em" class="for_r8">Other Necessities: 160</text>
</g>
</g></svg>
       
        </div>
    );
}

export default Svgelements;
