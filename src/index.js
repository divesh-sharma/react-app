import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>             <div>
                <h1>Warnings?</h1>
            Are you sure you want to do this?
   

                </div>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="sam" timeAgo="Today at 4:55PM"
   content="Nice Blog post"
   authorImage={faker.image.avatar()}/>
            </ApprovalCard>
 <ApprovalCard>
 <CommentDetail  author="Alex" timeAgo="Today at 2:00PM"
   content="I Like the subject"
   authorImage={faker.image.avatar()}/>
 </ApprovalCard>
   <ApprovalCard>
   <CommentDetail author="Jane" timeAgo="Today at 9:00PM" 
   content="It good one"
   authorImage={faker.image.avatar()}/>
   
   </ApprovalCard>
   
        </div>
        
    );
};
ReactDOM.render(<App />,document.querySelector('#root'));