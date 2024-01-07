// let projects=
//     [
//         {
//             "name":"Question Paper Provider",
//             "link":"https://btup-8c583.web.app/",
//             "descrption":[
//                 "-Implemented a dynamic system that allows users to select their course, branch, and semester preferences.",
//                 "-Utilized a Node.js backend with a REST API to retrieve question paper links from a MongoDB database.",
//                 "-Provided users with tailored question papers based on their selections."

//             ]
//         },
//         {
//             "name":"Quiz Application",
//             "link":"https://quizbymohar.netlify.app/",
//             "descrption":[
//                 "-Implemented a user-friendly interface with single-question visibility.",
//                 "-Enabled easy navigation through <em>Previous</em> and <em>Next</em> buttons.",
//                 "-Added functionality for users to submit their answers for immediate evaluation.",
//                 "-Displayed results, including the number of correct and incorrect answers, and the overall score."

//             ]

//         }

//     ]


 let data=async()=>{
     fetch('http://localhost:8000/data',
    {
        method:'get',
 }).then(res=>res.json())
 .then(result=>{
    return result
 })


}

const projects=data();

export {projects};



    