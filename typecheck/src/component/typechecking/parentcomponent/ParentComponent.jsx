import React from 'react';
import ChildComponent from'../childcomponent/ChildComponent';

 const ParentComponent=()=>{

        const optionalFunc=()=>{
            alert("hello i am clicked");
        }

    return (
        <div>
            <ChildComponent 
            name='vishal'
            data
            strnum={'SDW'}
            ary={[1,2,3,4,4,12,112]}
            aryObj={[{name:'vishal',age:'23'},{name:'aksash',age:'21'}]}
            onclick={optionalFunc}
            requiredAny='visal1223!@#'
            optionalEnum={'iamgae1 image2'}
            age={25}
            />
            <h2>hello i am from parent component</h2>
        </div>
    )
}
 
export default ParentComponent;