import React,{useRef,useEffect,useState} from 'react';
import './Basic.css';
import {select, line , curveCardinal} from 'd3';
import Svg from '../svgElements/SvgElements';


const Basicd3 = () => {
    const [sankey, setSankey] = useState(" ");
    const [data, setData] = useState([25,34,57,65,87,10,75,95]);
    const svgRef = useRef();
    useEffect(() => {
        
        const svg = select(svgRef.current);
        const myLine = line()
        .x((value,index) => index * 50)
        .y(value => 150 - value)
        .curve(curveCardinal);
        // svg.selectAll("circle")
        // .data(data)
        // .join(
        //     enter => enter.append("circle").attr("class","new"),           
        //     update => update.attr("class","update"),
        //     exit => exit.remove()
        // )
        // .attr('r',value => value)
        // .attr('cx',value => value*2)
        // .attr('cy',value => value * 2)
        // .attr('stroke', "red");

        svg.selectAll("path")
        .data([data])
        .join("path")
        .attr("d",value => myLine(value))
        .attr("fill","none")
        .attr("stroke","blue");
    }, [data]);
    const chart = ()=>{
       setSankey(()=>{
         return <>
           <Svg/>
           </>
       })
    }
    return (
       <div className='container'>
       <svg ref={svgRef}></svg>
       <br/>
       <button onClick={()=>setData(data.map(value=>value+5))}>
           update data</button>
           <button onClick={()=>setData(data.filter(value=>value <35))}>
           filter data</button>

           <br/>
           
           <button onClick={chart}>Open Sankey</button>
           {sankey}
       </div>
    );
}

export default Basicd3;
