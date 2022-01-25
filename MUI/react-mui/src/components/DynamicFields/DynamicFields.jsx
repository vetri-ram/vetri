import React,{useState} from 'react';
import './DynamicFields.scss';
const Dynamicfields = () => {
    const [serviceList, setServiceList] = useState([
        {
            service: ""
        },
        ]);
        

    const handleServiceChange = (e, index) => {
         const {name, value} = e.target
         const list = [...serviceList];
         list[index][name] = value;
         setServiceList(list);
    }
      
    const handleServiceAdd = () => {
        setServiceList([...serviceList, {service:""}])
    }

    const handleServiceRemove = (index) => {
        const list = [...serviceList]
        list.splice(index, 1)
        setServiceList(list)
    }

    return (
        <div>
            <form className='main-form' autoComplete='off'>
                <div className='form-field'>
                    <label htmlFor='service' className='label-service'>Service(s)</label>
                    {serviceList.map((singleService,index)=>(
                               <div key={index} className='services'>
                               <div className='first-section'>
                                   <input 
                                   name='service'
                                   type='text'
                                   id='service'
                                   className='input-field'
                                   value={singleService.service}
                                   onChange={(e) => handleServiceChange(e,index)}
                                   required
                                   />
                                   {serviceList.length - 1 === index && serviceList.length < 5 &&
                                   ( 
                                    <button type='button' className='add-btn' onClick={handleServiceAdd}>
                                    <span>Add a Service</span>
                                   </button>
                                   )}
                                   
                               </div>
                               <div className='second-section'>
                                   {serviceList.length > 1 && 
                                   (
                                   <button type='button' className='remove-btn' onClick={handleServiceRemove}>
                                       <span>Remove</span>
                                   </button>
                                   )}
                                   
                               </div>
                           </div>
                    ))}
                
                </div>
                <div className='output'>
                    <h3>Output</h3>
                    {
                        serviceList.map((singleService, index) => (
                            <ul>
                                {singleService.service && <li>{singleService.service}</li>}
                            </ul>
                        ))
                    }
                </div>
            </form>
        </div>
    );
}

export default Dynamicfields;
